import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from 'src/mail/mail.module';
import { User } from 'src/user/entity/user.entity';
import { BookApartamentsEntity } from '../book-apartament/entity/BookApartaments.entity';
import { ItemsSchema } from 'src/map/etity/pinktada.schema';

@Module({
  imports:[TypeOrmModule.forFeature([User,BookApartamentsEntity]), MailModule, MongooseModule.forFeature([{name:'items', schema:ItemsSchema}])],
  providers: [CheckoutService],
  controllers: [CheckoutController]
})
export class CheckoutModule {}
