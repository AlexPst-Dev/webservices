import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private ProductsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.ProductsRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.ProductsRepository.findOne({
      where: {
        ProductId: id,
      },
    });
  }

  // Retourner la liste des produits par catégorie
  async findByCategory(id: number): Promise<Product[]> {
    return await this.ProductsRepository.find({
      where: {
        CategoryId: id as any,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.ProductsRepository.delete(id);
  }
}
