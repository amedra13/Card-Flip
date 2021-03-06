import React, { useState } from 'react';
import { connect } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import * as actions from '../../../../store/actions/actions';
import db from '../../../../database';

const AddCard = (props) => {
	const [year, setYear] = useState('');
	const [brand, setBrand] = useState('');
	const [parallel, setParallel] = useState('Base');
	const [name, setName] = useState('');
	const [grade, setGrade] = useState('');
	const [cost, setCost] = useState(0);
	// const [profit, setProfit] = useState(0)

	const submitHandler = (e) => {
		e.preventDefault();
		let ref = db.collection('inventory').doc();
		let id = ref.id;

		const newCard = {
			year: year,
			brand: brand,
			parallel: parallel,
			name: name,
			grade: grade,
			cost: Number(cost),
			sold: false,
			salePrice: 0,
			id: id,
		};
		db.collection('inventory')
			.doc(id)
			.set(newCard)
			.then((res) => {
				props.onClose();
			});
	};
	return (
		<div className="addCard">
			<div className="addCard__title">
				<PersonAddIcon />
				<h3>Add Card Information</h3>
			</div>
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
				<div className="addCard__formFooter">
					<button type="submit">Add Card to Inventory</button>
					<button onClick={() => props.onClose()}>Close</button>
				</div>
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
