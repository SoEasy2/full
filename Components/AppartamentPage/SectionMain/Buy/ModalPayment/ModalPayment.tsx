import React from 'react';
import StripeContainer from '../../Payment/StripeContainer/StripeContainer';
import classes from './ModalPayment.module.scss'
interface IStateDate{
    startDate:string,
    endDate:string
}
interface IProps{
    data:any,
    setState(state:Boolean):void,
    stateForm:IStateDate
}
const ModalPayment:React.FC<IProps> = ({data, stateForm, setState}) => {
    const clickHandle= (event) =>{
        event.preventDefault()
        setState(true)
    }
    return (<>
        <div className={classes.modal} onClick={()=>setState(false)}>
        </div>
            <div className={classes.content} onClick={(event)=>clickHandle(event)}>
                <StripeContainer data={data} stateForm={stateForm}/>
            </div>
    </>
    );
};

export default ModalPayment;