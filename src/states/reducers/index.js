import { combineReducers } from "redux";
import { productReducers } from "./productReducers";

const reducers = combineReducers({
    allproducts: productReducers,
});

export default reducers;