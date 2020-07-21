import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import axios from 'axios'

interface Product {
    id: number;
    title: string;
    img: string;
    desc: string;
}

interface Projects {
    [index: number]: Product
}

export interface State {
    app: string;
    page: string;
    projects: Projects;
}
  
export const reducer = (
    state: State = { app: "init", page: "init", projects: [] },
    action: AnyAction
) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.app === "init") delete action.payload.app;
            if (action.payload.page === "init") delete action.payload.page;
            return { ...state, ...action.payload };
        case "APP":
            return { ...state, app: action.payload };
        case "PAGE":
            return { ...state, page: action.payload };
        case 'SET_ITEMS':
            return action.items;
        default:
            return state;
    }
};
  

export function fetchItems () {
    return dispatch => axios.get('/api/items')
        .then(({ data }) => data)
        .then(items => dispatch({ type: 'SET_ITEMS', items }));
}