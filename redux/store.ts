import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { reducer, State } from "./reducers";

export const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, applyMiddleware(logger, thunkMiddleware));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
