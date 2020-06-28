const initialState =  {
    count: 0,
    arrObj: [],
    arr: []
}


const reducer =(state= initialState, action) => {
    switch (action.type) {
        case "INCRESE" :
            return {...state, count: state.count + 1}
        case "DECRESE":
            return {...state, count: state.count - 1}
        case "RESET" :
            return {...state, count: 0}
        case "ADD_NUM" :
            const newArray = [...state.arr, action.num]
            return {...state, arr: newArray}
        case "ADD_PERSON" :
            const newObj = [...state.arrObj, {name: "John"}]
            return {...state, arrObj: newObj}
        default : 
            return state
    }
    
}

export default reducer