import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/category.entity';
import { ProductCartEntity } from 'src/product-cart/product-cart.entity';
import { SellerEntity } from 'src/seller/seller.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity('cart')
export class CartEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field(() => ProductCartEntity)
  @OneToMany((_type) => ProductCartEntity, (productCart) => productCart.id)
  productCart: ProductCartEntity;
}
