import React, {useEffect, useState } from 'react';
import Overflow from "../Overflow/Overflow";
import CardItem from "../CardItem/CardItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../../redux/rootReducer/state';
import classes from './CardItemList.module.scss'
const CardItemList = () => {
    const step = 10;
    const appartaments = useSelector((state:IRootReducer) => state.map)
    const [item, setItem] = useState(0)
    const [appartament, setAppartament] = useState<Array<any>>([])
    const [loading, setLoaded] = useState(true)

    const loaded = () =>{
        if(appartaments){
            setLoaded(false)
            setAppartament([...appartaments.slice((0),(item+step))])
            setItem(prev=>(prev+step))
            setLoaded(true)

            if(appartament.length >= appartaments.length){
                setLoaded(false)
            }
        }


    }
    useEffect(()=>{
        if(appartaments){
            setLoaded(false)
            setItem(0)
            const app = appartaments.slice((item),(item+step))
                setItem(prev => (prev + step))
                setLoaded(true)
                setAppartament([...[],...app])}
    },[appartaments])
    return (
        <div className={classes.overflow} id={'id'}>
            <InfiniteScroll
            dataLength={appartament.length}
                next={()=>loaded()}
                hasMore={appartaments.length > appartament.length}
                loader={<h4>Loading...</h4>}
            scrollableTarget='id'>
                {appartament ? appartament.map((item)=> <CardItem id={item._id} name={item.listing.name} starRating={item.listing.starRating} avgRating={item.listing.avgRating} reviewsCount={item.listing.reviewsCount} img={item.listing.pictureUrl} price={item.pricingQuote.rateWithServiceFee.amount} key={item._id}/>) : <h6>Appartaments not found</h6> }
            </InfiniteScroll>
        </div>

    );
};

export default CardItemList;