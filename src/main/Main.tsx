import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../Common/styles/Container.module.css"
import photo from "../Common/assets/images/myphoto.jpg"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.textArea}>
                    <div className={style.blockTextArea}>
                        <span className={style.greetingText}>Hi there</span>
                    </div>
                    <div className={style.nameTextBlock}>
                        <h1 className={style.nameText}>I'm Maxim Remez</h1>
                    </div>
                    <div className={style.professionTextBlock}>
                        <p className={style.professionText}>Frontend developer React</p>
                    </div>
                </div>
                <div className={style.mainPhoto}>
                    <img className={style.myPhoto} src={photo} alt="no photo"/>
                </div>
            </div>
        </div>
    );
};

export default Main;