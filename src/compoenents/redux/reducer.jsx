// const fs = require('fs');

const instate = { stagaires: [] };

export const stagReducer = (state=instate, action) => {
    switch(action.type) {
        case 'ajouter':
            const newStagaires = [...state.stagaires, action.payload];
            // fs.writeFileSync('data.json', JSON.stringify(newStagaires, null, 4));
            return {...state, stagaires: newStagaires}
        default:
            return state;
    }
}