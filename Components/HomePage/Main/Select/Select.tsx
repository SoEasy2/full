import React from 'react';
import classes from './Select.module.scss'
const Select:React.FC = () => {
    return (
        <label className={classes.label} htmlFor={classes.select}>
            <div className="input-search-bedroom">Bedroom</div>
            <select className={classes.select} id={classes.select}>
                <option className={classes.option} disabled>Select Type</option>
                <option className={classes.option} value="t1">One room</option>
                <option className={classes.option} value="t1">Two rooms</option>
                <option className={classes.option} value="t1">Three rooms</option>
                <option className={classes.option} value="t1">Four rooms</option>
                <option className={classes.option} value="t1">Five rooms</option>
            </select>
        </label>
    );
};

export default Select;