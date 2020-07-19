import Head from 'next/head'
import styles from '../styles/index.sass' 


export default function Home() {
  return (
    
    <div classNameName="container">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css" />
      </Head>
      <header>
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="https://sun9-9.userapi.com/c629113/v629113605/29f70/RvnkHfFYJlk.jpg" /></div>
            <nav id="navbar">
                <a className="nav-link" href="https://github.com/popopolyakov" target="_blank">My github</a>
                <a className="nav-link" href="#projects">Projects</a>
            </nav>
        </div>
    </header>
    <main>
        <section id="welcome-section">
            <div className="welcome-text">
                <h1>Portfolio</h1>
                <p><br />by Mikhail Polyakov</p>
            </div>
        </section>
        <section id="projects">
            <h3 className="project-tile">Projects</h3>
            <div className="project-container">
                <div className="type-project">
                    <img src="https://yt3.ggpht.com/a/AGF-l78g8b0UjpbKjsUSJNrIdRLnmU-I_wVxlGCqRA=s900-c-k-c0xffffffff-no-rj-mo" />
                    <a href="https://iee.mpei.ru/">
                        Сайт ИЭЭ
                    </a>
                    <p>Делал давно, по просьбе института. Сделан на Joomla, потому что нужно было быстро и много всего.</p>
                </div>
                <div className="type-project">
                    <img src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/nuxt/products/431287/original-1518290483-fd534e6469eaf9e3b28c5cb9bb01aa34.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dXX0=" />
                    <a href="https://github.com/popopolyakov/OmenSite">
                        OmenNuxt
                    </a>
                    <p>Один из самых сложных проектов, сделан на Nuxt//Vue. Интересны были анимации в меню и рендер большого количества точек через видеокарту.</p>
                </div>
                <div className="type-project">
                    <img src="http://pngimg.com/uploads/github/github_PNG40.png" />
                    <a href="https://github.com/popopolyakov/">
                        Мой github
                    </a>
                    <p>
                        Все новое будет там
                    </p>
                </div>
            </div>
        </section>
    </main>
    <footer id="footer">
        <div className="footer-container">
            <a id="profile-link" href="https://github.com/popopolyakov" target="_blank">My github</a>
            <p>@popopolyakov</p>
        </div>
    </footer>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
