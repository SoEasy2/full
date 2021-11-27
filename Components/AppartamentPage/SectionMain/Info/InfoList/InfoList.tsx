import React from 'react';
import classes from './InfoList.module.scss'
interface IProps{
bedrooms:string,
    beds:string,
    bethrooms:string,
    guests:string
}
const InfoList:React.FC<IProps> = ({bedrooms, guests, bethrooms, beds}) => {
    console.log(beds)
    return (
        <div className={classes.mainDesk}>
            <p className={classes.text}>{guests} guests</p>
            <p className={classes.text}>{bedrooms} bedroom</p>
            <p className={classes.text}>{beds} bed</p>
            <p className={classes.text}>{bethrooms} baths</p>
        </div>
    );
};

export default InfoList;