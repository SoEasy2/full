import React from 'react';
import StripeContainer from '../../Payment/StripeContainer/StripeContainer';
import classes from './ModalPayment.module.scss'
interface IProps{
    data:any,
    setState(state:Boolean):void
}
const ModalPayment:React.FC<IProps> = ({data, setState}) => {
    const clickHandle= (event) =>{
        event.preventDefault()
        setState(true)
    }
    return (<>
        <div className={classes.modal} onClick={()=>setState(false)}>
        </div>
            <div className={classes.content} onClick={(event)=>clickHandle(event)}>
                <StripeContainer data={data} />
            </div>
    </>
    );
};

export default ModalPayment;