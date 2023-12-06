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
}
