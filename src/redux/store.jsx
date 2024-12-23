import { createStore } from 'redux';

const PLAYER1SCORE = 'P_1_SCORE';
const PLAYER2SCORE = 'P_2_SCORE';
const RESET = 'RESET';
const TOGGLE = 'TOGGLE';

export const addscoretop1 = () => ({
    type: PLAYER1SCORE
});

export const addscoretop2 = () => ({
    type: PLAYER2SCORE
});

export const reset = () => ({
    type: RESET
});

export const toggle = () => ({
    type: TOGGLE
});


const initState = { p1: 0, p2: 0, isPaused: false}

const tennisReducer = (state = initState, action) => {
    switch(action.type) {
        case PLAYER1SCORE:
            if(!state.isPaused) {
                return { ...state, p1: state.p1 + 1};
            } else {
                return state;
            }
        case PLAYER2SCORE:
            if(!state.isPaused) {
                return { ...state, p2: state.p2 + 1};
            } else {
                return state;
            }
        case RESET:
            return { ...state, p1: 0, p2: 0};
        case TOGGLE:
            return { ...state, isPaused: !state.isPaused };
        default:
            return state;
    }
}

export const store = createStore(tennisReducer)