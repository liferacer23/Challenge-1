import Amount_reducer from "./Amount_Reducer";
import Price_reducer from "./Price_reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    amounts:Amount_reducer,
    price:Price_reducer
})

export default reducers;