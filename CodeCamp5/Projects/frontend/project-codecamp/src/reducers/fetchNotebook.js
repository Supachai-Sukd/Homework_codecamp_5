import { FETCHING_NOTEBOOKS } from '../constance'


const initialState = {
    laptops: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCHING_NOTEBOOKS:
            return {laptops: action.payload}

    default:
        return state
    }
}
