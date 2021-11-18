import { useRouter } from 'next/router';
import React from 'react';
import classes from "./Logo.module.scss"

const Logo = () => {
    const router = useRouter()
    return (
        <>
            <a className={classes.logo} onClick={()=>router.push('/')}>pinktada</a>
        </>
    );
};

export default Logo;