import { ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('cart')

export class CartEntity {



@PrimaryGeneratedColumn()
  name: string;
}
