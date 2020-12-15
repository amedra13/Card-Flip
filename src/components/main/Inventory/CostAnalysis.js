import React from 'react';

const CostAnalysis = ({ inventory }) => {
	let unsoldCost = inventory?.reduce((total, item) => (total += item.cost), 0);
	return (
		<div className="costAnalysis">
			<div className="cost">
				<h4>Cost:</h4>
				<h4>${unsoldCost.toFixed(2)}</h4>
			</div>
		</div>
	);
};

export default CostAnalysis;
