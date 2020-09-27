
export interface IProduct {
    id: number | string;
    title: string;
    img: string;
    desc: string;
    src: string;
}


export interface IProductsArray extends Array<IProduct> {}

export interface IState {
    app: string;
    page: string;
    projects: string | IProductsArray;
}

export const errorProjects: IProductsArray = [
    {
        id: 1,
        title: 'error',
        img: 'error',
        desc: 'error',
        src: 'error'
    }
]

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