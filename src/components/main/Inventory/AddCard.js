import React, { useState } from 'react';
import db from '../../../database';

const AddCard = () => {
	const [year, setYear] = useState('');
	const [brand, setBrand] = useState('');
	const [parallel, setParallel] = useState('');
	const [name, setName] = useState('');
	const [grade, setGrade] = useState('');
	const [cost, setCost] = useState(0);
	const [sale, setSale] = useState(0);
	// const [profit, setProfit] = useState(0)

	const submitHandler = (e) => {
		e.preventDefault();
		const newCard = {
			year: year,
			brand: brand,
			parallel: parallel,
			name: name,
			grade: Number(grade),
			cost: Number(cost),
			sold: Number(sale),
			profit: sale - cost,
		};
		db.collection('inventory')
			.add(newCard)
			.then((res) => {
				console.log(res);
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
					/>
				</div>
				<div>
					<label htmlFor="brand">Brand</label>
					<input
						type="text"
						id="brand"
						value={brand}
						onChange={(e) => setBrand(e.target.value)}
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
					/>
				</div>
				<div>
					<label htmlFor="grade">Grade</label>
					<input
						type="number"
						id="grade"
						value={grade}
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
					/>
				</div>
				<div>
					<label htmlFor="sale">Sold</label>
					<input
						type="number"
						id="sale"
						placeholder="(Optional)"
						value={sale}
						onChange={(e) => setSale(e.target.value)}
					/>
				</div>
				<button type="submit">Add Card to Inventory</button>
			</form>
		</div>
	);
};

export default AddCard;
