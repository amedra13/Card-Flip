export const addCard = () => {
	return {
		type: 'ADD_CARD',
	};
};
export const sellCard = (card) => {
	return {
		type: 'SELL_CARD',
	};
};

export const setInventory = (data) => {
	return {
		type: 'SET_INVENTORY',
		inventory: data,
	};
};

export const setCost = (data) => {
	let totalCost = data.reduce((cost, item) => (cost += item.cost), 0);
	return {
		type: 'SET_COST',
		cost: totalCost,
	};
};
