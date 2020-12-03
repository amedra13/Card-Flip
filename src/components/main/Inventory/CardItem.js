import React from 'react';

const CardItem = ({ card }) => {
	return (
		<ul className="cardItem">
			<li>{card.year}</li>
			<li>{card.brand}</li>
			<li>{card.parallel}</li>
			<li>{card.name}</li>
			<li>{card.grade}</li>
			<li>${card.cost.toFixed(2)}</li>
			<li>${card.sold.toFixed(2)}</li>
			<li>${card.profit.toFixed(2)}</li>
		</ul>
	);
};

export default CardItem;
