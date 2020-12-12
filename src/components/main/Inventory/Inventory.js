import React from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';
import CostAnalysis from './CostAnalysis';
import AddCard from './modals/AddCard';
import SellCard from './modals/SellCard';
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
						<CardItem key={item.id} card={item} id={item.id} />
					))}
				{props.inventory.length > 0 && (
					<CostAnalysis inventory={props.inventory} />
				)}
				<IconButton onClick={() => console.log(props.sellCard, props.player)}>
					<AddCircleIcon className="inventory__addIcon" fontSize="large" />
				</IconButton>
				{props.addCard && <AddCard />}
				{props.sellCard && <SellCard />}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		addCard: state.addCard,
		inventory: state.inventory,
		sellCard: state.sellCard,
		player: state.player,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAddCard: () => dispatch(actions.addCard()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
