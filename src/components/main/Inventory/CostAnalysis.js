import React, { useState, useEffect } from 'react';

const CostAnalysis = ({ inventory }) => {
	const [totalCost, setTotalCost] = useState(0);

	useEffect(() => {
		let cost = inventory.reduce((cost, item) => (cost += item.cost), 0);
		setTotalCost(cost.toFixed(2));
	}, [inventory]);

	return (
		<div className="costAnalysis">
			<div className="cost">
				<h4>Cost:</h4>
				<h4>${totalCost}</h4>
			</div>
		</div>
	);
};

export default CostAnalysis;
