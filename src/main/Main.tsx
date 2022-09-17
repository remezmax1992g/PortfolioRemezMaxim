import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../Common/styles/Container.module.css"
import photo from "../Common/assets/images/myphoto.jpg"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi</span>
                    <h1>I'm Maxim Remez</h1>
                    <p>Frontend developer React</p>
                </div>
                <div className={style.mainPhoto}>
                    <img className={style.myPhoto} src={photo} alt="no photo"/>
                </div>
            </div>
        </div>
    );
};

export default Main;