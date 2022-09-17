import React from 'react';
import style from "./Contacts.module.scss"
import styleContainer from "../Common/styles/Container.module.css"
import Title from "../Common/components/title/Title";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} + ${style.contactsContainer}`}>
                <Title titleName="Contacts"/>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <Button className={style.buttonSend} variant="contained" endIcon={<SendIcon/>} color="success">
                    Send
                </Button>
            </div>
        </div>
    );
};

export default Contacts;