// src/product/product.service.ts

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductEntity } from './product.entity'
import { Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
	constructor (@InjectRepository(ProductRepository) private readonly productRepository: ProductRepository) {}

	async createProduct(data: CreateProductDto): Promise<ProductEntity> {
		let product = new ProductEntity()
        product.id= data.id
        product.description = data.description
        product.images = data.images
        product.name = data.name
        product.uploadedDate = data.uploadedDate

        product.seller.name = data.seller.name
        product.category.name = data.category.name
        
		await this.productRepository.save(product)

		return product
	}

	async getProducts () {
		return await this.productRepository.find()
	}
}