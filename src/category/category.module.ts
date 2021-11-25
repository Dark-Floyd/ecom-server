// src/pokemon/pokemon.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [CategoryService],
})
export class CategoryModule {}
