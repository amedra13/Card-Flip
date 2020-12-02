import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import db from '../../../database';

import '../../../styles/inventory.scss';

const Inventory = () => {
	const [inventory, setInventory] = useState([]);

	useEffect(() => {
		let data = [];

		db.collection('inventory').onSnapshot((inventory) => {
			inventory.docChanges().forEach((item) => {
				let card = { ...item.doc.data(), id: item.doc.id };
				console.log(card);
				data.push(card);
			});

			setInventory(data);
		});

		console.log(data);
	}, []);
	return (
		<div className="inventory mainContent">
			<ul className="inventory__description">
				<li>Year</li>
				<li>Brand</li>
				<li>Parallel</li>
				<li>Player</li>
				<li>Grade</li>
				<li>Cost</li>
				<li>Sold</li>
				<li>Profit</li>
			</ul>

			{inventory.map((item) => (
				<CardItem key={item.id} card={item} />
			))}
		</div>
	);
};

export default Inventory;
