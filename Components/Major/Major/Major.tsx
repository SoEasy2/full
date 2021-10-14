import React from 'react';
import classes from './Major.module.scss'
const Major = () => {
    return (
        <section className={classes.sectionMajor}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.top}>
                        <h3 className={classes.title}>Find hotels in Major Cities</h3>
                        <button className={classes.btn}>Become a Seller</button>
                    </div>
                    <div className={classes.items}>
                        <div>
                            <div className={classes.itemLeft_top}>
                                <div className={classes.item1}>
                                    <div></div>
                                    <p>Los Angeles</p>
                                </div>
                                <div className={classes.item2}>
                                    <div></div>
                                    <p>Miami</p>
                                </div>
                            </div>
                            <div className={classes.item3}>
                                <div></div>
                                <p>San Francisco</p>
                            </div>
                        </div>
                        <div className={classes.itemRight}>
                            <div className={classes.item4}>
                                <div></div>
                                <p>Houston</p>
                            </div>
                            <div className={classes.item5}>
                                <div></div>
                                <p>New Yourk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Major;