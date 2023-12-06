import { Region } from 'src/regions/region.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Territory {
  @PrimaryGeneratedColumn()
  TerritoryId: number;

  @Column()
  Name: string;

  @ManyToOne(() => Region, (region) => region.RegionId)
  RegionId: Region;
}
