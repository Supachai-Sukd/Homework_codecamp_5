import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS, ADD_USER } from '../constance'
import LoadData from './api'

export const setStateToSuccess = (data) => ({
    type: FETCHING_DATA_SUCCESS,
    payload: data
})

export const setStateToFailure = (data) => ({
    type: FETCHING_DATA_FAILURE,
})

export const setStateToFetching = (data) => ({
    type: FETCHING_DATA,
})


export const setStateToAddUser = (data) => ({
    type: ADD_USER,
    payload: data
})


export const fetchUser = () => {
    return (dispatch) => {
        dispatch(setStateToFetching())
        LoadData()
        .then(result => {
            dispatch(setStateToSuccess(result))
        })
        .catch(error => {
            dispatch(setStateToFailure())
        })
    }
}

