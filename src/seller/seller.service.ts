import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSellerDto } from './dto/create-seller.dto';
import { SellerEntity } from './seller.entity';
import { SellerRepository } from './seller.repository';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(SellerRepository)
    private readonly sellerRepository: SellerRepository,
  ) {}

  async createSeller(data: CreateSellerDto): Promise<SellerEntity> {
    let seller = new SellerEntity();
    seller.name = data.name;

    await this.sellerRepository.save(seller);

    return seller;
  }

  async getSellers() {
    return await this.sellerRepository.find();
  }
}
