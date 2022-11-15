import React from 'react';
import style from "./Projects.module.scss"
import Project from "./project/Project";
import Title from "../Common/components/title/Title";
import socialNetworkImg from "../Common/assets/images/socialNetwork.png"
import todolistImg from "../Common/assets/images/todolist.png"
import counterImg from "../Common/assets/images/counter.png"
import {Zoom} from "react-awesome-reveal";

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
        <div id="projects" className={style.projectsBlock}>
            <div className={style.container}>
                <Title titleName="My projects"/>
                <div className={style.projects}>
                    <Zoom>
                        <Project style={socialNetwork}
                                title="Social network"
                                description="Short description of social network"
                                url="https://remezmax1992g.github.io/samurai-way-main"/>
                        <Project style={todolist}
                                 title="Todolist"
                                 description="Short description of todolist"
                                 url="https://remezmax1992g.github.io/my-app-todolist"/>
                        <Project style={counter}
                                 title="Counter"
                                 description="Short description of counter"
                                 url="https://remezmax1992g.github.io/exam-1thModule-Counter"/>
                    </Zoom>
                </div>
            </div>

        </div>
    );
};

export default Projects;