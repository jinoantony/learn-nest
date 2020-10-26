/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number

    @Column()
    @Field()
    name: string

    @Column()
    @Field(type => Int)
    age: number

    @Column({default: true})
    @Field()
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    deletedAt: Date
}