import projectsStyle from '../styles/portfolioProjects.module.sass'
import { NextPage } from "next";
import { IState } from "../redux/interfaces";
import { IProductsArray } from '../redux/interfaces/IProjects'
import { useState } from 'react';
import Link from 'next/link'

interface IPropsPortfolioProjects {
    projects: IProductsArray,
    refProjects: React.RefObject<any>
}

const Projects: NextPage<any> = (props: IPropsPortfolioProjects) => {
    console.log(props.projects, 'props.projects is not iterable!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    return (
        <section id={projectsStyle.projects} ref={props.refProjects}>
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
                            {project.outerLink === 'true' ? (
                                    <a href={project.src}>
                                        {project.title}
                                    </a>
                                ) : (
                                    <Link href={project.src}>
                                        <a>
                                            {project.title}
                                        </a>
                                    </Link> 
                                )
                            }
                            
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