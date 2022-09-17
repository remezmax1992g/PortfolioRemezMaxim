import React from 'react';
import style from "./Project.module.css"
import {Button} from "@mui/material";

type ProjectType = {
    title: string
    description: string
    style:{
        backgroundImage: string
    }
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.imgProject} style={props.style}>
                <Button className={style.buttonProject} variant="contained" color="success">View more</Button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
};

export default Project;