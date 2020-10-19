import { wrapper } from '../../redux/store'
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { IState } from "../../redux/interfaces";
import styles from '../../styles/index.module.sass'
import ManageBezieContainer from '../../components/bezieModule'
import { GetStaticProps } from 'next'
import { useRef, useState } from 'react';
import { getBezieDots } from '../../redux/actions/getBezieDots';
import { IBezieLine } from '../../redux/interfaces/IBezie';


enum StageBezie {
  start = 'START',
  first = 'FIRST',
  second = 'SECOND',
  manyDots = 'MANYDOTS'
}



const Home: NextPage<any> = ({ appProp, getStaticProp }) => {
  const { app, page, bezieDots } = useSelector<IState, IState>(state => state);

  const initialDots = bezieDots.map(item => item.position.x)


  function placePositionDot(screenX : number, screenY : number) {
    bezieDots.push({ position: { x: screenX, y: screenY } })
    setDots([...dots, bezieDots[bezieDots.length-1].position])
  }

  let [dots, setDots] = useState<any>([])
  
  let [stageBezie, setStageBezie] = useState<StageBezie>(StageBezie.start)


  function mouseDownEvent(e: React.MouseEvent<SVGElement>) {
    e.persist()
    if (stageBezie === StageBezie.start) {
      placePositionDot(e.clientX, e.clientY)
      setStageBezie(StageBezie.first)
    } else if (stageBezie === StageBezie.first) {
      
    }
  }

  function mouseUpEvent(e : React.MouseEvent<SVGElement>) {
    e.persist()
    
  }

  console.log()

  return (
    

    <ManageBezieContainer dots={dots} mouseDownEvent={mouseDownEvent} mouseUpEvent={mouseUpEvent}/>


  )
}

export default Home

export const  getStaticProps : GetStaticProps =  wrapper.getStaticProps(({ store }) => {
  console.log(store.dispatch)
  store.dispatch<any>(getBezieDots([]))
  return { props: { store: store.getState() } };
});