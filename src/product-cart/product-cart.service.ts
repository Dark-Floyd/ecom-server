import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCartRepository } from './product-cart.repository';
import { CreateProductCartDto } from './dto/create-product-cart.dto';
import { ProductCartEntity } from './product-cart.entity';

@Injectable()
export class ProductCartService {
  constructor(
    @InjectRepository(ProductCartRepository)
    private readonly productCartRepository: ProductCartRepository,
  ) {}

  async createProductCart(
    data: CreateProductCartDto,
  ): Promise<ProductCartEntity> {
    let productCart = new ProductCartEntity();
    productCart.id = data.id;
    productCart.amount = data.amount;
    productCart.product = data.product;

    await this.productCartRepository.save(productCart);

    return productCart;
  }

  async getProductCarts() {
    return await this.productCartRepository.find();
  }
}
