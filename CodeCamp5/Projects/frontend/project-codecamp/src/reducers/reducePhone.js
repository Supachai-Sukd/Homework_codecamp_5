import { FETCHING_PHONES } from '../constance'


const initialState = {
    phone_number: []  
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PHONES:
            return { phone_number: action.payload }
        default:
            return state
    }
}


