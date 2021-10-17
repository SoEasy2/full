import React from 'react';
import liked from "../../../public/liked.svg";
import unLiked from "../../../public/unLiked.svg";
import classes from "./SectionContent.module.scss"
import Container from "../../Container/Container";
import Overflow from "../Overflow/Overflow";
import ListBtnFilters from "../ListBtnFilters/ListBtnFilters";
import CardItemList from "../CardItemList/CardItemList";
import Map from "../Map/Map";
import dynamic from "next/dynamic";

const SectionContent:React.FC = () => {
    const Map:any = dynamic(()=>import("../Map/Map") as any, {ssr:false})
    return (
        <section className={classes.section}>
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