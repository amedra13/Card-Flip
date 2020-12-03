import React from 'react';

const AddCard = () => {
	return (
		<div className="addCard">
			<h2>Add Card Information</h2>
			<form className="addCard__form">
				<div>
					<label htmlFor="year">Year</label>
					<input type="text" id="year" />
				</div>
				<div>
					<label htmlFor="brand">Brand</label>
					<input type="text" id="brand" />
				</div>
				<div>
					<label htmlFor="parallel">Parallel</label>
					<input type="text" id="parallel" placeholder="(Optional)" />
				</div>
				<div>
					<label htmlFor="name">Player Name</label>
					<input type="text" id="name" />
				</div>
				<div>
					<label htmlFor="grade">Grade</label>
					<input type="text" id="grade" />
				</div>
				<div>
					<label htmlFor="cost">Cost</label>
					<input type="number" id="cost" />
				</div>
				<div>
					<label htmlFor="sale">Sold</label>
					<input type="number" id="sale" placeholder="(Optional)" />
				</div>
				<button>Add Card to Inventory</button>
			</form>
		</div>
	);
};

export default AddCard;
