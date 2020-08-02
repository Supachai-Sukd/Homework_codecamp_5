import { FETCHING_NOTEBOOKS, UPDATE_NOTEBOOKS, IS_EDIT, IS_EDIT_TRUE, TOGGLE_EDIT } from '../constance'


const initialState = {
    laptops: [],
    changeInput: "",
    isEdit: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTEBOOKS:
            return { laptops: action.payload }
        case UPDATE_NOTEBOOKS:
            return { changeInput: action.payload }
        case IS_EDIT:
            return {...state, isEdit: false}
        case IS_EDIT_TRUE:
            return {...state, isEdit: true}
        case TOGGLE_EDIT:
            return { changeInput: action.payload }
        default:
            return state
    }
}


