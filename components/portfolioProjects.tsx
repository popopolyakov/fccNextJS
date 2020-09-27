import projectsStyle from '../styles/portfolioProjects.module.sass'
import { NextPage } from "next";
import { IState, IProjects } from "../redux/interfaces";
import { useState } from 'react';

interface IPropsPortfolioProjects {
    projects: IProjects
}
const Projects: NextPage<any> = (props: IPropsPortfolioProjects) => {
    let [stateProjects, setStateProjects] = useState<IProjects>(props.projects)
    console.log(stateProjects)
    return (
        <section id={projectsStyle.projects}>
            <h3 className={projectsStyle.projects__title}>Projects</h3>

            <div className={projectsStyle.projects__container}>
                {stateProjects.map(project => (
                    <div key={project.id} className={projectsStyle.projects__project}>
                        <div className={projectsStyle.projects__project__image}>
                            <img src={project.img} />
                        </div>
                        <div className={projectsStyle.projects__project__title}>
                            <a href={project.src}>
                                {project.title}
                            </a>
                        </div>
                        
                        <div className={projectsStyle.projects__project__description}>
                            <p>{project.desc}</p>
                        </div>
                        
                    </div>)
                )}
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