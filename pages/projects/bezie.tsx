import { wrapper } from '../../redux/store'
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { IState } from "../../redux/interfaces";
import styles from '../../styles/index.module.sass'
import ManageBezieContainer from '../../components/bezieModule'
import { GetStaticProps } from 'next'
import { getProjects } from '../../redux/actions/getProjects';
import { useRef } from 'react';

const Home: NextPage<any> = ({ appProp, getStaticProp }) => {
  const { app, page, projects } = useSelector<IState, IState>(state => state);


  

  return (
    
    <div className={styles.container}>
      ВНУТРЕННЯЯ ССЫЛКА
      
    </div>
  )
}

export default Home

export const  getStaticProps : GetStaticProps =  wrapper.getStaticProps(async ({ store }) => {
  console.log(store.dispatch)
  await store.dispatch<any>(getProjects())
  return { props: { store: store.getState() } };
});