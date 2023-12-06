import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private CategoriesRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.CategoriesRepository.find();
  }

  async findOne(id: number): Promise<Category | null> {
    return await this.CategoriesRepository.findOne({
      where: {
        CategoryId: id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.CategoriesRepository.delete(id);
  }
}
