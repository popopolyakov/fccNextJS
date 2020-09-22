import { wrapper } from '../redux/store'
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import styles from '../styles/index.module.sass'
import Projects from '../components/portfolioProjects'
import { GetStaticProps } from 'next'
import { SET_DEFAULT_PROJECTS } from '../redux/types/types';

const Home: NextPage<any> = ({ appProp, getStaticProp }) => {
  const { app, page, projects } = useSelector<State, State>(state => state);
  return (
    
    <div className={styles.container}>
      
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <div className={styles['logo-container']}>
            <img className={styles.logo} src="https://sun9-9.userapi.com/c629113/v629113605/29f70/RvnkHfFYJlk.jpg" /></div>
          <nav id={styles.navbar}>
            <a className={styles['nav-link']} href="https://github.com/popopolyakov" target="_blank">My github</a>
            <a className={styles['nav-link']} href="#projects">Projects</a>
          </nav>
        </div>
    </header>
    <main className={styles.main}>
      <section id={styles['welcome-section']}>
        <div className={styles['welcome-text']}>
          <h1>Portfolio</h1>
          <p><br />by Mikhail Polyakov</p>
        </div>
      </section>
      <pre>{JSON.stringify({ app, page, projects, getStaticProp, appProp }, null, 2)}</pre>
      <Projects />
    </main>
    <footer id={styles.footer}>
        <div className={styles['footer-container']}>
            <a id={styles['profile-link']} href="https://github.com/popopolyakov" target="_blank">My github</a>
            <p>@popopolyakov</p>
        </div>
    </footer>
    {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" /> */}
    </div>
  )
}

export default Home

export const getStaticProps : GetStaticProps = wrapper.getStaticProps(({ store }) => {
  store.dispatch({ type: SET_DEFAULT_PROJECTS, payload: "static" });
  console.log('getStaticProps')
  return { props: { getStaticProp: "bar" } };
});