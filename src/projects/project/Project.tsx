import React from 'react';
import style from "./Project.module.css"

type ProjectType = {
    title: string
    description: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.imgProject}>
                <a className={style.buttonProject}>Watch more</a>
            </div>
            <div className={style.textArea}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
};

export default Project;