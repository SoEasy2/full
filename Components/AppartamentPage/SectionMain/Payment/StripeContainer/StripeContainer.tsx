import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import React from 'react';
import Config from '../../../../../Config';
import PaymentForm from '../PaymentForm/PaymentForm';
import classes from './StripeContainer.module.scss'
const stripeTestPromise = loadStripe(Config.STRIPE_KEY)
interface IProps{
    data:any
}
const StripeContainer:React.FC<IProps> = ({data}) => {

    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm data={data}/>
        </Elements>
    );
};

export default StripeContainer;