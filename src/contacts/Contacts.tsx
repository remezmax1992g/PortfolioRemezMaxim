import React from 'react';
import style from "./Contacts.module.scss"
import Title from "../Common/components/title/Title";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {sendForm} from "../utilits/sendForm-utilit";

const Contacts = () => {

    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title titleName="Contacts"/>
                <p className={style.extraText}>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p>
                <form className={style.form} onSubmit={sendForm}>
                    <input type="text" className={style.formArea} name="name" placeholder="YOUR NAME"/>
                    <input type="text" className={style.formArea} name="email" placeholder="YOUR EMAIL"/>
                    <textarea className={style.messageArea} name="message" placeholder="YOUR MESSAGE"/>
                    <Button type="submit" className={style.button} variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;