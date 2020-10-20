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

  const initialDots = bezieDots.map(item => item.position.x)

  let [dots, setDots] = useState<IDots>([])
  
  let [stageBezie, setStageBezie] = useState<StageBezie>(StageBezie.first)
  let [lines, setLines] = useState<IBezieLines>([])
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
    console.log([
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
    ], 'ожидаемый');
    
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
    if (stageBezie === StageBezie.first) {
      placePositionDot(e.clientX, e.clientY)
    } else if (stageBezie === StageBezie.second) {
      placePositionDot(e.clientX, e.clientY)
    }
    setVisibilityPhantomLine(true)
  }

  function mouseUpEvent(e: React.MouseEvent<SVGElement>) {
    e.persist()
    if (stageBezie === StageBezie.first) {
      placeDirectionDot(e.clientX, e.clientY)
      console.log(bezieDots)
      
      setStageBezie(StageBezie.second)
    } else if (stageBezie === StageBezie.second) {
      placeDirectionDot(e.clientX, e.clientY)
      setStageBezie(StageBezie.manyDots)
    }
    console.log(bezieDots[bezieDots.length - 1].position, bezieDots[bezieDots.length - 1].direction);
    
    createLine(bezieDots[bezieDots.length - 1].position, bezieDots[bezieDots.length - 1].direction)
    console.log(lines, 'фактический');
    setVisibilityPhantomLine(false)
  }

  function mouseMoveEvent(e : React.MouseEvent<SVGElement>) {
    e.persist()
    if (visibilityPhantomLine === true) {
      replacePhantomLine(e.clientX, e.clientY)
    }
  }


  return (
    

    <ManageBezieContainer lines={lines} dots={dots} mouseDownEvent={mouseDownEvent} mouseUpEvent={mouseUpEvent} mouseMoveEvent={mouseMoveEvent}/>


  )
}

export default Home

export const  getStaticProps : GetStaticProps =  wrapper.getStaticProps(({ store }) => {
  console.log(store.dispatch)
  store.dispatch<any>(getBezieDots([]))
  return { props: { store: store.getState() } };
});