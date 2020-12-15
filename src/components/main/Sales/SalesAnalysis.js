import React from 'react';

const SalesAnalysis = ({ inventory }) => {
	let totalCost = inventory?.reduce((total, item) => (total += item.cost), 0);
	let totalSales = inventory?.reduce(
		(total, item) => (total += item.salePrice),
		0
	);
	return (
		<div className="salesAnalysis">
			<div className="salesAnalysis__section">
				<h4>Cost:</h4>
				<h4>${totalCost.toFixed(2)}</h4>
			</div>
			<div className="salesAnalysis__section">
				<h4>Sales</h4>
				<h4>${totalSales.toFixed(2)}</h4>
			</div>
			<div className="salesAnalysis__section">
				<h4>Profit:</h4>
				<h4>${(totalSales - totalCost).toFixed(2)}</h4>
			</div>
		</div>
	);
};

export default SalesAnalysis;
