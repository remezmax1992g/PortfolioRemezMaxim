import React, {useState} from 'react';
import style from "./BurgerNavigation.module.scss"
import { Link} from "react-scroll"

const BurgerNavigation = () => {
    let [isShow, setIsShow] = useState<boolean>(false)
    const onClickModeShow = () => {
        setIsShow(!isShow)
        console.log(isShow)
    }
    return (
            <div className={style.burgerNav}>
                <div className={isShow ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                    <Link className={style.burgerLink} activeClass={style.active} to="main" spy={true} smooth={true}
                         offset={30}
                         duration={700}>Main</Link>
                    <Link className={style.burgerLink} activeClass={style.active} to="skills" spy={true} smooth={true}
                          offset={30}
                          duration={700}>Skills</Link>
                    <Link className={style.burgerLink} activeClass={style.active} to="projects" spy={true} smooth={true}
                          offset={30} duration={700}>Projects</Link>
                    <Link className={style.burgerLink} activeClass={style.active} to="contacts" spy={true} smooth={true}
                          offset={60} duration={700}>Contacts</Link>
                </div>
                <div className={style.burgerBtn} onClick={onClickModeShow}></div>
            </div>
    );
};

export default BurgerNavigation;