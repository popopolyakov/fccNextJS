import projectsStyle from '../styles/portfolioProjects.module.sass'
import { wrapper } from '../redux/store'
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";

interface OtherProps {
    getStaticProp: string;
    appProp: string;
  }

const Projects: NextPage<any> = () => {
    
    return (
        <section id={projectsStyle.projects}>
            <h3 className={projectsStyle.projects__title}>Projects</h3>
            
            <div className={projectsStyle.projects__container}>
                <div className={projectsStyle.projects__project}>
                    <img src="https://yt3.ggpht.com/a/AGF-l78g8b0UjpbKjsUSJNrIdRLnmU-I_wVxlGCqRA=s900-c-k-c0xffffffff-no-rj-mo" />
                    <a href="https://iee.mpei.ru/">
                        Сайт ИЭЭ
                    </a>
                    <p>Делал давно по просьбе института. Сделан на Joomla, потому что нужно было быстро и много всего.</p>
                </div>
                <div className={projectsStyle.projects__project}>
                    
                    <img src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/nuxt/products/431287/original-1518290483-fd534e6469eaf9e3b28c5cb9bb01aa34.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dXX0=" />
                    <a href="https://github.com/popopolyakov/OmenSite">
                        OmenNuxt
                    </a>
                    <p>Проба Nuxt/Vue. Интересны были анимации в меню и рендер большого количества точек c ThreeJS.</p>
                </div>
                <div className={projectsStyle.projects__project}>
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
    )
}

/* export const getStaticProps = wrapper.getStaticProps(({ store }) => {
    store.dispatch({ type: "SET_PROJECTS", payload: "static" });
    console.log('getStaticProps')
    return { props: { getStaticProp: "bar" } };
}); */

export default Projects