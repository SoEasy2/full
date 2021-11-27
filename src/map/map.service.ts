import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Model, Schema } from 'mongoose';
import { Repository } from 'typeorm';
import { ICord } from './dto/coord-dto';
import {items } from './pinktada.schema';

@Injectable()
export class MapService {
    constructor(@InjectModel('items') private pinktadaModel: Model<items>) {
    }
    async getApp(obj:ICord) {
        console.log(obj)
        const arr = await this.pinktadaModel.find({location: {$near: {$geometry: {type:'Point', coordinates: [obj.lat, obj.lng]}, $maxDistance: obj.mapDistance}}})
        return arr;
    }
    async getOne(id:string){
        const app = await this.pinktadaModel.findById(id)
        return app
    }
}
