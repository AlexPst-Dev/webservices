import { Controller, Get } from '@nestjs/common';
import { TerritoriesByRegion } from './territoriesByRegion.entity';
import { TerritoriesByRegionService } from './territoriesByRegion.service';

@Controller('territoriesByRegion')
export class TerritoriesByRegionController {
  constructor(private readonly service: TerritoriesByRegionService) {}

  @Get()
  async findAll(): Promise<TerritoriesByRegion[]> {
    return this.service.findAll();
  }
}
