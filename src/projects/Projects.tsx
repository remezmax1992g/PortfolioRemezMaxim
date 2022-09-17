import React from 'react';
import style from "./Projects.module.css"
import styleContainer from "../Common/styles/Container.module.css"
import Project from "./project/Project";
import Title from "../Common/components/title/Title";
import socialNetworkImg from "../Common/assets/images/socialNetwork.png"
import todolistImg from "../Common/assets/images/todolist.png"
import counterImg from "../Common/assets/images/counter.png"

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }
    const counter = {
        backgroundImage: `url(${counterImg})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} + ${style.projectsContainer}`}>
                <Title titleName="My projects"/>
                <div className={style.projects}>
                    <Project style={socialNetwork} title="Social network" description="Short description of social network"/>
                    <Project style={todolist} title="Todolist" description="Short description of todolist"/>
                    <Project style={counter} title="Counter" description="Short description of counter"/>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;