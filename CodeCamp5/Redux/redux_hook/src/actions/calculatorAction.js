import { ACTION_ADD, ACTION_REM, ACTION_CLR } from '../Constant'

export const setStateToAdd = () => ({
    type: ACTION_ADD,
})

export const setStateToRem = () => ({
    type: ACTION_REM,
})

export const setStateToClr = (payload) => ({
    type: ACTION_CLR,
    payload
})


export const add = () => {
    return dispatch => {
        dispatch(setStateToAdd())
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


