import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { Territory } from './territories/teritory.entity';
import { Region } from './regions/region.entity';
import { TerritoriesModule } from './territories/territories.module';
import { RegionsModule } from './regions/regions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sql_course',
      entities: [Category, Product, Territory, Region],
      synchronize: true,
    }),
    CategoriesModule,
    ProductsModule,
    TerritoriesModule,
    RegionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
