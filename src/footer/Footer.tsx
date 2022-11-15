import React from 'react';
import style from "./Footer.module.scss"
import Icon from "./icon/Icon";
import Title from "../Common/components/title/Title";
import instagramImg from "../Common/assets/images/instagram.png"
import linkedinImg from "../Common/assets/images/linkedin.png"
import telegramImg from "../Common/assets/images/telegram.png"
import whatsappImg from "../Common/assets/images/whatsapp.png"
import viberImg from "../Common/assets/images/viber.png"
import githubImg from "../Common/assets/images/github.png"
import skypeImg from "../Common/assets/images/skype.png"
import discordImg from "../Common/assets/images/discord.svg"
import {Zoom} from "react-awesome-reveal";


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.container}>
                <Title titleName="REMEZ MAXIM"/>
                <div className={style.icons}>
                    <Zoom>
                        <Icon urlIcon={instagramImg} link="https://www.instagram.com/remezmaxim1992g/"/>
                        <Icon urlIcon={linkedinImg} link="https://www.linkedin.com/in/maksim-remez-942200198"/>
                        <Icon urlIcon={telegramImg} link="https://t.me/Maxim1992g"/>
                        <Icon urlIcon={whatsappImg} link="https://wa.me/+375447907412"/>
                        <Icon urlIcon={viberImg} link="viber://chat?number=%2B375447907412"/>
                        <Icon urlIcon={githubImg} link="https://github.com/remezmax1992g"/>
                        <Icon urlIcon={skypeImg} link="Skype:remezmaxim1992g?chat"/>
                        <Icon urlIcon={discordImg} link="https://discordapp.com/users/remezmax1992g#1131/"/>
                    </Zoom>
                </div>
                <div className={style.footerText}>© 2022 All rights are reserved</div>
            </div>
        </div>
    );
};

export default Footer;