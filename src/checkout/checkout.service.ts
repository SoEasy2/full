import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { ICheckoutDto } from './dto/checkout-dto';
import { stripe } from './Stripe/stripe';
import * as mongoose from 'mongoose'
import { MailService } from '../mail/mail.service';
import { User } from '../user/entity/user.entity';
import { items } from '../map/etity/pinktada.schema';
import { BookApartamentsEntity } from '../book-apartament/entity/BookApartaments.entity';


@Injectable()
export class CheckoutService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                @InjectRepository(BookApartamentsEntity) private bookApartament:Repository<BookApartamentsEntity>,
                @InjectModel('items') private pinktadaModel: Model<items>,
                private mailerService:MailService) {
    }
    async checkout(dto:ICheckoutDto){
        try{
            const payment = await stripe.paymentIntents.create({
                amount:dto.amount,
                currency:dto.currency,
                description:dto.description,
                payment_method:dto.id,
                confirm:true
            })
            const objectId = new mongoose.Types.ObjectId(dto.idAppartament)
            const apartament:any = await this.pinktadaModel.findById(objectId)
            const user = await this.userRepository.findOne(dto.idUser)
            const obj = {
                apartament:dto.idAppartament,
                endDate:dto.endDate,
                startDate:dto.startDate,
                user:user
            }
            const bookApartament = await this.bookApartament.save(obj)
                await this.mailerService.sendBookAppartament(user, dto.city, dto.hotel, dto.startDate, dto.endDate)
                return true
        } catch (e) {

            throw new HttpException('PAYMENT.NOT_VALID_PAYMENT', HttpStatus.BAD_REQUEST)
        }


    }
}
