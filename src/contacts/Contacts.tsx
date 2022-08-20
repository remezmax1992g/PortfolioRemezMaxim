import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../Common/Styles/Container.module.css"

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} + ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button className={style.buttonSend}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;