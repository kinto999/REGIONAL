

const initstate = { fruits: [], fruit: "" };

export const fruitsreducer = (state = initstate, action) => {
    switch(action.type) {
        case 'addfruit':
            return { ...state, fruits: [...state.fruits, action.payload]};
        case 'setfruit':
            return { ...state, fruit: action.payload};
        case 'delallfruits':
            return { ...state, fruits: []};
        default:
            return state;
    }
}