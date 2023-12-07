import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Territory } from './territory.entity';

@Injectable()
export class TerritoriesService {
  constructor(
    @InjectRepository(Territory)
    private TerritoriesRepository: Repository<Territory>,
  ) {}

  findAll(): Promise<Territory[]> {
    return this.TerritoriesRepository.find();
  }

  async findOne(id: number): Promise<Territory | null> {
    return await this.TerritoriesRepository.findOne({
      where: {
        TerritoryId: id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.TerritoriesRepository.delete(id);
  }

  // Compter le nombre de territoires par région
  async countTerritoriesByRegion(id: number): Promise<number> {
    return await this.TerritoriesRepository.count({
      where: {
        RegionId: id as any,
      },
    });
  }

  async countTerritoriesByRegions(): Promise<any> {
    return await this.TerritoriesRepository.createQueryBuilder('t')
      .select('r.RegionId', 'RegionId')
      .addSelect('COUNT(t.TerritoryId)', 'nbTerritories')
      .innerJoin('t.RegionId', 'r')
      .groupBy('r.RegionId')
      .getRawMany();
  }
}
