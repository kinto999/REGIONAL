import { PLAYER1SCORE } from "./actionTypes"
import { PLAYER2SCORE } from "./actionTypes"
import { RESET } from "./actionTypes"
import { TOGGLE } from "./actionTypes"

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