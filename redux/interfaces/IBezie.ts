export interface IDot {
    x: number,
    y: number
}

export interface IBezieLine {
    position: IDot,
    direction?: IDot
}

export const initialBezie = []

export interface IBezieLines extends Array<IBezieLine> { }

export interface IDots extends Array<IDot> {}