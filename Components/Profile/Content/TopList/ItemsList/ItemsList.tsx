import React from 'react';
import classes from './ItemsList.module.scss'
interface IProps{
    book:any
}
const ItemsList:React.FC<IProps> = ({book}) => {
    return (
        <div className={classes.wrapper}>
            <div className={`${classes.item} ${classes.item1}`}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div className={classes.itemText}>Rooms</div></div>
                <div className={classes.wrapperInfo}>
                    <p className={classes.topText}>Total rooms</p>
                    <p className={classes.count}>{book ? book.length : 0}</p>
                    <p className={classes.topText}>Total Expected price</p>
                    <p className={classes.price}>${book ? book.reduce(function (total, current){return total+current.pricingQuote.rateWithServiceFee.amount},0) : 0}</p>
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div className={classes.itemText}>Rooms</div></div>
                    <div className={classes.wrapperInfo}>
                        <p className={classes.topText}>Subheading</p>
                        <p className={classes.itemTwo}>Value Here</p>
                    </div>
            </div>
            <div className={classes.item}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div className={classes.itemText}>Rooms</div></div>
                <div className={classes.wrapperInfo}>
                    <p className={classes.topText}>Rooms</p>
                    <p className={classes.count}>5</p>
                    <p className={classes.topText}>Price</p>
                    <p className={classes.price}>$756</p>
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.wrapperImg}><img src="" alt=""/><div className={classes.itemText}>Rooms</div></div>
                <div className={classes.wrapperInfo}>
                    <div className={classes.topText}>Amount Left</div>
                    <div className={classes.itemTwo}>$1,600</div>
                </div>
            </div>
        </div>
    );
};

export default ItemsList;