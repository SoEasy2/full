import React from 'react';
import Logo from "../LogoLink/LogoLink";
import LogoLink from "../LogoLink/LogoLink";
import classes from './Footer.module.scss'
import FooterForm from "../FooterForm/FooterForm";
import FooterBot from "../FooterBot/FooterBot";
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <LogoLink/>
                <div className={classes.items}>
                    <div className={classes.item_1}>
                        <p className={classes.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, even when an unknown printer took</p>
                    </div>
                        <ul className={classes.ul}>
                            <li className={classes.item}><a className={classes.link} href="#">Home</a></li>
                            <li className={classes.item}><a className={classes.link} href="#">Buy Room</a></li>
                            <li className={classes.item}><a className={classes.link} href="#">Sell Room</a></li>
                            <li className={classes.item}><a className={classes.link} href="#">Help</a></li>
                            <li className={classes.item}><a className={classes.link} href="#">Contact</a></li>
                        </ul>
                    <div className="footer__item-3">
                        <ul className="footer__ul">
                            <li className={classes.item}><a className={classes.link} href="#">About</a></li>
                            <li className={classes.item}><a className={classes.link} href="#">Explore Rooms</a></li>
                            <li className={classes.item}><a className={classes.link} href="#">Insight</a></li>
                            <li className={classes.item}><a className={classes.link} href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer__item-3">
                        <h5 className={classes.title}>Newsletter</h5>
                        <p className={classes.desk}>Subscribe to the newsletter</p>
                        <FooterForm/>
                    </div>
                </div>
                <FooterBot/>
            </div>
        </footer>
    );
};

export default Footer;