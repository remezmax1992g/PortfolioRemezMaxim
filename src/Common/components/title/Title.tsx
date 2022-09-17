import React from 'react';
import style from './Title.module.css'

type TitleType = {
    titleName: string
}

const Title = ({titleName}: TitleType) => {
    return (
        <div className ={style.title}>
            <h2>{titleName}</h2>
        </div>
    );
};

export default Title;