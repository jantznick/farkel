const initialState = {
	id: 100
};

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'END_ROLL':
			return {
				...state,
			}
		default:
			return state
	}
}

export default game