
const instate = { stagaires: [] };

export const reducer = (state=instate, action) => {
    switch(action.type) {
        case 'ajouter':
            return {...state, stagaires: [...state.stagaires, action.payload]}
        default:
            return state;
    }
}