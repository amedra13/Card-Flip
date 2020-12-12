import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import '../../../../styles/modals.scss';
import * as actions from '../../../../store/actions/actions';
import db from '../../../../database';

const SellCard = (props) => {
	const [salePrice, setSalePrice] = useState(0);

	const submitHandler = (id) => {
		db.collection('inventory')
			.doc(id)
			.update({
				sold: true,
				salePrice: Number(salePrice),
			})
			.then((res) => {
				props.onSellCard(null);
			});
	};

	return (
		<div className="modal__sellCard">
			<h1>Congratulations!</h1>
			<h2>
				How much was the <span>{props.player.year}</span>{' '}
				<span>{props.player.brand}</span> <span>{props.player.name}</span> sold
				for??
			</h2>
			<div>
				<h4>Sale Price: </h4>
				<input
					type="number"
					value={salePrice}
					onChange={(e) => setSalePrice(e.target.value)}
				/>
			</div>
			<Button onClick={() => submitHandler(props.player.id)}>Sell Card</Button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		sellingCard: state.sellCard,
		player: state.player,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSellCard: (player) => dispatch(actions.sellCard(player)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SellCard);
