
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerModule } from 'src/seller/seller.module';
import { CategoryModule } from 'src/category/category.module';
import { AdditionalInfoModule } from 'src/additional-info/additional-info.module';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository]),SellerModule,CategoryModule,AdditionalInfoModule],
  providers: [ProductService],
})
export class ProductModule {}
