import React, { useState } from 'react';
import liked from "../../../public/liked.svg";
import unLiked from "../../../public/unLiked.svg";
import classes from "./SectionContent.module.scss"
import Container from "../../Container/Container";
import Overflow from "../Overflow/Overflow";
import ListBtnFilters from "../ListBtnFilters/ListBtnFilters";
import CardItemList from "../CardItemList/CardItemList";
import Map from "../Map/Map";
import dynamic from "next/dynamic";
import Favorite from '../Favorite/Favorite';
import { checkFavourite } from '../../../http/api';
import { IRootReducer } from '../../../redux/rootReducer/state';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
interface IProps{
    setFavorite(obj:Boolean):void;
    isFavorite:boolean
}
const SectionContent:React.FC<IProps> = ({setFavorite, isFavorite}) => {
    const Map:any = dynamic(()=>import("../Map/Map") as any, {ssr:false})
    const user = useSelector((state:IRootReducer) => state.user)
    const [favourite,setFavourite] = useState<any>([])
    const getFauvorite = async ()=>{
        return await checkFavourite(user.email)
    }
    const test = async ()=>{
        const response = await getFauvorite()
        setFavourite([...response.data])
    }
    useEffect(()=>{
        if (user){
            test()
        }
    },[user])
    return (
        <section className={classes.section}>
            <Favorite data={favourite} isFavorite={isFavorite} stateFavorite={setFavorite}/>
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.content}>
                        <h4 className={classes.title}>Places to buy near you</h4>
                       <ListBtnFilters/>
                        <p className={classes.text}>
                            Explore all 300+ stays
                        </p>
                        <CardItemList/>
                    </div>
                    <Map/>
                </div>
            </Container>
        </section>
    );
};

export default SectionContent;