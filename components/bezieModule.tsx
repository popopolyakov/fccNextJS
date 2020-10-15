import projectsStyle from '../styles/portfolioProjects.module.sass'
import { NextPage } from "next";
import { IState, IProductsArray } from "../redux/interfaces";
import { useState } from 'react';

interface IPropsPortfolioProjects {
    projects: IProductsArray
}
const Projects: NextPage<any> = (props: IPropsPortfolioProjects) => {
    console.log(props.projects, 'props.projects is not iterable!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    return (
        <section id={projectsStyle.projects}>
            <h3 className={projectsStyle.projects__title}>Projects</h3>

            <div className={projectsStyle.projects__container}>
                {[...props.projects].map(project => (
                    <div key={project.id} className={projectsStyle.projects__project}>
                        <div className={projectsStyle.projects__project__image}>
                            <a href={project.src}>
                                <img src={project.img} />
                            </a>
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



export default Projects