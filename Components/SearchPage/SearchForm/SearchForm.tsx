import React from 'react';
import SearchBtn from "../SearchBtn/SearchBtn";
import classes from "./SearchForm.module.scss"

const SearchForm = () => {
    return (
        <div className={classes.searchPanel}>
            <form action="post" className={classes.form}>
                <input className={classes.searchLocation} type="text"/>
                <input className={classes.searchDate} type="date"/>
                <input className={classes.searchDate} type="date"/>
                <select className={classes.select}>
                    <option disabled>Select Type</option>
                    <option  value="t1">One room</option>
                    <option  value="t1">Two rooms</option>
                    <option  value="t1">Three rooms</option>
                    <option  value="t1">Four rooms</option>
                    <option  value="t1">Five rooms</option>
                </select>
                <SearchBtn/>
            </form>
        </div>
    );
};

export default SearchForm;