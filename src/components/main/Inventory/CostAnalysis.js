import React, { useState, useEffect } from 'react';

const CostAnalysis = ({ inventory }) => {
	const [totalCost, setTotalCost] = useState(0);
	const [totalSales, setTotalSales] = useState(0);
	const [profit, setProfit] = useState(0);

	useEffect(() => {
		let cost = inventory.reduce((cost, item) => (cost += item.cost), 0);
		let sales = inventory.reduce((sale, item) => (sale += item.sold), 0);

		setTotalCost(cost.toFixed(2));
		setTotalSales(sales.toFixed(2));
		setProfit((sales - cost).toFixed(2));
	}, [inventory, profit]);

	return (
		<div className="costAnalysis">
			<div className="cost">
				<h4>Cost:</h4>
				<h4>${totalCost}</h4>
			</div>
			<div className="sales">
				<h4>Sales:</h4>
				<h4>${totalSales}</h4>
			</div>
			<div className="profit">
				<h4>Profit:</h4>
				<h4>${profit}</h4>
			</div>
		</div>
	);
};

export default CostAnalysis;
