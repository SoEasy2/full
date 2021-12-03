import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { items } from '../map/etity/pinktada.schema';
import { User } from '../user/entity/user.entity';
import { Repository } from 'typeorm/repository/Repository';
import { BookApartamentsEntity } from './entity/BookApartaments.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookApartamentService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                @InjectRepository(BookApartamentsEntity) private bookApartament:Repository<BookApartamentsEntity>,
                @InjectModel('items') private pinktadaModel: Model<items>) {

    }
    async interationArray (arr){
        let array = []
        for (let i = 0; i<arr.length; i++){
            let objectId = new mongoose.Types.ObjectId( arr[i].apartament)
            let item = await this.pinktadaModel.findById(objectId)
            array.push(item)
        }
        return array;
    }
    async checkBook(email:string){
        const user = await this.userRepository.findOne({relations:['bookApartaments'],where:{email:email}})
        const s = await  this.bookApartament.find({where:{user:user}});
        return this.interationArray(s)
    }
}
