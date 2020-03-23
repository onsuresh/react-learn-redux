import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer.js";

const myStore = createStore(combineReducers({ counter: counterReducer }));

export { myStore };
