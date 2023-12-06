import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product | null> {
    return this.productsService.findOne(id);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('category/:id')
  @ApiResponse({
    status: 200,
  })
  findByCategory(@Param('id') id: number): Promise<Product[]> {
    return this.productsService.findByCategory(id);
  }
}
