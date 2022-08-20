import React from 'react';
import style from "./Hiring.module.css"
import styleContainer from"../Common/Styles/Container.module.css"

const Hiring = () => {
    return (
        <div className={style.hiringBlock}>
            <div className={`${styleContainer.container} + ${style.hiringContainer}`}>
                <h2 className={style.title}>Considering remote work options</h2>
                <button className={style.buttonHiring}>Hire me</button>
            </div>

        </div>
    );
};

export default Hiring;