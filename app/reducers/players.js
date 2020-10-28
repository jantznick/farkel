const initialState = {
	players: [],
	computers: []
}

const players = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PLAYER':
			return {
				...state,
				players: [action.payload]
			}
		case 'UPDATE_COMPUTER':
			return {
				...state,
				computers: [action.payload]
			}
		default:
			return state
	}
}

export default players