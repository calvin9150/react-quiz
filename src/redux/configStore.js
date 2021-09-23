import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import quiz from "./quiz";
import user from "./user";
import rank from "./rank";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ quiz, user, rank });
const store = createStore(rootReducer, enhancer);

export default store;
