import { ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 500 })
  name: string;
}
