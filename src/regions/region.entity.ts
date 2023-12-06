import { Territory } from 'src/territories/teritory.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  RegionId: number;

  @Column()
  Name: string;

  @ManyToOne(() => Territory, (territory) => territory.TerritoryId)
  TerritoryId: Territory;
}
