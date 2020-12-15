const initialState = {
	addCard: false,
	inventory: [],
	sellCard: false,
	player: null,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return { ...state, addCard: !state.addCard };
		case 'SELL_CARD':
			return {
				...state,
				sellCard: !state.sellCard,
				player: action.player,
			};
		case 'SET_INVENTORY':
			return { ...state, inventory: action.inventory };
		default:
			return state;
	}
};

export default rootReducer;
