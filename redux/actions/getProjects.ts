import axios from 'axios'

export function getProjects() {
    console.log('get items')
    return dispatch => axios.get('http://www.localhost:4300/projects')
        .then(({ data }) => data)
        .then(projects => dispatch({ type: 'SET_PROJECTS', projects }));
}