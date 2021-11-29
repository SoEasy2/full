import {HttpException, HttpStatus, Injectable} from '@nestjs/common';

import {InjectRepository} from "@nestjs/typeorm";
import { User } from 'src/user/entity/user.entity';

import {Repository} from "typeorm";
import { Confirm } from './entity/confirm.entity';

@Injectable()
export class ConfirmService {
    constructor(@InjectRepository(Confirm) private confirmRepository:Repository<Confirm>,
                @InjectRepository(User) private userRepository:Repository<User>
               ) {}
    async createTokenConfirm(token:string,user:User){
        const confirm = {
            token,
            date:new Date(),
            user:user
        }
        return await this.confirmRepository.save(confirm)
    }
    async verifyEmail(token:string){
        console.log(token)
        const emailVerify = await this.confirmRepository.findOne({where:{token:token}, relations:['user']})
        if (emailVerify){
            const user = await this.userRepository.findOne({where:{email:emailVerify.user.email}})
            user.valid = true;
            const savedUser = await this.userRepository.save(user);
            return savedUser
        }else{
            throw new HttpException('LOGIN.EMAIL_CODE_NOT_VALID', HttpStatus.FORBIDDEN);
        }
    }


}
