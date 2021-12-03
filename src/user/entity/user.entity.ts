import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

import {ApiProperty} from "@nestjs/swagger";

import {ForgottenPasswordEntity} from "./ForgottenPasswordEntity.entity";

import { Confirm } from "../../confirm/entity/confirm.entity";
import { CommentEntity } from "../../comment/entity/comment.entity";
import { FavouriteAppartamentsEntity } from "../../fauvorite-apartament/entity/fauvorite-apartament-entity.entity";
import { BookApartamentsEntity } from "../../book-apartament/entity/BookApartaments.entity";


@Entity()
export class User {
    @ApiProperty({example:'1', description:'Primary key'})
    @Column({primary:true, generated:"increment", unique:true, nullable:false, type:"int"})
    id: number;

    @ApiProperty({example:'user@mail.ru', description:'Email'})
    @Column({ nullable:false, unique:true, type:"varchar"})
    email: string;

    @ApiProperty({example:'123qweqwe123', description:'Password'})
    @Column({nullable:false, type:"varchar"})
    password: string;

    @ApiProperty({example:false, description:'Verified account'})
    @Column({nullable:false, default:false})
    valid:boolean;
    @ApiProperty({example:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvZWFzeTI0QG1haWwucnUiLCJpZCI6MSwidmFsaWQiOnRydWUsImlhdCI6MTYzODE2NzAyNCwiZXhwIjoxNjQwNzU5MDI0fQ.51nMoUUmSD0Coj70oZqg2D0wZnjoNxWQD3KnNuWjiik', description:'Refresh token'})
    @Column({nullable:true, type:'varchar', unique:true})
    refreshToken:string;

    @ApiProperty({type:Confirm})
    @OneToOne(()=>Confirm, confirm=>confirm.user)
    @JoinColumn()
    confirm:Confirm;


    @ApiProperty({type:ForgottenPasswordEntity})
    @OneToOne(()=>ForgottenPasswordEntity, forgottenPassword =>forgottenPassword.user)
    @JoinColumn()
    forgottenPassword:ForgottenPasswordEntity;

    @ApiProperty({type:[CommentEntity]})
    @OneToMany(type => CommentEntity, comment => comment.user)
    comments: CommentEntity[];


    @ApiProperty({type:[FavouriteAppartamentsEntity]})
    @OneToMany(type => FavouriteAppartamentsEntity,favouriteAppartament => favouriteAppartament.user)
    favouriteAppartament:FavouriteAppartamentsEntity[]


    @ApiProperty({type:[BookApartamentsEntity]})
    @OneToMany(type =>  BookApartamentsEntity,  bookApartaments=> bookApartaments.user)
    bookApartaments: BookApartamentsEntity[]
}