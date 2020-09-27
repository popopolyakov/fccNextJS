import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { reducer } from "./reducers";
import {IState} from '../redux/interfaces'
import { composeWithDevTools } from "redux-devtools-extension"


export const makeStore: MakeStore<IState> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)));

export const wrapper = createWrapper<IState>(makeStore, { debug: true });
