import { ACTION_ADD, ACTION_REM, ACTION_CLR } from '../Constant'

export const setStateToAdd = (payload) => ({
    type: ACTION_ADD,
    payload
})
    

export const setStateToRem = () => ({
    type: ACTION_REM,
})

export const setStateToClr = (payload) => ({
    type: ACTION_CLR,
    payload
})


export const add = (payload) => {
    return dispatch => {
        dispatch(setStateToAdd(payload))
    }
}




export const remove = () => {
    return dispatch => {
        dispatch(setStateToRem())
    }
}




export const clear = (payload) => {
    return dispatch => {
        dispatch(setStateToClr(payload))
    }
}


