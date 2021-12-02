import { Resolver, Query } from '@nestjs/graphql';
import { ProductEntity } from 'src/product/product.entity';
import { ProductService } from 'src/product/product.service';
import { ProductCartEntity } from './product-cart.entity';
import { ProductCartService } from './product-cart.service';

@Resolver(() => ProductCartEntity)
export class ProductCartResolver {
  constructor(
    private readonly productCartService: ProductCartService,
    private readonly productService: ProductService,
  ) {}

  @Query(() => [ProductCartEntity])
  async product() {
    return this.productCartService.getProductCarts();
  }

  @Query(() => [ProductEntity])
  async seller() {
    return this.productService.getProducts();
  }
}
