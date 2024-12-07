import * as type from './typeActions'

export  function addFruit(myFruit){

    return({
        type:type.ADD_FRUIT,
        payload:myFruit
    })
}

export  function viderFruit(){

    return({
        type:type.REMOVE_ALL_FRUITS
    })
}