import React from 'react';

const CardItem = ({ card }) => {
	return (
		<ul className="cardItem">
			<li>{card.year}</li>
			<li>{card.brand}</li>
			<li>{card.parallel}</li>
			<li>{card.name}</li>
			<li>{card.grade}</li>
			<li>${card.cost}</li>
			<li>${card.sold}</li>
			<li>${card.profit}</li>
		</ul>
	);
};

export default CardItem;
