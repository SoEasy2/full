import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entity/user.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";


@Entity()
export class CommentEntity{
    @ApiProperty({type:Number, description:'Primary key'})
    @Column({primary:true, generated:"increment", unique:true, nullable:false, type:"int"})
    id: number;

    @ApiProperty({})
    @Column({ nullable:false, type:"varchar"})
    description: string;
    @ApiProperty({type:Number, description:'Rating'})
    @Column({nullable:false, type:"int"})
    rate:number;
    @ApiProperty({type:Date, description:"Date"})
    @Column({nullable:false, type:"date", default:new Date(2021,2,2)})
    date: Date;

    @ManyToOne(type => User, user => user.comments)
    user:User;
}