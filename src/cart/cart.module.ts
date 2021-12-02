
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCartModule } from 'src/product-cart/product-cart.module';
import { ProductCartService } from 'src/product-cart/product-cart.service';
import { CartRepository } from './cart.repository';
import { CartResolver } from './cart.resolver';


@Module({
  imports: [TypeOrmModule.forFeature([CartRepository]),ProductCartModule],
  providers: [ProductCartService,CartResolver],
})
export class CartModule {}
