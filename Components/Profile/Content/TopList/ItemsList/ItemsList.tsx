import React from 'react';
import classes from './ItemsList.module.scss'
const ItemsList = () => {
    return (
        <div className={classes.wrapper}>
            <div className={`${classes.item} ${classes.item1}`}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div>Rooms</div></div>
                <div className={classes.wrapperInfo}>
                    <p className={classes.topText}>Total rooms - RNAs</p>
                    <p className={classes.count}>127</p>
                    <p className={classes.topText}>Total Amount Spent</p>
                    <p className={classes.price}>$4,568</p>
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div>Rooms</div></div>
                    <div className={classes.wrapperInfo}>
                        <p className={classes.topText}>Subheading</p>
                        <p className={classes.itemTwo}>Value Here</p>
                    </div>
            </div>
            <div className={classes.item}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div>Rooms</div></div>
                <div className={classes.wrapperInfo}>
                    <p className={classes.topText}>Total Rooms</p>
                    <p className={classes.count}>5</p>
                    <p className={classes.topText}>Total Expected Price</p>
                    <p className={classes.price}>$756</p>
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div>Rooms</div></div>
                <div className={classes.wrapperInfo}>
                    <div className={classes.topText}>Amount Left</div>
                    <div className={classes.itemTwo}>$1,600</div>
                </div>
            </div>
        </div>
    );
};

export default ItemsList;