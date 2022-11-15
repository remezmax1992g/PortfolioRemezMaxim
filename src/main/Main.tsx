import React from 'react';
import style from "./Main.module.scss"
import photo from "../Common/assets/images/myphoto.jpg"
import {Button} from "@mui/material";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";


const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.textAreaBlock}>
                    <Fade direction="left">
                        <div className={style.textArea}>
                            <span className={style.greetingText}>Hi there</span>
                            <h1 className={style.nameText}>I'm <span>Maxim Remez</span></h1>
                            <span className={style.professionText}><ReactTypingEffect text="Frontend developer React"/></span>
                        </div>
                        <div className={style.buttons}>
                            <Button className={style.button} variant="contained">MORE ABOUT ME</Button>
                            <Button className={style.button} variant="contained" component="label">
                                download CV
                                <input hidden accept="image/*" multiple type="file"/>
                            </Button>
                        </div>
                    </Fade>
                </div>
                <div className={style.mainPhoto}>
                    <Fade direction="right"><img className={style.myPhoto} src={photo}/></Fade>
                </div>
            </div>
        </div>
    );
};

export default Main;