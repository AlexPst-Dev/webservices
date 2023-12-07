import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TerritoriesByRegion } from './territoriesByRegion.entity';

@Injectable()
export class TerritoriesByRegionService {
  constructor(
    @InjectRepository(TerritoriesByRegion)
    private territoriesByRegionRepository: Repository<TerritoriesByRegion>,
  ) {}

  async findAll(): Promise<TerritoriesByRegion[]> {
    return this.territoriesByRegionRepository.find();
  }
}
