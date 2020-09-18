import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import axios from 'axios'

interface Product {
    id: number | string;
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
    projects: string | Projects;
}

const initialState: State = {
    app: "init",
    page: "init",
    projects: [
        {
            id: 1,
            title: 'string',
            img: 'string',
            desc: 'string'
        }
    ]
}
  
export const reducer = (
    state : State = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.app === "init") delete action.payload.app;
            if (action.payload.page === "init") delete action.payload.page;
            if (action.payload.projects === "init") delete action.payload.projects;
            return { ...state, ...action.payload };
        case "APP":
            return { ...state, app: action.payload };
        case "PAGE":
            return { ...state, page: action.payload };
        case 'SET_PROJECTS':
            return { ...state, projects: action.payload };
        default:
            return state;
    }
};
  

export function fetchItems() {
    console.log('get items')
    return dispatch => axios.get('localhost:4300/projects')
        .then(({ data }) => data)
        .then(projects => dispatch({ type: 'SET_PROJECTS', projects }));
}