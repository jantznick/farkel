export const addPlayer = () => ({
	type: 'ADD_PLAYER',
	action: {
		userId: 123,
		name: 'Nick'
	}
});

export const updateComputer = (id) => ({
	type: 'UPDATE_COMPUTER',
	action: {
		userId: 234,
		name: 'computer1'
	}
});

