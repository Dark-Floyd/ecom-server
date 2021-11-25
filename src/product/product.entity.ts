import { ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/category.entity';
import { SellerEntity } from 'src/seller/seller.entity';
import { SellerRepository } from 'src/seller/seller.repository';
import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 500 })
  description: string;

  @Column('numeric')
  price: number;

  @Column('varchar', { array: true })
  images: string[];

  @Column('varchar', { length: 500, unique: true })
  name: string;

  @Column('varchar', { length: 500 })
  uploadedDate: Date;


  @OneToMany(_type=>SellerEntity,seller=>seller.name)
  seller: SellerEntity;

  @OneToMany(_type=>CategoryEntity,category=>category.name)
  category: CategoryEntity;
}
