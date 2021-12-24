import {TodoReducer} from "./TodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    TodoReducer:TodoReducer
})


export default rootReducer;