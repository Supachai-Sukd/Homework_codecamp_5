import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS, ADD_USER, FETCHING_NOTEBOOKS } from '../constance'
import axios from '../config/axios'

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


export const fetchUser =  ()  => async dispatch => {
    const httpResponse = await axios.get("/users")
    dispatch({ type: FETCHING_DATA, payload: httpResponse.data })
}

export const fetchNotebook = () => async dispatch => {
    const response = await axios.get("/notebooks")
    dispatch({ type: FETCHING_NOTEBOOKS, payload: response.data })
}