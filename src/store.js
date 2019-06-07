import { createStore } from 'redux';
import state from "./state";
import reducers from "./reducers";
//Use redux-thunk middleware

export default createStore(reducers, state);