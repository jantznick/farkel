const initialState = {
	status: 'waiting',
	players: 1,
	computers: 0,
	winner: ''
};

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'START_GAME':
			return {
				...state,
				status: 'playing'
			}
		case 'END_GAME':
			return {
				...state,
				status: 'finished',
				winner: action.winner
			}
		default:
			return state
	}
}

export default game