
export interface IProduct {
    id: number | string;
    title: string;
    img: string;
    desc: string;
    src: string;
}

export interface IProjects {
    map(arg0: (project: IProduct) => JSX.Element): import("react").ReactNode;
    [index: number]: IProduct
}

export interface IState {
    app: string;
    page: string;
    projects: string | IProjects;
}

export const initialState: IState = {
    app: "init",
    page: "init",
    projects: [
        {
            id: 1,
            title: 'string',
            img: 'string',
            desc: 'string',
            src: 'string'
        }
    ]
}