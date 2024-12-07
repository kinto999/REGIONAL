
import * as type from '../Actions/typeActions'
import produce from 'immer'

const initialeState={
    fruits:[]
}
export default function reducerFruits(state=initialeState,action){
switch(action.type){
case type.ADD_FRUIT:
    //return {...state,fruits:[...state.fruits,action.payload]}
    const addedFruitState=produce(state,draftState=>{
        draftState.fruits.push(action.payload)
    })
    return addedFruitState
case type.REMOVE_ALL_FRUITS:
    //return {...state,fruits:[]}
    const clearedFruitsState=produce(state,draftSatet=>{
        draftSatet.fruits=[]
    })
    return clearedFruitsState;
 default:
    return state
}
}