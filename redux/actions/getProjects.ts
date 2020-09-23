import axios from 'axios'
import { SET_DEFAULT_PROJECTS } from '../types/types'

export function getProjects() {
    console.log('get items')
    console.log(axios.get('http://www.localhost:4300/projects')
    .then(({ data }) => {
        console.log(data)
        return data
    }).catch(() => { console.log('ERROR') }))
    //console.log(dispatch)
    return dispatch => axios.get('http://www.localhost:4300/projects')
        .then(({ data }) => {
            console.log(data, 'data')
            return data
        })
        .then(projects => {
            console.log(projects, 'projects')
            dispatch({ type: SET_DEFAULT_PROJECTS, payload: projects })
        });
}