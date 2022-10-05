import style from "./Skill.module.scss"
import {Rating} from "@mui/material";

type SkillType = {
    title: string
    rating: number
    style:{
        backgroundImage: string
    }
}

const Skill = (props: SkillType) => {
    const labels: { [index: string]: string } = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    return (
        <div className={style.skill}>
            <div className={style.imgSkill}>
                <div className={style.icon} style={props.style}></div>
            </div>
            <div className={style.skillInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.rating}>
                    <Rating name="read-only" value={props.rating} precision={0.5} getLabelText={getLabelText} size="large" readOnly/>
                </div>
            </div>
        </div>
    );
};

export default Skill;