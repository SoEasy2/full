import React from 'react';
import classes from './Main.module.scss'
import Form from "../Form/Form";
const Main:React.FC = () => {
    return (
        <section className={classes.sectionMain}>
            <div className={classes.container}>
                <div>
                    <div className={classes.search}>
                        <Form/>
                    </div>
                    <div className="section-main__info">
                        <div className={classes.containerTitle}>
                            <h2 className={classes.title1}>Discover rooms,</h2>
                            <h2 className={classes.title2}>hotels & make assets!</h2>
                            <button className="section-main__button">Become a Seller</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Main;