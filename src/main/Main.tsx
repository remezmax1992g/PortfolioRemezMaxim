import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../Common/Styles/Container.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi</span>
                    <h1>I'm Maxim Remez</h1>
                    <p>Frontend developer React</p>
                </div>
                <div className={style.mainPhoto}></div>
            </div>
        </div>
    );
};

export default Main;