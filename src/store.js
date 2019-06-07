import { createStore, applyMiddleware } from 'redux';
import state from "./state";
import reducers from "./reducers";
//Use redux-thunk middleware
import thunk from 'redux-thunk'


export default createStore(reducers, state, applyMiddleware(thunk));
