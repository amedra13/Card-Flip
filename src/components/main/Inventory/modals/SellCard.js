import React from 'react';
import { connect } from 'react-redux';
import '../../../../styles/modals.scss';

const SellCard = (props) => {
	return (
		<div className="modal__sellCard">
			<form>
				<h1>Congradulation! How much was the sold for??</h1>
				<label htmlFor="salePrice">Sale Price: </label>
				<input type="number" />
			</form>
			<button onClick={() => console.log(props.card)}></button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		sellingCard: state.sellingCard,
	};
};

export default connect(mapStateToProps)(SellCard);
