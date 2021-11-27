import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICheckoutDto } from './dto/checkout-dto';
import { stripe } from './Stripe/stripe';

@Injectable()
export class CheckoutService {

    async checkout(dto:ICheckoutDto){
        try{
            console.log(dto + 'dto!!!!!')
            const payment = await stripe.paymentIntents.create({
                amount:dto.amount,
                currency:dto.currency,
                description:dto.description,
                payment_method:dto.id,
                confirm:true
            })
            return true
        } catch (e) {
            console.log(e)
            throw new HttpException('PAYMENT.NOT_VALID_PAYMENT', HttpStatus.BAD_REQUEST)
        }


    }
}
