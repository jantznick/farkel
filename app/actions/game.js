export const startGame = () => ({
	type: 'START_GAME'
});

export const endGame = (id) => ({
	type: 'END_GAME',
	action: {
		winner: id
	}
});

