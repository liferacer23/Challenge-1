import { createStore } from "redux";
import reducers from "../Reducers";

export const mystore = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

