
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT": 
            return state + 1; 
        case "DECREMENT": 
            return state - 1; 
        case "MULTIPLY": 
            return state * 2; 
        case "HALVE": 
            return state / 2; 
        case "CLEAR": 
            return 0; 
        default: 
            return state;
    }
}; 


export default counterReducer; 