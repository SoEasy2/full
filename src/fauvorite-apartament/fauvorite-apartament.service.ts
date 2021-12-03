import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { items } from '../map/etity/pinktada.schema';

import { User } from '../user/entity/user.entity';
import { Repository } from 'typeorm';
import * as mongoose from 'mongoose'
import { ICheckFavouriteDto } from './dto/check-favourite.dto';
import { FavouriteAppartamentsEntity } from './entity/fauvorite-apartament-entity.entity';



@Injectable()
export class FauvoriteApartamentService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                @InjectRepository(FavouriteAppartamentsEntity) private favourite:Repository<FavouriteAppartamentsEntity>,
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

    async checkFavoritee(dto:ICheckFavouriteDto){
        const user =  await this.userRepository.findOne({where:{email:dto.email}})
        const favourite = await this.favourite.findOne({where:{user:user, apartament:dto.appartament}})
        if(!favourite){
            const obj = {
                user,
                apartament: dto.appartament
            }
            const favouriteAppartaments = await this.favourite.save(obj)
            const arr =  await this.favourite.find({where:{user}})
            return this.interationArray(arr);
        }
        await this.favourite.remove(favourite)
        const arr =  await this.favourite.find({where:{user}})
        return this.interationArray(arr);
    }

    async getFavouriteAppartament(email:string){
        const user = await this.userRepository.findOne({relations:['favouriteAppartament'], where:{email:email}})
        return this.interationArray(user.favouriteAppartament)
    }


}
