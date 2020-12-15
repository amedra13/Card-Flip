import React, { useState } from 'react';
import { connect } from 'react-redux';
import db from '../../../database';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import * as actions from '../../../store/actions/actions';

const CardItem = (props) => {
	const [year, setYear] = useState(props.card.year);
	const [brand, setBrand] = useState(props.card.brand);
	const [parallel, setParallel] = useState(props.card.parallel);
	const [name, setName] = useState(props.card.name);
	const [grade, setGrade] = useState(props.card.grade);
	const [cost, setCost] = useState(props.card.cost);

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
			.doc(props.id)
			.update(updateCard)
			.then((res) => {
				setEditing(false);
			});
	};

	const deleteCard = () => {
		db.collection('inventory')
			.doc(props.id)
			.delete()
			.then((res) => {
				console.log(`Deleted Card Item`);
			});
	};
	return (
		<form className={`cardItem ${editing && `active`}`}>
			<IconButton
				className="carditem__saleButton"
				onClick={() =>
					props.onSellCard({
						year: year,
						brand: brand,
						name: name,
						id: props.id,
					})
				}
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

const mapDispatchToProps = (dispatch) => {
	return {
		onSellCard: (player) => dispatch(actions.sellCard(player)),
	};
};
export default connect(null, mapDispatchToProps)(CardItem);
