import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('seller')
export class SellerEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;
  
  @Field()
  @Column('varchar', { length: 500 })
  name: string;
}
