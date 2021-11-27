import {Body, Controller, Post } from '@nestjs/common';
import { CheckoutService } from './checkout.service';

import Config from '../config/config'
import { ICheckoutDto } from './dto/checkout-dto';
@Controller('api/checkout')
export class CheckoutController {
    constructor(private checkoutService:CheckoutService) {
    }
    @Post()
    checkout(@Body() dto:ICheckoutDto){
        return this.checkoutService.checkout(dto)
    }
}
