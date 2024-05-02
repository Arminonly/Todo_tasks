import { combineReducers } from "redux";
import { todoListReducer } from "./reducers";



export const rootreducer = combineReducers({
    todoListReducer: todoListReducer
})