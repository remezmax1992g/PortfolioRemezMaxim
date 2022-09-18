import style from "./Skill.module.scss"

type SkillType = {
    title: string
    percentage: number
    style:{
        backgroundImage: string
    }
}

const Skill = (props: SkillType) => {

    return (
        <div className={style.skill}>
            <div className={style.imgSkill}>
                <div className={style.icon} style={props.style}></div>
            </div>
            <div className={style.skillInfo}>
                <div className={style.circle}>
                    <div className={style.outer}>
                        <div className={style.inner}>
                            <div id="number" className={style.number}>{props.percentage + "%"}</div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="35" cy="35" r="30" stroke-linecap="round" style={{strokeDashoffset: (185 - 185*props.percentage/100) }}/>
                    </svg>
                </div>

                <h3 className={style.title}>{props.title}</h3>

            </div>
        </div>
    );
};

export default Skill;