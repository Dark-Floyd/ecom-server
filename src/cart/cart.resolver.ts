import { Resolver, Query } from '@nestjs/graphql';
import { ProductCartEntity } from 'src/product-cart/product-cart.entity';
import { ProductCartService } from 'src/product-cart/product-cart.service';
import { CartEntity } from './cart.entity';
import { CartService } from './cart.service';

@Resolver(() => CartEntity)
export class CartResolver {
  constructor(
    private readonly cartService: CartService,
    private readonly productCartService: ProductCartService,
  ) {}

  @Query(() => [CartEntity])
  async product() {
    return this.cartService.getCarts();
  }

  @Query(() => [ProductCartEntity])
  async productCart() {
    return this.productCartService.getProductCarts;
  }
}
