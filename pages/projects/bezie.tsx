import { wrapper } from '../../redux/store'
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { IState } from "../../redux/interfaces";
import styles from '../../styles/index.module.sass'
import ManageBezieContainer from '../../components/bezieModule'
import { GetStaticProps } from 'next'
import { useRef, useState } from 'react';
import { getBezieDots } from '../../redux/actions/getBezieDots';
import { IBezieLine, IBezieLines, IDot, IDots } from '../../redux/interfaces/IBezie';


enum StageBezie {
  first = 'START',
  second = 'SECOND',
  manyDots = 'MANYDOTS',
}



const Home: NextPage<any> = ({ appProp, getStaticProp }) => {
  const { app, page, bezieDots } = useSelector<IState, IState>(state => state);

  // const initialDots = bezieDots.map(item => item.position.x)

  let [dots, setDots] = useState<IDots>([])
  
  let [stageBezie, setStageBezie] = useState<StageBezie>(StageBezie.first)
  let [lines, setLines] = useState<IBezieLines>([])
  let [lastDirection, setLastDirection] = useState<IDot | null>(null)
  let [lastPosition, setLastPosition] = useState<IDot | null>(null)
  let [visibilityPhantomLine, setVisibilityPhantomLine] = useState<boolean>(false)


  function placePositionDot(clientX : number, clientY : number) : void {
    bezieDots.push({
      position: { x: clientX, y: clientY }
    })
    setDots([...dots, bezieDots[bezieDots.length-1].position])
  }

  function placeDirectionDot(clientX: number, clientY: number, curElem : IBezieLine = bezieDots[bezieDots.length - 1]) : void {
    bezieDots[bezieDots.length - 1] = {
      ...curElem,
      direction: {
        x: clientX,
        y: clientY
      }
    }
    setDots([...dots, bezieDots[bezieDots.length-1].direction])
  }

  function replacePhantomLine(clientX : number, clientY : number): void {
    
  }

  function createLine(start: IDot, end: IDot): void {
    console.log(lines);
    
    setLines([
      ...lines,
      {
        position: {
          x: start.x,
          y: start.y
        }, 
        direction: {
          x: end.x,
          y: end.y
        }
      }
    ])
    
    
  }



  function mouseDownEvent(e: React.MouseEvent<SVGElement>) {
    e.persist()

    placePositionDot(e.clientX, e.clientY)

    setLastPosition({
      x: e.clientX,
      y: e.clientY
    })
    setVisibilityPhantomLine(true)
  }

  function mouseUpEvent(e: React.MouseEvent<SVGElement>) {
    e.persist()
    placeDirectionDot(e.clientX, e.clientY)
    console.log(lastPosition, lastDirection);
    
    if (lastPosition !== null && lastDirection !== null) {
      setLastPosition(null)
      setLastDirection(null)
    }

    
    createLine(bezieDots[bezieDots.length - 1].position, bezieDots[bezieDots.length - 1].direction)

    setVisibilityPhantomLine(false)
  }

  function mouseMoveEvent(e : React.MouseEvent<SVGElement>) {
    e.persist()
    if (visibilityPhantomLine === true) {
      replacePhantomLine(e.clientX, e.clientY)
      setLastDirection({
        x: e.clientX,
        y: e.clientY
      })
    }
  }


  return (
    

    <ManageBezieContainer lastPosition={lastPosition} lastDirection={lastDirection} lines={lines} dots={dots} mouseDownEvent={mouseDownEvent} mouseUpEvent={mouseUpEvent} mouseMoveEvent={mouseMoveEvent}/>


  )
}

export default Home

export const  getStaticProps : GetStaticProps =  wrapper.getStaticProps(({ store }) => {
  console.log(store.dispatch)
  store.dispatch<any>(getBezieDots([]))
  return { props: { store: store.getState() } };
});