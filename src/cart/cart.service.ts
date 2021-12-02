import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { CartRepository } from './cart.repository';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartRepository)
    private readonly cartRepository: CartRepository,
  ) {}

  async createProduct(data: CreateCartDto): Promise<CartEntity> {
    let cart = new CartEntity();
    cart.id = data.id;
    cart.productCart = data.productCart;

    await this.cartRepository.save(cart);

    return cart;
  }

  async getCarts() {
    return await this.cartRepository.find();
  }
}
