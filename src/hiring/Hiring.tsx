import React from 'react';
import style from "./Hiring.module.scss"
import Title from "../Common/components/title/Title";
import {Button} from "@mui/material";

const Hiring = () => {
    return (
        <div className={style.hiringBlock}>
            <div className={style.container}>
                <Title titleName="Considering remote work options"/>
                <Button className={style.button} variant="contained" >Hire me</Button>
            </div>

        </div>
    );
};

export default Hiring;