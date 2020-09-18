import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { reducer, State } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension"


export const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
