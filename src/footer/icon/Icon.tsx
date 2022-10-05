import React from 'react';
import style from "./Icon.module.css"

type IconType = {
    urlIcon: string
    link?: string
}

const Icon = (props: IconType) => {
    return (
        <div className={style.iconBlock}>
            <a href={props.link}><img className={style.icon} src={props.urlIcon} alt="icon"/></a>
        </div>
    );
};

export default Icon;