import { combineReducers } from "redux";
import { listReducer } from "./productReducer";

export default combineReducers({
    product: listReducer
})