import React from 'react';
import classes from "./Rated.module.scss"

const Rated:React.FC = () => {
    return (
        <section className={classes.sectionRated}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <h3 className={classes.title}>Top Rated</h3>
                    <div className={classes.items_img}>
                        <div className={classes.img1}></div>
                        <div className={classes.img2}></div>
                        <div className={classes.img3}></div>
                        <div className={classes.img4}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rated;