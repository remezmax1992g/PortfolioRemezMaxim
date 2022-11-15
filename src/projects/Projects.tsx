import React from 'react';
import style from "./Projects.module.scss"
import Project from "./project/Project";
import Title from "../Common/components/title/Title";
import socialNetworkImg from "../Common/assets/images/socialNetwork.png"
import todolistImg from "../Common/assets/images/todolist.png"
import educationImg from "../Common/assets/images/education.jpg"
import counterImg from "../Common/assets/images/counter.png"
import {Zoom} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt'

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }
    const education = {
        backgroundImage: `url(${educationImg})`
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
                        <Tilt>
                            <Project style={socialNetwork}
                                     title="Social network App"
                                     descriptionStack="TS/JS, React, React-router-dom 5, Redux, Redux-thunk, Axios, REST API, JEST, Formik, CSS."
                                     descriptionApp="Social Network App is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post."
                                     url="https://remezmax1992g.github.io/samurai-way-main"/>
                        </Tilt>
                        <Tilt>
                            <Project style={todolist}
                                     title="Todolist App"
                                     descriptionStack="TS/JS, React, React hook, React-router-dom 6, Redux-toolkit, Redux-thunk, Axios, REST API, JEST, Storybook, Formik, Material UI, CSS."
                                     descriptionApp="TodoList App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules."
                                     url="https://remezmax1992g.github.io/my-app-todolist"/>
                        </Tilt>
                        <Tilt>
                            <Project style={education}
                                     title="Learning App"
                                     descriptionStack="TS/JS, React, React hook, React-router-dom 6, Redux, Redux-thunk, Axios, REST API, JEST, Formik, Material UI, CSS."
                                     descriptionApp="Learning App is kind of app for learning. It allows to creat, to edit and to delete your own packs and cards for learning process and also you can use packs and cards of friends. Created by group of developers."
                                     url="https://ilyagoncharovy.github.io/fridays-project"/>
                        </Tilt>
                        <Tilt>
                            <Project style={counter}
                                     title="Counter"
                                     descriptionStack="TS/JS, React, React-router-dom 6, Redux, Redux-thunk, JEST, CSS."
                                     descriptionApp="Counter App is a test project which (to tell the truth) doesn't have a lot of practical use. It allows to do some settings which influence on the way how the counter works."
                                     url="https://remezmax1992g.github.io/exam-1thModule-Counter"/>
                        </Tilt>
                    </Zoom>
                </div>
            </div>

        </div>
    );
};

export default Projects;