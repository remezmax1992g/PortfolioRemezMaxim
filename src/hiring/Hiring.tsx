import React from 'react';
import style from "./Hiring.module.scss"
import styleContainer from "../Common/styles/Container.module.css"
import Title from "../Common/components/title/Title";
import {Button} from "@mui/material";

const Hiring = () => {
    return (
        <div className={style.hiringBlock}>
            <div className={`${styleContainer.container} + ${style.hiringContainer}`}>
                <Title titleName="Considering remote work options"/>
                <Button variant="contained" color="success">Hire me</Button>
            </div>

        </div>
    );
};

export default Hiring;