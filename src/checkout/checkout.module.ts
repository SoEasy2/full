import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from '../mail/mail.module';
import { User } from '../user/entity/user.entity';
import { BookApartamentsEntity } from '../book-apartament/entity/BookApartaments.entity';
import { ItemsSchema } from '../map/etity/pinktada.schema';

@Module({
  imports:[TypeOrmModule.forFeature([User,BookApartamentsEntity]), MailModule, MongooseModule.forFeature([{name:'items', schema:ItemsSchema}])],
  providers: [CheckoutService],
  controllers: [CheckoutController]
})
export class CheckoutModule {}
