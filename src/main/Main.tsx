import React from 'react';
import style from "./Main.module.scss"
import photo from "../Common/assets/images/myphoto.jpg"
import {Button} from "@mui/material";



const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.personalInformation}>
                    <div className={style.textAreaBlock}>
                        <div className={style.textArea}>
                            <span className={style.greetingText}>Hi there</span>
                            <h1 className={style.nameText}>I'm Maxim Remez</h1>
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
                    <div className={style.mainPhoto}>
                        <img className={style.myPhoto} src={photo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;