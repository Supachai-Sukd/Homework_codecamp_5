import {ACTION_ADD, ACTION_REM, ACTION_CLR, ADD_PERSON} from '../Constant'

const initialState = {
    count: 0,
    arrObj: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ACTION_ADD:
        return { ...state, ...payload, count: state.count += payload}
    case ACTION_REM:
        return { ...state, count: state.count - 1 }
    case ACTION_CLR:
        return { ...state, count: payload }
    case ADD_PERSON :
        const newObj = [...state.arrObj,  {name: payload}]
        return {...state, ...payload, arrObj: newObj}

    default:
        return state
    }
}



// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }
