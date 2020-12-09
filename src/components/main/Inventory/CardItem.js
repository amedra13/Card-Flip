import React, { useState } from 'react';
import db from '../../../database';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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
		<form className={`cardItem ${editing && `active`}`}>
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
			{!editing ? (
				<>
					<IconButton className="carditem__editButton">
						<EditIcon onClick={() => setEditing(true)} />
					</IconButton>
					<IconButton className="carditem__deleteButton">
						<DeleteIcon />
					</IconButton>
				</>
			) : (
				<>
					<IconButton className="carditem__saveButton">
						<SaveIcon onClick={() => editCard()} />
					</IconButton>
					<IconButton className="carditem__deleteButton">
						<DeleteIcon />
					</IconButton>
				</>
			)}
		</form>
	);
};

export default CardItem;
