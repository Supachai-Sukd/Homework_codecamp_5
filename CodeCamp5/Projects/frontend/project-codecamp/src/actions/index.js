import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS, ADD_USER, FETCHING_NOTEBOOKS, FETCHING_PHONES } from '../constance'
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
    const response = await axios.get("/notebooks/addminnotebooks")
    dispatch({ type: FETCHING_NOTEBOOKS, payload: response.data })
}

export const fetchPhoneNum = () => async dispatch => {
    const response = await axios.get("/phones/phoneadmin")
    dispatch({ type: FETCHING_PHONES, payload: response.data })
}

// targetUser นั้นคือ ตัวที่ต้องเหมือนใน backend เฉยๆ
// export const updateNotebook = (id, changeInput) => async dispatch => {
//     const response = await axios.put(`/notebooks/update/${id}`, { user_id: changeInput})
//     dispatch({ type: FETCHING_NOTEBOOKS, payload: response.data })
// }




// const updateProfile = async (id) => {
//     await axios.put(`/notebooks/update/${id}`, { targetUser: changeInput })
    
   
// }

// const deleteNotebook = async (id) => {
//     await axios.delete(`/notebooks/remove/${id}`)
//     fetchProfile()
// }