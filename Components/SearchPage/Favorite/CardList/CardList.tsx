import React from 'react';
import { IUser } from '../../../../redux/user/types/user';

import Card from '../Card/Card';
interface IProps{
    data:Array<any>
}
const CardList:React.FC<IProps> = ({data}) => {
    console.log(data)
    return (
        <>
            {data ? data.map((item)=><Card key={item._id} img={item.listing.pictureUrl} beds={item.listing.beds}
            bedrooms={item.listing.bedrooms} star={item.listing.starRating} bathrooms={item.listing.bathrooms} price={item.pricingQuote.rateWithServiceFee.amount}
            id={item._id}/>) : <p>Netu</p>}
        </>
    );
};

export default CardList;