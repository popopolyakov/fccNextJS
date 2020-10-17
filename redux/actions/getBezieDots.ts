import axios from 'axios'
import { SET_DEFAULT_BEZIE } from '../types/types'
import {errorProjects} from '../interfaces/IProjects'
import { IBezieLines, initialBezie } from '../interfaces/IBezie';
//import {networkInterfaces} from 'os'

export function getBezieDots(bezie : Array<IBezieLines> = initialBezie) {
    return {type: SET_DEFAULT_BEZIE, payload: bezie}
}