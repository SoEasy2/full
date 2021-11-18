import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";
import * as bcrypt from "bcryptjs"

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>) {}
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
        return user;
    }
    async getUserByEmail(email:string){
        return await this.userRepository.findOne({where:{email}})
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
