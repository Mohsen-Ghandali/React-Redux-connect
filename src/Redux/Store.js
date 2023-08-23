import { createStore } from "redux";
import ReducerCounter from "./Counter/ReducerCounter";
const store = createStore(ReducerCounter);
export default store;
