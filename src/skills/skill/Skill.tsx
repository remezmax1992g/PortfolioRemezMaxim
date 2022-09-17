import React from 'react';
import style from "./Skill.module.css"

type SkillType = {
    title: string
    description: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={style.skill}>
            <div className={style.imgSkill}>
                <div className={style.icon}>

                </div>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Skill;