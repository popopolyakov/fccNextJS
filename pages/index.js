import styles from '../styles/index.module.sass'
import Projects from '../components/portfolioProjects.tsx'

export default function Home() {

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
      <Projects />
    </main>
    <footer id={styles.footer}>
        <div className={styles['footer-container']}>
            <a id={styles['profile-link']} href="https://github.com/popopolyakov" target="_blank">My github</a>
            <p>@popopolyakov</p>
        </div>
    </footer>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
    </div>
  )
}
