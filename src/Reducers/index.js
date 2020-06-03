import counterReducer from "./counter";
import loginReducer from "./login";
import num_operations from "./num_operations"
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer, 
    login: loginReducer,
    operations: num_operations
}); 


export default allReducers; 