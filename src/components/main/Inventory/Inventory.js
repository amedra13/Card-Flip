import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import CostAnalysis from './CostAnalysis';
import AddCard from './AddCard';

import db from '../../../database';
import '../../../styles/inventory.scss';

const Inventory = () => {
	const [inventory, setInventory] = useState([]);
	const [openForm, setOpenForm] = useState(false);

	useEffect(() => {
		let data = [];

		db.collection('inventory').onSnapshot((inventory) => {
			inventory.docChanges().forEach((item) => {
				let card = { ...item.doc.data(), id: item.doc.id };
				data.push(card);
			});

			setInventory(data);
		});
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
			<div className="inventory__itemContainer">
				{inventory &&
					inventory.map((item) => <CardItem key={item.id} card={item} />)}
				{inventory.length > 0 && <CostAnalysis inventory={inventory} />}
				<button onClick={() => setOpenForm(!openForm)}>Add Item</button>
				{openForm && <AddCard />}
			</div>
		</div>
	);
};

export default Inventory;
