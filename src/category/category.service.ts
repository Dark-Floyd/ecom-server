import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository:CategoryRepository,
  ) {}

  async createCategory(data: CreateCategoryDto): Promise<CategoryEntity> {
    let category = new CategoryEntity();
    category.name = data.name;

    await this.categoryRepository.save(category);

    return category;
  }

  async getCategories() {
    return await this.categoryRepository.find();
  }
}
