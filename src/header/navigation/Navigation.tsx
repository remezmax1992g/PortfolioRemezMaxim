import React from 'react';
import style from "./Navigation.module.scss"
import { Link} from "react-scroll"

const Navigation = () => {
    return (
        <div className={style.nav}>
                <Link  className={style.link} activeClass={style.active} to="main" spy={true} smooth={true} offset={30} duration={700}>Main</Link>
                <Link  className={style.link} activeClass={style.active} to="skills" spy={true} smooth={true} offset={30} duration={700}>Skills</Link>
                <Link  className={style.link} activeClass={style.active} to="projects" spy={true} smooth={true} offset={30} duration={700}>Projects</Link>
                <Link  className={style.link} activeClass={style.active} to="contacts" spy={true} smooth={true} offset={60} duration={700}>Contacts</Link>
        </div>
    );
};

export default Navigation;