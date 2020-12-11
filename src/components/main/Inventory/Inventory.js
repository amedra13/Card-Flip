import React from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';
import CostAnalysis from './CostAnalysis';
import AddCard from './modals/AddCard';
// import SellCard from './modals/SellCard';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import * as actions from '../../../store/actions/actions';
import '../../../styles/inventory.scss';

const Inventory = (props) => {
	return (
		<div className="inventory mainContent">
			<ul className="inventory__description">
				<li></li>
				<li>Year</li>
				<li>Brand</li>
				<li>Parallel</li>
				<li>Player</li>
				<li>Grade</li>
				<li>Cost</li>
			</ul>
			<div className="inventory__itemContainer">
				{props.inventory &&
					props.inventory.map((item) => (
						<CardItem
							key={item.id}
							card={item}
							id={item.id}
							sellCard={props.sellCard}
						/>
					))}
				{props.inventory.length > 0 && (
					<CostAnalysis inventory={props.inventory} />
				)}
				<IconButton onClick={() => props.onSellCard()}>
					<AddCircleIcon className="inventory__addIcon" fontSize="large" />
				</IconButton>
				{props.addCard && <AddCard />}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		addCard: state.addCard,
		inventory: state.inventory,
		sellCard: state.sellCard,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAddCard: () => dispatch(actions.addCard()),
		onSellCard: () => dispatch(actions.sellCard()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
