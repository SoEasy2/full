import React from 'react';
import ItemsList from './ItemsList/ItemsList';
import classes from './TopList.module.scss'
interface IProps{
    book:any
}
const TopList:React.FC<IProps> = ({book}) => {
    return (
        <div className={classes.wrapper}>
            <ItemsList book={book}/>
        </div>
    );
};

export default TopList;