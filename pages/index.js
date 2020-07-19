import Head from 'next/head'

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
            <p>Copyright 2020 @popopolyakov</p>
        </div>
    </footer>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />

      <style jsx>{`
        html {
          overflow-x: hidden;
        }
        @media (min-width: 800px) {
            #welcome-section {
                height: 100vh;
            }
            
            .header-container{
                width: 1000px;
                margin: auto;
            }
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        header {
            position: fixed;
            top: 0;
            background-color: rgba(132,136,122,0.7);
            height: 80px;
            width: 100vw;
            z-index: 2;
        }
        .header-container {
            display: flex;
            flex-direction: row;
            height: 100%;
        }
        main {
            margin-top: 80px;
        }
        
        .logo {
            width: 60px;
            height: auto;
        }
        .logo-container {
            align-self: center;
        }
        #navbar {
            flex-shrink: 1;
            display: flex;
            justify-content: flex-end;
            align-self: center;
            flex-grow: 1;
            margin-right: 30px;
            height: 100%;
        }
        .nav-link {
            margin-right: 30px;
            font-size: 20pt;
            text-decoration: none;
            color: black;
            align-self: center;
        }

        #welcome-section {
            text-align: center;
            vertical-align: middle;
            align-self: center;
            background-image: url(https://wallpaperscave.ru/images/original/18/08-28/earth-landscape-79812.jpg);
            background-size: cover;
            display: flex;
            width: 100vw;
            align-self: center;
            margin: auto;  
            height: 100vh;
            justify-content: center;
        }
        #welcome-section h1 {
            font-size: 30pt;
            font-weight: 400;
        }
        .welcome-text {
            backdrop-filter: blur(4px);
            display: flex;
            flex-direction: column; 
            align-self: center;
            background-color: rgba(211, 211, 211, 0.4);
            text-align: center;
            padding: 20px 30px;
            border-radius: 20px;
        }
        .welcome-text p {
            font-size: 13pt;
        }

        #projects {
            width: 100vw;
            min-height: 110vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #bbd077;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23314d12' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .project-tile {
            background-color:rgba(211, 211, 211, 0.4);
            font-size: 30pt;
            padding: 10px;
            border-radius: 10px;
        }

        .project-container {
            display: flex;
            flex-direction: row;
        }

        .type-project {
            padding: 20px;
            background-color:rgba(211, 211, 211, 0.4);
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 15px 5px;
            width: 300px;
        }
        .type-project img{
            width: 300px;
            height: auto;
        }
        .type-project a{
            font-size: 20pt;
            text-decoration: none;
            color: black;
            padding-top: 10px;
        }
        .type-project p {
            padding-top: 10px;
            height: 100px;
            text-align: center;
        }
        .type-project a:hover {
            color:sienna
        }
        footer {
            height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: auto;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23314d12' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            background-color: #91a74c;
            border-top: 2px solid black;
        }
        footer p {
            align-items: flex-end;
            text-transform: uppercase;
        }
        footer a {
            flex-grow: 1;
            text-decoration: none;
            color:rgb(28, 32, 36);
            font-weight: 700;
            text-transform: uppercase;
        }
        .footer-container {
            width: 1000px;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: auto;
        }
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
