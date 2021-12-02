import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/category.entity';
import { SellerEntity } from 'src/seller/seller.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@ObjectType()
@Entity('product')
export class ProductEntity {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('varchar', { length: 500 })
  description: string;

  @Field()
  @Column('numeric')
  price: number;

  @Field(()=>[String])
  @Column('varchar', { array: true })
  images: string[];

  @Field()
  @Column('varchar', { length: 500, unique: true })
  name: string;

  @Field()
  @Column('varchar', { length: 500 })
  uploadedDate: Date;

  @Field(()=>SellerEntity)
  @OneToMany((_type) => SellerEntity, (seller) => seller.name)
  seller: SellerEntity;

  @Field(()=>CategoryEntity)
  @OneToMany((_type) => CategoryEntity, (category) => category.name)
  category: CategoryEntity;
}
