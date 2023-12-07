import { Territory } from 'src/territories/territory.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  RegionId: number;

  @Column()
  Name: string;

  @OneToMany(() => Territory, (territory) => territory.RegionId)
  Territories: Territory[];
}
