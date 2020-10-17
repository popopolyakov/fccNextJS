export interface IBezieLine {
    position: {
        x: number,
        y: number
    },
    direction: {
        x: number,
        y: number
    }
}

export const initialBezie = []
export interface IBezieLines extends Array<IBezieLine> {}