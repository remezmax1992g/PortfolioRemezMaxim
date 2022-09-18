import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../Common/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../Common/components/title/Title";
import htmlImg from "../Common/assets/images/html.png"
import cssImg from "../Common/assets/images/css.png"
import jsImg from "../Common/assets/images/js.png"
import reactImg from "../Common/assets/images/react.png"
import reduxImg from "../Common/assets/images/redux.png"
import storybookImg from "../Common/assets/images/storybook.png"
import materialMuiImg from "../Common/assets/images/MaterialMui.png"
import restApiImg from "../Common/assets/images/rest-api.png"
import gitImg from "../Common/assets/images/git.png"
import unitTestImg from "../Common/assets/images/unit-test.png"

const Skills = () => {
    const htmlURL = {
        backgroundImage: `url(${htmlImg})`
    }
    const cssURL = {
        backgroundImage: `url(${cssImg})`
    }
    const jsURL = {
        backgroundImage: `url(${jsImg})`
    }
    const reactURL = {
        backgroundImage: `url(${reactImg})`
    }
    const reduxURL = {
        backgroundImage: `url(${reduxImg})`
    }
    const storybookURL = {
        backgroundImage: `url(${storybookImg})`
    }
    const materialMuiURL = {
        backgroundImage: `url(${materialMuiImg})`
    }
    const restApiURL = {
        backgroundImage: `url(${restApiImg})`
    }
    const gitURL = {
        backgroundImage: `url(${gitImg})`
    }
    const unitTestURL = {
        backgroundImage: `url(${unitTestImg})`
    }
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} + ${style.skillsContainer}`}>
                <Title titleName="My skills"/>
                <div className={style.skills}>
                    <Skill style={htmlURL} title="HTML" percentage={70}/>
                    <Skill style={cssURL} title="CSS/SASS" percentage={70}/>
                    <Skill style={jsURL} title="JS/TS" percentage={75}/>
                    <Skill style={reactURL} title="React" percentage={85}/>
                    <Skill style={reduxURL} title="Redux" percentage={80}/>
                    <Skill style={storybookURL} title="Storybook" percentage={50}/>
                    <Skill style={materialMuiURL} title="Material MUI" percentage={60}/>
                    <Skill style={restApiURL} title="Rest-API" percentage={55}/>
                    <Skill style={gitURL} title="Git" percentage={50}/>
                    <Skill style={unitTestURL} title="Unit test" percentage={75}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;