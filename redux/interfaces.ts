import {IProductsArray} from '../redux/interfaces/IProjects'

export interface IState {
  app: string;
  page: string;
  projects: string | IProductsArray;
}

export const initialState: IState = {
  app: "init",
  page: "init",
  projects: [
      {
          id: 1,
          title: 'init',
          img: 'init',
          desc: 'init',
          src: 'init'
      }
  ]
}