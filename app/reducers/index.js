import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import game from './game';
import players from './players';
import roll from './roll';
import score from './score';

const rootReducer = combineReducers({
	game,
	players,
	roll,
	score
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;