import React from 'react';
import style from "./Navigation.module.scss"
import {Fade} from "react-awesome-reveal";
import { Link} from "react-scroll"

const Navigation = () => {
    return (
        <div className={style.nav}>
            <Fade direction="top-right">
                <Link  activeClass={style.active} to="main" spy={true} smooth={true} offset={-20} duration={1000}>Main</Link>
                <Link  activeClass={style.active} to="skills" spy={true} smooth={true} offset={-20} duration={1000}>Skills</Link>
                <Link  activeClass={style.active} to="projects" spy={true} smooth={true} offset={-20} duration={1000}>Projects</Link>
                <Link  activeClass={style.active} to="contacts" spy={true} smooth={true} offset={-20} duration={1000}>Contacts</Link>
            </Fade>
        </div>
    );
};

export default Navigation;