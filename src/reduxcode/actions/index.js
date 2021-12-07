import * as actionType from './ActionType'

export const addCounter=()=>({
     type:actionType.ADD_COUNTER,
     payload: 10
})

export const reduceCounter=()=>({
    type:actionType.REDUCE_COUNTER,
    payload: -10
})

