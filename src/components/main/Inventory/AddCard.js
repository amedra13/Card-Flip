import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/actions';
import db from '../../../database';

const AddCard = (props) => {
	const [year, setYear] = useState('');
	const [brand, setBrand] = useState('');
	const [parallel, setParallel] = useState('Base');
	const [name, setName] = useState('');
	const [grade, setGrade] = useState('N/A');
	const [cost, setCost] = useState(0);
	// const [profit, setProfit] = useState(0)

	const submitHandler = (e) => {
		e.preventDefault();
		const newCard = {
			year: year,
			brand: brand,
			parallel: parallel,
			name: name,
			grade: grade,
			cost: Number(cost),
			sold: false,
			salePrice: 0,
			profit: 0,
		};
		db.collection('inventory')
			.add(newCard)
			.then((res) => {
				props.onClose();
			});
	};
	return (
		<div className="addCard">
			<h2>Add Card Information</h2>
			<form onSubmit={submitHandler} className="addCard__form">
				<div>
					<label htmlFor="year">Year</label>
					<input
						type="text"
						id="year"
						value={year}
						onChange={(e) => setYear(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="brand">Brand</label>
					<input
						type="text"
						id="brand"
						value={brand}
						onChange={(e) => setBrand(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="parallel">Parallel</label>
					<input
						type="text"
						id="parallel"
						placeholder="(Optional)"
						value={parallel}
						onChange={(e) => setParallel(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="name">Player Name</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="grade">Grade</label>
					<input
						type="number"
						id="grade"
						value={grade}
						placeholder="(Optional)"
						onChange={(e) => setGrade(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="cost">Cost</label>
					<input
						type="number"
						id="cost"
						value={cost}
						onChange={(e) => setCost(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Add Card to Inventory</button>
				<button onClick={() => props.onClose()}>Close</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(actions.addCard()),
	};
};

export default connect(null, mapDispatchToProps)(AddCard);
