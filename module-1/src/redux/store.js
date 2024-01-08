import { createStore } from "redux";
import counterReducer from "./counter/actionReducer";

const store = createStore(counterReducer);

export default store;
