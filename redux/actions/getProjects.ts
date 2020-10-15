import axios from 'axios'
import { SET_DEFAULT_PROJECTS } from '../types/types'
import {errorProjects} from '../interfaces/IProjects'
//import {networkInterfaces} from 'os'

export function getProjects() {
    console.log('get items')
    //const address= networkInterfaces()
    //console.log(address['Ethernet'][1]['address'], 'АДРЕС')
    return dispatch => axios.get(`http://www.localhost:4300/projects`)
        .then(({ data }) => {
            console.log(data, 'data')
            return data
        })
        .then(projects => {
            console.log(projects, 'projects')
            dispatch({ type: SET_DEFAULT_PROJECTS, payload: projects })
        })
        .catch(error => dispatch({ type: SET_DEFAULT_PROJECTS, payload: errorProjects }));
}