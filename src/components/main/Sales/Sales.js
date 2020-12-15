import React from 'react';
import { connect } from 'react-redux';
import SoldItem from './SoldItem';
import SalesAnalysis from './SalesAnalysis';

import '../../../styles/sales.scss';

const Sales = (props) => {
	let soldInventory = props.inventory?.filter((item) => item.sold === true);

	return (
		<div className="sales mainContent">
			<ul className="sales__header">
				<li>Year</li>
				<li>Brand</li>
				<li>Parallel</li>
				<li>Player</li>
				<li>Grade</li>
				<li>Cost</li>
				<li>Sale</li>
				<li>Profit</li>
			</ul>
			<div className="sales__itemContainer">
				{soldInventory.map((item) => (
					<SoldItem key={item.id} card={item} id={item.id} />
				))}
			</div>
			<SalesAnalysis inventory={soldInventory} />
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		inventory: state.inventory,
	};
};
export default connect(mapStateToProps)(Sales);
