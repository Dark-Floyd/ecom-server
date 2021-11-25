// src/pokemon/pokemon.resolver.ts

import { Resolver, Query } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/category.entity';
import { CategoryService } from 'src/category/category.service';
import { SellerEntity } from 'src/seller/seller.entity';
import { SellerService } from 'src/seller/seller.service';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly sellerService: SellerService,
    private readonly categoryService: CategoryService,
  ) {

    
  }
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => [ProductEntity])
  async product() {
    return this.productService.getProducts();
  }

  @Query(() => [SellerEntity])
  async seller() {
    return this.sellerService.getSellers();
  }

  @Query(() => [CategoryEntity])
  async category() {
    return this.categoryService.getCategories();
  }

  
}
