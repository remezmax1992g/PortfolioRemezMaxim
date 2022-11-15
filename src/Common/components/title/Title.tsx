import React from 'react';
import style from './Title.module.scss'
import {Fade} from "react-awesome-reveal";

type TitleType = {
    titleName: string
}

const Title = ({titleName}: TitleType) => {
    return (
        <div className ={style.title}>
            <Fade direction="top-right">
                <h2>{titleName}</h2>
            </Fade>
        </div>
    );
};

export default Title;