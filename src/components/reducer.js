

const initstate = { fruits: [] };

export const fruitsreducer = (state = initstate, action) => {
    switch(action.type) {
        case 'addfruit':
            return { ...state, fruits: [...state.fruits, action.payload]};
        case 'delallfruits':
            return { ...state, fruits: []};
        default:
            return state;
    }
}