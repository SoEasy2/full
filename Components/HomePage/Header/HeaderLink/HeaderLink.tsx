import React from 'react';
import classes from './HeaderLink.module.scss'

const HeaderLink:React.FC = ({children}) => {
    return (
        <li className={classes.menu_item}>
            <a href="#" className={classes.menu_link}>{children}</a>
        </li>
    );
};

export default HeaderLink;