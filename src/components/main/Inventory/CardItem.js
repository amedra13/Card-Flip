import React, { useState } from 'react';
import db from '../../../database';
// import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

const CardItem = ({ card, id }) => {
	const [year, setYear] = useState(card.year);
	const [brand, setBrand] = useState(card.brand);
	const [parallel, setParallel] = useState(card.parallel);
	const [name, setName] = useState(card.name);
	const [grade, setGrade] = useState(card.grade);
	const [cost, setCost] = useState(card.cost);

	const [editing, setEditing] = useState(false);

	const editCard = () => {
		const updateCard = {
			year: year,
			brand: brand,
			parallel: parallel,
			name: name,
			grade: grade,
			cost: Number(cost),
		};
		db.collection('inventory')
			.doc(id)
			.update(updateCard)
			.then((res) => {
				setEditing(false);
			});
	};

	return (
		<form className="cardItem">
			{!editing ? (
				<EditIcon
					className="carditem__editButton"
					onClick={() => setEditing(true)}
				/>
			) : (
				<SaveIcon className="carditem__editButton" onClick={() => editCard()} />
			)}
			<input
				type="text"
				value={year}
				disabled={!editing}
				onChange={(e) => setYear(e.target.value)}
			/>
			<input
				type="text"
				value={brand}
				disabled={!editing}
				onChange={(e) => setBrand(e.target.value)}
			/>
			<input
				type="text"
				value={parallel}
				disabled={!editing}
				onChange={(e) => setParallel(e.target.value)}
			/>
			<input
				type="text"
				value={name}
				disabled={!editing}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="text"
				value={grade}
				disabled={!editing}
				onChange={(e) => setGrade(e.target.value)}
			/>
			<input
				type="number"
				value={cost}
				disabled={!editing}
				onChange={(e) => setCost(e.target.value)}
			/>
		</form>
	);
};

export default CardItem;
