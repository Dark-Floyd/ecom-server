
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCartRepository } from './product-cart.repository';
import { ProductModule } from 'src/product/product.module';
import { ProductCartService } from './product-cart.service';
import { ProductCartResolver } from './product-cart.resolver';


@Module({
  imports: [TypeOrmModule.forFeature([ProductCartRepository]),ProductModule],
  providers: [ProductCartService,ProductCartResolver],
})
export class ProductCartModule {}
