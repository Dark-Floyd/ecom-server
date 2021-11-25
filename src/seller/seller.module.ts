
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerService } from 'src/seller/seller.service';
import { SellerRepository } from './seller.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SellerRepository])],
  providers: [SellerService],
  exports: [SellerService],
})
export class SellerModule {}
