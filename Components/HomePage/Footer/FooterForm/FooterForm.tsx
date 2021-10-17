import React from 'react';
import classes from './FooterForm.module.scss'


const FooterForm:React.FC = () => {
    return (
        <form action="submit">
            <input type="text" placeholder="Enter Email" className={classes.input}/>
            <button type="submit" className={classes.button}>Subscribe</button>
        </form>
    );
};

export default FooterForm;