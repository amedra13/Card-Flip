import React from 'react';
import CardItem from './CardItem';
import '../../../styles/inventory.scss';

const Inventory = () => {
	return (
		<div className="inventory mainContent">
			<h1>Inventory Component</h1>
			<CardItem />
		</div>
	);
};

export default Inventory;
