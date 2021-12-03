import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import * as bcrypt from "bcryptjs"

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import {CreateUserDto} from './dto/create-user.dto'


import {User} from './entity/user.entity';

import { items } from '../map/etity/pinktada.schema';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                @InjectModel('items') private pinktadaModel: Model<items>) {}
    async findAll():Promise<User[]> {
        const users = await this.userRepository.find({relations:['confirm'], transaction:true, loadEagerRelations:true})
        return users;
    }
    async findOne(id:string):Promise<User>{
        const user = await this.userRepository.findOne(id);
        return user;
    }


    async createUser(dto:CreateUserDto):Promise<User>{
        const user = await this.userRepository.save(dto)
        console.log(user)
        return user;
    }

    async getUserByEmail(email:string){
        return await this.userRepository.findOne({where:{email}})
    }
    async getUserByToken(token:string){
        return true;
    }
    async setPassword(email:string, newPassword:string) {
        const user = await this.userRepository.findOne({where: {email: email}})
        if (!user) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND)
        user.password = await bcrypt.hash(newPassword, 5);
        await this.userRepository.save(user);
        return true;
    }
}