import { FETCHING_NOTEBOOKS, UPDATE_NOTEBOOKS } from '../constance'


const initialState = {
    laptops: [],
    changeInput: ""  
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTEBOOKS:
            return { laptops: action.payload }
        case UPDATE_NOTEBOOKS:
            return { laptops: action.payload }
        default:
            return state
    }
}


