import React from 'react';
import style from "./Navigation.module.scss"
import {Fade} from "react-awesome-reveal";

const Navigation = () => {
    return (
        <div className={style.nav}>
            <Fade direction="top-right">
                <a className={style.linkText} href="">Main</a>
                <a className={style.linkText} href="">Skills</a>
                <a className={style.linkText} href="">Projects</a>
                <a className={style.linkText} href="">Contacts</a>
            </Fade>
        </div>
    );
};

export default Navigation;