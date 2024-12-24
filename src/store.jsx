import { createStore } from 'redux';

export const scorePlayer1 = () => ({
    type: 'PLAYER_1_SCORE'
});

export const scorePlayer2 = () => ({
    type: 'PLAYER_2_SCORE'
});

export const resetGame = () => ({
    type: 'RESET_GAME'
});

export const togglePause = () => ({
    type: 'TOGGLE_PAUSE'
});

const initialState = { score1: 0, score2: 0, pause: false }

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLAYER_1_SCORE':
            if(!state.pause) {
                return { ...state, score1: state.score1 + 1 };
            } else {
                return state;
            }
        case 'PLAYER_2_SCORE':
            if(!state.pause) {
                return { ...state, score2: state.score2 + 1 };
            } else {
                return state;
            }
        case 'RESET_GAME':
            return initialState;
        case 'TOGGLE_PAUSE':
            return { ...state, pause: !state.pause };
        default:
            return state;
    }
};

export const store =  createStore(gameReducer);