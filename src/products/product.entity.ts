import { Category } from 'src/categories/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  ProductId: number;

  @Column()
  Name: string;

  @Column()
  Qte: number;

  @ManyToOne(() => Category, (category) => category.CategoryId)
  CategoryId: Category;
}
