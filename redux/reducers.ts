import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { SET_DEFAULT_PROJECTS } from '../redux/types/types'
import { IState, initialState } from '../redux/interfaces'

export const reducer = (
    state : IState = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.app === "init") delete action.payload.app;
            if (action.payload.page === "init") delete action.payload.page;
            if (action.payload.projects === "init") delete action.payload.projects;
            return { ...state, ...action.payload };
        case SET_DEFAULT_PROJECTS:
            return { ...state, projects: action.payload};
        default:
            return state;
    }
};
  

