const initialState = [
	{
		number: 1,
		id: []
	}
]

const roll = (state = initialState, action) => {
	switch (action.type) {
		case 'PLAYER_ROLL':
			return state
		default:
			return state
	}
}

export default roll