import { ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('seller')
export class SellerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 500 })
  name: string;
}
