import React from 'react';
import style from "./Footer.module.css"
import styleContainer from "../Common/Styles/Container.module.css"
import Icon from "./icon/Icon";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} + ${style.footerContainer}`}>
                <h2 className={style.title}>REMEZ MAXIM</h2>
                <div className={style.icons}>
                    <Icon urlIcon={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"}/>
                    <Icon urlIcon={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}/>
                    <Icon urlIcon={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"}/>
                    <Icon urlIcon={"https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360"}/>
                </div>
                <div>© 2022 All rights are reserved</div>
            </div>
        </div>
    );
};

export default Footer;