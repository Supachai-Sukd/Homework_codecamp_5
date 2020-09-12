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
        setTimeout(() => {

            dispatch(setStateToAdd())
        }, 1000)
    }
}

export const remove = () => {
    return dispatch => {
        setTimeout(() => {

            dispatch(setStateToRem())
        }, 1000)
    }
}

export const clear = (payload) => {
    return dispatch => {
        

            dispatch(setStateToClr(payload))
        
    }
}