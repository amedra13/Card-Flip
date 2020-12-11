import React, { useState } from 'react';
import db from '../../../database';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const CardItem = ({ card, id, sellCard }) => {
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

	const deleteCard = () => {
		db.collection('inventory')
			.doc(id)
			.delete()
			.then((res) => {
				console.log(`Deleted Card Item`);
			});
	};

	return (
		<form className={`cardItem ${editing && `active`}`}>
			<IconButton
				className="carditem__saleButton"
				onClick={() => console.log(sellCard)}
			>
				<MonetizationOnIcon />
			</IconButton>
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
					<IconButton
						className="carditem__editButton"
						onClick={() => setEditing(true)}
					>
						<EditIcon />
					</IconButton>
					<IconButton
						className="carditem__deleteButton"
						onClick={() => deleteCard()}
					>
						<DeleteIcon />
					</IconButton>
				</>
			) : (
				<>
					<IconButton
						className="carditem__saveButton"
						onClick={() => editCard()}
					>
						<SaveIcon />
					</IconButton>
					<IconButton
						className="carditem__deleteButton"
						onClick={() => deleteCard()}
					>
						<DeleteIcon />
					</IconButton>
				</>
			)}
		</form>
	);
};

export default CardItem;
