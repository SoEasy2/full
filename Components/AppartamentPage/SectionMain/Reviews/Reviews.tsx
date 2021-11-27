import React from 'react';
import classes from './Reviews.module.scss'
interface IProps{
    appartament:any
}
const Reviews:React.FC<IProps> = ({appartament}) => {
    return (
        <div className={classes.reviews}>{appartament.listing.starRating}<span className={classes.span}> ({appartament.listing.reviewsCount} reviews)</span></div>
    );
};

export default Reviews;