const initialState =  {
    count: 0
}


const reducer =(state= initialState, action) => {
    switch (action.type) {
        case "INCRESE" :
            return {...state, count: state.count + 1}
        case "DECRESE":
            return {...state, count: state.count - 1}
        case "RESET" :
            return {...state, count: 0}
        default : 
            return state
    }
    
}

export default reducer