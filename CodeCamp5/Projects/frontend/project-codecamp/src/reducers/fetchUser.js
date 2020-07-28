import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS, ADD_USER } from '../constance'

const initialState = {
    employees: []
}

export default (state = initialState, action) => {
    switch (action.type) {

    case ADD_USER:
        const newObjUser = [...state.employees, {name: "John"}]
        return {...state, employees: newObjUser}

    default:
        return state
    }
}
