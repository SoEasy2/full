import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";
import * as bcrypt from "bcryptjs"
import { FavouriteAppartamentsEntity } from 'src/entities/favouriteAppartaments.entity';
import { ICheckFavouriteDto } from 'src/dto/check-favourite.dto';
import { UserTokenDto } from 'src/dto/user-token.dto';
import { items } from 'src/map/pinktada.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                @InjectRepository(FavouriteAppartamentsEntity) private favourite:Repository<FavouriteAppartamentsEntity>,
                @InjectModel('items') private pinktadaModel: Model<items>) {}
    async findAll():Promise<User[]> {
        const users = await this.userRepository.find({relations:['confirm'], transaction:true, loadEagerRelations:true})
        return users;
    }
    async findOne(id:string):Promise<User>{
        const user = await this.userRepository.findOne(id);
        return user;
    }
    async interationArray (arr){
        let array = []
        for (let i = 0; i<arr.length; i++){
            let objectId = new mongoose.Types.ObjectId( arr[i].appartament)
            let item = await this.pinktadaModel.findById(objectId)
            array.push(item)
        }
        return array;
    }
    async createUser(dto:CreateUserDto):Promise<User>{
        const user = await this.userRepository.save(dto)
        return user;
    }
    async checkFavoritee(dto:ICheckFavouriteDto){
        const user =  await this.userRepository.findOne({where:{email:dto.email}})
        const favourite = await this.favourite.findOne({where:{user:user, appartament:dto.appartament}})
        if(!favourite){
            const obj = {
                user,
                appartament: dto.appartament
            }
            const favouriteAppartaments = await this.favourite.save(obj)
            const arr =  await this.favourite.find({where:{user}})
            return this.interationArray(arr);
        }
        await this.favourite.remove(favourite)
        const arr =  await this.favourite.find({where:{user}})
        return this.interationArray(arr);
    }
    async getUserByEmail(email:string){
        return await this.userRepository.findOne({where:{email}})
    }
    async getFavouriteAppartament(email:string){

        const user = await this.userRepository.findOne({relations:['favouriteAppartament'], where:{email:email}})
       return this.interationArray(user.favouriteAppartament)
    }
    async getUserByToken(token:string){
        return true;
    }
    async setPassword(email:string, newPassword:string){
        const user = await this.userRepository.findOne({where:{email:email}})
        if(!user) throw new HttpException('LOGIN.USER_NOT_FOUND',  HttpStatus.NOT_FOUND)
        user.password = await bcrypt.hash(newPassword, 5);
        await this.userRepository.save(user);
        return true;
    }
}
