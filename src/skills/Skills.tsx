import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../Common/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../Common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} + ${style.skillsContainer}`}>
                <Title titleName="My skills"/>
                <div className={style.skills}>
                    <Skill title="HTML" description="888888888888"/>
                    <Skill title="CSS" description="7777777777777"/>
                    <Skill title="JS" description="4444444444444"/>
                    <Skill title="React" description="111111111"/>
                </div>
            </div>
        </div>
    );
};

export default Skills;