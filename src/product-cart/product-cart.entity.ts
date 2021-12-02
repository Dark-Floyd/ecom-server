import { Field, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/product/product.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';

@ObjectType()
@Entity('cart')
export class ProductCartEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('numeric')
  amount: number;

  @Field(() => ProductEntity)
  @OneToMany((_type) => ProductEntity, (product) => product.id)
  product: ProductEntity;
}
