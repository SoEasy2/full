import React, { useState } from 'react';
import Select from 'react-select';
import classes from './Select.module.scss'
type OptionType = {
    value:string,
    label:string
}
interface ISelectProps{
    setForm(obj):void,
}
const SelectComponent:React.FC<ISelectProps> = ({setForm}) => {
    const options:OptionType[] = [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        { value: '4', label: 'Four' },

    ]
    const [select, setSelect] = useState({value:'1', label:'One'})
    const handleChange = (selectedOption) =>{
        setSelect(selectedOption)
        setForm(prev=>({...prev, ...{bedroom:selectedOption.value}}))
    }
    return (
        <div>
            <div className="input-search-bedroom">Bedroom</div>
            <Select
                className={classes.select}
                    placeholder={''}
               value={select}
               onChange={(option)=>handleChange(option)}
               options={options}
            />
        </div>
    );
};

export default SelectComponent;