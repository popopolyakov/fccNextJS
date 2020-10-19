import projectsStyle from '../styles/portfolioProjects.module.sass'
import { NextPage } from "next";
import { IState } from "../redux/interfaces";
import { useState } from 'react';
import { IDots } from '../redux/interfaces/IBezie';


    
interface IPropsBezieModule {
    dots: IDots,
    mouseDownEvent: Function,
    mouseUpEvent: Function
}

const ManageBezieContainer: NextPage<any> = (props: IPropsBezieModule) => {





    return (
        <svg
            className="drawPlace"
            width="100vw"
            height="100vh"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            onMouseDown={(e) => props.mouseDownEvent(e)}
            onMouseUp={(e) => props.mouseUpEvent(e)}
        >
            {props.dots.map((item, i) => (
                <circle
                    cx={item.x}
                    cy={item.y}
                    r='4'
                    stroke='grey'
                    fill='transparent'
                    strokeWidth="2"
                    key={i}
                />))}
        </svg>
    )
}



export default ManageBezieContainer

// ЗАМЕНИТЬ INTERFACE PROPS'OB