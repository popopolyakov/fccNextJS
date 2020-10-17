import {IProductsArray} from '../redux/interfaces/IProjects'
import { IBezieLines } from './interfaces/IBezie'

export interface IState {
  app: string;
  page: string;
  projects: string | IProductsArray;
  bezieDots: string | IBezieLines;
}

export const initialState: IState = {
  app: "init",
  page: "init",
  projects: 'init',
  bezieDots: 'init'
}