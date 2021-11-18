import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {User} from "../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import Config from "../config/config"
import {UserTokenDto} from "../dto/user-token.dto"
import * as jwt from "jsonwebtoken"

@Injectable()
export class JwtService{
    constructor(@InjectRepository(User) private userRepository:Repository<User>) {
    }
    generateTokens(payload){
        console.log(payload.id)
        const accesToken = jwt.sign(payload, Config.jwt.secretOrKey, {expiresIn:'30m'})
        const refreshToken = jwt.sign(payload, Config.jwt.secretOrKey, {expiresIn:'30d'})
        return {
            accesToken, refreshToken
        }
    }

    validateAccesToken(token){
        try{
            const userData = jwt.verify(token, Config.jwt.secretOrKey)
            return userData
        }catch (e) {
            return null;
        }
    }
    validateRefreshToken(token){
        try{
            const userData = jwt.verify(token, Config.jwt.secretOrKey)
            return userData
        } catch (e) {
            return null
        }
    }
    async saveToken(userId:number, refreshToken:string){
        const user = await this.userRepository.findOne(userId)
        user.refreshToken = refreshToken
        const token = await this.userRepository.save(user);
        return token
    }
    async validateUser(user:User):Promise<User>{
        const userFromDb = await this.userRepository.findOne({where:{email:user.email}})
        if (userFromDb){
            return userFromDb;
        }
        return null;
    }
    async refreshToken(refreshToken:string){
        if(!refreshToken){
            throw new HttpException('USER.REFRESH_TOKEN_NOT_FOUND', HttpStatus.UNAUTHORIZED)
        }
        const userData = this.validateRefreshToken(refreshToken)
        const tokenFromDb = await this.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw new HttpException('USER.REFRESH_TOKEN_NOT_FOUND', HttpStatus.UNAUTHORIZED)
        }
        const user = await this.userRepository.findOne({where:{refreshToken:refreshToken}})
        const userTokenDto = new UserTokenDto(user)
        const tokens = this.generateTokens({...userTokenDto})
        return {...tokens, user:userTokenDto}

    }
    async findToken(refreshToken){
        const tokenData = await this.userRepository.findOne({where:{refreshToken:refreshToken}})
        const token = tokenData.refreshToken
        return token;
    }
    async removeToken(refreshToken:string){
        const tokenData = await this.userRepository.findOne({where:{refreshToken:refreshToken}})
        console.log(tokenData)
        tokenData.refreshToken = null;

        await this.userRepository.save(tokenData)

        return tokenData
    }

}