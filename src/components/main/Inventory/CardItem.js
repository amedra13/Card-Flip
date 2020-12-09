import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const CardItem = ({ card }) => {
	return (
		<ul className="cardItem">
			<li className="carditem__editButton">
				<EditIcon fontSize="small" />
			</li>
			<li>{card.year}</li>
			<li>{card.brand}</li>
			<li>{card.parallel}</li>
			<li>{card.name}</li>
			<li>{card.grade}</li>
			<li>${card.cost.toFixed(2)}</li>
		</ul>
	);
};

export default CardItem;
