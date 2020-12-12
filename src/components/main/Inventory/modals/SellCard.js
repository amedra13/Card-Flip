import React, { useState } from 'react';
import { connect } from 'react-redux';
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
			<form>
				<h1>
					Congradulation! How much was the {props.player.year}{' '}
					{props.player.brand} {props.player.name} sold for??
				</h1>
				<label htmlFor="salePrice">Sale Price: </label>
				<input
					type="number"
					value={salePrice}
					onChange={(e) => setSalePrice(e.target.value)}
				/>
			</form>
			<button onClick={() => submitHandler(props.player.id)}>Sell Card</button>
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
