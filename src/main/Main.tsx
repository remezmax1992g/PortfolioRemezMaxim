import React from 'react';
import style from "./Main.module.scss"
import photo from "../Common/assets/images/myphoto.jpg"
import {Button} from "@mui/material";
import {Fade} from "react-awesome-reveal";



const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.personalInformation}>
                    <Fade direction="left">
                        <div className={style.textAreaBlock}>
                            <div className={style.textArea}>
                                <span className={style.greetingText}>Hi there</span>
                                <h2 className={style.nameText}>I'm Maxim Remez</h2>
                                <p className={style.professionText}>Frontend developer React</p>
                            </div>
                            <div className={style.buttons}>
                                <Button className={style.button} variant="contained">MORE ABOUT ME</Button>
                                <Button className={style.button} variant="contained" component="label">
                                    download CV
                                    <input hidden accept="image/*" multiple type="file"/>
                                </Button>
                            </div>
                        </div>
                    </Fade>
                    <div className={style.mainPhoto}>
                        <Fade direction="right"><img className={style.myPhoto} src={photo}/></Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;