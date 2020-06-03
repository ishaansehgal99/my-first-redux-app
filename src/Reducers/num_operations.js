
const num_operations = (state = 0, action) => {
    switch(action.type){
        case "OPERATION_PERFORMED": 
            return state + 1; 
        case "CLEAR":
            return 0
        default: 
            return state; 
    }
}; 

export default num_operations; 