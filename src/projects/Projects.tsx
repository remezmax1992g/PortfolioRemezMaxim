import React from 'react';
import style from "./Projects.module.css"
import styleContainer from "../Common/Styles/Container.module.css"
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} + ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title="Social network" description="Short description of social network"/>
                    <Project title="Todolist" description="Short description of todolist"/>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;