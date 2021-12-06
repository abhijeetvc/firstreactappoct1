import * as actionType from './ActionType'

const addCounter=()=>({
     type:actionType.ADD_COUNTER,
     payload: 10
})

const reduceCounter=()=>({
    type:actionType.REDUCE_COUNTER,
    payload: -10
})