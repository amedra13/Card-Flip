import React from 'react';
import { connect } from 'react-redux';

const CostAnalysis = (props) => {
	return (
		<div className="costAnalysis">
			<div className="cost">
				<h4>Cost:</h4>
				<h4>${props.cost}</h4>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cost: state.cost,
	};
};
export default connect(mapStateToProps)(CostAnalysis);
