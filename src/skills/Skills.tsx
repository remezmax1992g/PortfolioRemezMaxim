import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../Common/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../Common/components/title/Title";
import htmlImg from "../Common/assets/images/html.png"
import cssImg from "../Common/assets/images/css.png"
import jsImg from "../Common/assets/images/js.png"
import tsImg from "../Common/assets/images/ts.png"
import reactImg from "../Common/assets/images/react.png"
import reduxImg from "../Common/assets/images/redux.png"
import storybookImg from "../Common/assets/images/storybook.png"
import materialMuiImg from "../Common/assets/images/MaterialMui.png"
import restApiImg from "../Common/assets/images/rest-api.png"
import gitImg from "../Common/assets/images/git.png"
import unitTestImg from "../Common/assets/images/unit-test.png"
import englishImg from "../Common/assets/images/english.png"
import postmanImg from "../Common/assets/images/postman.png"


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
    const tsURL = {
        backgroundImage: `url(${tsImg})`
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
    const postmanURL = {
        backgroundImage: `url(${postmanImg})`
    }
    const englishURL = {
        backgroundImage: `url(${englishImg})`
    }
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} + ${style.skillsContainer}`}>
                <Title titleName="My skills"/>
                <div className={style.skills}>
                    <Skill style={htmlURL} title="HTML" rating={4}/>
                    <Skill style={cssURL} title="CSS/SASS" rating={3.5}/>
                    <Skill style={jsURL} title="JS" rating={4}/>
                    <Skill style={tsURL} title="TS" rating={4}/>
                    <Skill style={reactURL} title="React" rating={4.5}/>
                    <Skill style={reduxURL} title="Redux" rating={4.5}/>
                    <Skill style={storybookURL} title="Storybook" rating={3}/>
                    <Skill style={materialMuiURL} title="Material MUI" rating={4}/>
                    <Skill style={restApiURL} title="Rest-API" rating={4.5}/>
                    <Skill style={gitURL} title="Git" rating={3.5}/>
                    <Skill style={unitTestURL} title="Unit test" rating={4.5}/>
                    <Skill style={postmanURL} title="Postman" rating={4}/>
                    <Skill style={englishURL} title="English B2" rating={5}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;