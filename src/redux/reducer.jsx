import { PLAYER1SCORE } from "./actionTypes"
import { PLAYER2SCORE } from "./actionTypes"
import { RESET } from "./actionTypes"
import { TOGGLE } from "./actionTypes"

const initState = { p1: 0, p2: 0, isPaused: false}

export const tennisReducer = (state = initState, action) => {
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