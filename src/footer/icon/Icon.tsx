import React from 'react';
import style from "./Icon.module.css"

type IconType = {
    urlIcon: string
}

const Icon = (props: IconType) => {
    return (
        <div className={style.iconBlock}>
            <img className={style.icon} src={props.urlIcon} alt="icon"/>
        </div>
    );
};

export default Icon;