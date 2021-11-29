import React from 'react';
import classes from './Appartaments.module.scss'
import Card from './Card/Card';
interface IProps{
    book:any
}
const Appartaments:React.FC<IProps> = ({book}) => {
    console.log(book)
    return (
        <div className={classes.wrapper}>
            <div className={classes.div}>
                <div className={classes.overflow}>
                <div className={classes.wrapperTop}>
                    <div className={classes.img}>Picture</div>
                    <div className={classes.room }>Price</div>
                    <div className={classes.hotel}>Star</div>
                    <div className={classes.destination}>Destination</div>
                    <div className={classes.date}>Start-date</div>
                    <div className={classes.date}>End-date</div>
                </div>
                    {book ? book.map((item)=>(<Card city={item.listing.city} rooms={item.pricingQuote.rateWithServiceFee.amount} star={item.listing.avgRating} key={item._id} img={item.listing.pictureUrl}  /> )): null}
            </div>
            </div>
        </div>
    );
};

export default Appartaments;