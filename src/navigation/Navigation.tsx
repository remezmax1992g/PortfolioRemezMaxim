import React from 'react';
import style from "./Navigation.module.scss"

const Navigation = () => {
    return (
        <div className={style.nav}>
            <a className={style.linkText} href="">Main</a>
            <a className={style.linkText} href="">Skills</a>
            <a className={style.linkText} href="">Projects</a>
            <a className={style.linkText} href="">Contacts</a>
        </div>
    );
};

export default Navigation;