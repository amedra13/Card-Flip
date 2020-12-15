export const addCard = () => {
	return {
		type: 'ADD_CARD',
	};
};
export const sellCard = (player) => {
	return {
		type: 'SELL_CARD',
		player: player,
	};
};

export const setInventory = (data) => {
	let unSoldInventory = data.filter((item) => item.sold === false);
	let cost = unSoldInventory.reduce((cost, item) => (cost += item.cost), 0);
	return {
		type: 'SET_INVENTORY',
		inventory: unSoldInventory,
		cost: cost,
	};
};
