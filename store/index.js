import { createStore } from "redux";
import counterReducer from "./reducer/counterReducer";

let myStore = createStore(counterReducer);

export { myStore };