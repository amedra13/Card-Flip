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
	return {
		type: 'SET_INVENTORY',
		inventory: data,
	};
};
