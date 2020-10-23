import projectsStyle from '../styles/portfolioProjects.module.sass'
import { NextPage } from "next";
import { IState } from "../redux/interfaces";
import { useRef, useState } from 'react';
import { IBezieLine, IBezieLines, IDot, IDots } from '../redux/interfaces/IBezie';


    
interface IPropsBezieModule {
    dots: IDots,
    mouseDownEvent: Function,
    mouseUpEvent: Function,
    mouseMoveEvent: Function,
    lines: IBezieLines,
    lastPosition : IDot | null,
    lastDirection: IDot | null,
    coordPhantomLine : IBezieLine | null
}

const ManageBezieContainer: NextPage<IPropsBezieModule> = (props: IPropsBezieModule) => {
    const path = useRef<SVGPathElement>(null);

    let routeOfPath = (dots: IBezieLines, finalPosition: IDot | null, finalDirection: IDot | null): string => {
        console.log(finalDirection, finalPosition);
        
        console.log(finalDirection === null || finalPosition === null, 'check coords');
        console.log(dots.length !== 0, 'check dots');
        
        
        
        console.log((finalDirection === null || finalPosition === null) && dots.length > 0);
        let takeFinalLineFromDots : boolean = false
        if ((finalDirection === null && finalPosition === null) && dots.length !== 0) {
            console.log(finalPosition, finalDirection, dots);
            console.log([...dots].pop());
            console.log(dots[dots.length-1]);
            
            let { position, direction } = dots.pop()
            finalPosition = position
            finalDirection = direction
            console.log(finalPosition, finalDirection, dots)
            takeFinalLineFromDots = true
        }
        /*
        ==================
            Код из моего репозитория bezieDrawing
        ==================      
        */
        let partOfPath = new Array()
        if (finalDirection !== null && finalPosition!== null) {
            partOfPath = dots.map((item, i) => {
                if (dots.length === 1) {
                    const animPartOfBezie = `${finalDirection.x} ${finalDirection.y}, ${finalPosition.x} ${finalPosition.y}`
                    return  ` M ${item.position.x} ${item.position.y} C ${item.direction.x} ${item.direction.y}, ` + animPartOfBezie
                } else if (dots.length === 2) {
                    const animPartOfBezie = ` S ${finalDirection.x} ${finalDirection.y}, ${finalPosition.x} ${finalPosition.y}`
                    if (i === 0) {
                        return  ` M ${item.position.x} ${item.position.y} C ${item.direction.x} ${item.direction.y}`
                    } else {
                        return ` ${item.direction.x} ${item.direction.y}, ${item.position.x} ${item.position.y}` + animPartOfBezie
                    } 
                } else {
                    const animPartOfBezie = `S ${finalDirection.x} ${finalDirection.y}, ${finalPosition.x} ${finalPosition.y}`
                    if (i === 0) {
                        return  ` M ${item.position.x} ${item.position.y} C ${item.direction.x} ${item.direction.y}, `
                    } else if (i === 1) {
                        return `${item.direction.x} ${item.direction.y}, ${item.position.x} ${item.position.y} `
                    } else if (i === dots.length-1) {
                        return `S ${item.direction.x} ${item.direction.y}, ${item.position.x} ${item.position.y} ` + animPartOfBezie
                    } else {
                        return `S ${item.direction.x} ${item.direction.y}, ${item.position.x} ${item.position.y} `
                    }
                }
            })
            
        }
        if (takeFinalLineFromDots) {
            dots.push({position: finalPosition, direction: finalDirection})
        }
        return partOfPath.join('')
    }


    return (
        <svg
            className="drawPlace"
            width="100vw"
            height="100vh"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            onMouseDown={(e) => props.mouseDownEvent(e)}
            onMouseUp={(e) => props.mouseUpEvent(e)}
            onMouseMove={(e) => props.mouseMoveEvent(e)}
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
                />
            ))}
            {props.lines.map((item: IBezieLine, i : number) => (
                <line
                    x1={item.position.x}
                    y1={item.position.y}
                    x2={item.direction.x}
                    y2={item.direction.y}
                    stroke="black"
                    key={i}
                />)
            )}
            <path ref={path} d={routeOfPath(props.lines, props.lastPosition, props.lastDirection)} style={{stroke: 'blue', fill: 'transparent'}}/>
            {(props.coordPhantomLine !== null) ? (
                <line
                    x1={props.coordPhantomLine.position.x}
                    y1={props.coordPhantomLine.position.y}
                    x2={props.coordPhantomLine.direction.x}
                    y2={props.coordPhantomLine.direction.y}
                    stroke="black"
                />) : <></>}
        </svg>
    )
}



export default ManageBezieContainer

// ЗАМЕНИТЬ INTERFACE PROPS'OB