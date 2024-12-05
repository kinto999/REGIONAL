

export const addfruit = (fruit) => ({
    type: 'addfruit',
    payload: fruit
})

export const setfruit = (fruit) => ({
    type: 'setfruit',
    payload: fruit
})

export const delallfruits = () => ({
    type: 'delallfruits'
})