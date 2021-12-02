import {Body, Controller, Post } from '@nestjs/common';
import { CheckoutService } from './checkout.service';

import Config from '../config/config'
import { ICheckoutDto } from './dto/checkout-dto';
import {ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('checkout')
@Controller('api/checkout')
export class CheckoutController {
    constructor(private checkoutService:CheckoutService) {
    }
    @ApiOperation({summary:'Book apartament'})
    @ApiResponse({status:200})
    @ApiBody({type:ICheckoutDto})
    @Post()
    checkout(@Body() dto:ICheckoutDto){
        return this.checkoutService.checkout(dto)
    }
}
