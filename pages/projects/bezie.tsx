import { wrapper } from '../../redux/store'
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { IState } from "../../redux/interfaces";
import styles from '../../styles/index.module.sass'
import ManageBezieContainer from '../../components/bezieModule'
import { GetStaticProps } from 'next'
import { useRef, useState } from 'react';
import { getBezieDots } from '../../redux/actions/getBezieDots';


const Home: NextPage<any> = ({ appProp, getStaticProp }) => {
  const { app, page, bezieDots } = useSelector<IState, IState>(state => state);

  let [dots, setDots] = useState([{x: 50, y: 100}, {x: 150, y: 200}, {x: 250, y: 300}, {x: 350, y: 400}])
  

  return (
    

      <ManageBezieContainer dots={dots}/>


  )
}

export default Home

export const  getStaticProps : GetStaticProps =  wrapper.getStaticProps(({ store }) => {
  console.log(store.dispatch)
  store.dispatch<any>(getBezieDots([]))
  return { props: { store: store.getState() } };
});