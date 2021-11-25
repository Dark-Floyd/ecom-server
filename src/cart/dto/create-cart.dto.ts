import { Field, ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/product/product.entity';

@ObjectType()
export class CreateCartDto {
  @Field() readonly product: ProductEntity;
  @Field() readonly amount: number;
}
