const initialState = {
	addCard: false,
	inventory: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return { ...state, addCard: !state.addCard };
		case 'SET_INVENTORY':
			return { ...state, inventory: action.inventory };
		default:
			return state;
	}
};

export default rootReducer;
