import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS, ADD_USER } from '../constance'

const initialState = {
    employees: [],
    isFetching: false,
    isError: false,
    
}

export default (state = initialState, action) => {
    switch (action.type) {

    case ADD_USER:
        const newObjUser = [...state.employees, {name: "John"}]
        return {...state, employees: newObjUser}
    case FETCHING_DATA:
        return {employees: action.payload}
    case FETCHING_DATA_SUCCESS:
        return {...state, isFetching: false, employees: action.payload}
    case FETCHING_DATA_FAILURE:
        return {...state, isFetching: false, isError: true}

    default:
        return state
    }
}
