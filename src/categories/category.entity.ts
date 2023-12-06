import { Product } from 'src/products/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  CategoryId: number;

  @Column()
  CategoryName: string;

  @Column()
  Description: string;

  @OneToMany(() => Product, (product) => product.ProductId)
  Products: Product[];
}
