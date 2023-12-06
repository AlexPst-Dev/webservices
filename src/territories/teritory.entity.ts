import { Region } from 'src/regions/region.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Territory {
  @PrimaryGeneratedColumn()
  TerritoryId: number;

  @Column()
  Name: string;

  @OneToMany(() => Region, (region) => region.RegionId)
  Products: Region[];
}
