export const addCard = () => {
	return {
		type: 'ADD_CARD',
	};
};

export const setInventory = (data) => {
	return {
		type: 'SET_INVENTORY',
		inventory: data,
	};
};