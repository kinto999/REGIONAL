import { createStore } from 'redux';

const joueur_1 = 'score_pour_player_1';
const joueur_2 = 'score_pour_player_2';
const reinitialiser = 'reinitialiser';
const pause_reprendre= 'pause_reprendre';

export const scorep1 = () => ({
    type: joueur_1
});

export const scorep2 = () => ({
    type: joueur_2
});

export const reinit = () => ({
    type: reinitialiser
});

export const pr = () => ({
    type: pause_reprendre
});


const initState = { s1: 0, s2: 0, pauser: false }

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case joueur_1:
            if(!state.pauser) {
                return { ...state, s1: state.s1 + 1 };
            } else {
                return state;
            }
        case joueur_2:
            if(!state.pauser) {
                return { ...state, s2: state.s2 + 1 };
            } else {
                return state;
            }
        case reinitialiser:
            return { ...state, s1: 0, s2: 0 };
        case pause_reprendre:
            return { ...state, pauser: !state.pauser };
        default:
            return state;
    }
}

export const store = createStore(Reducer)