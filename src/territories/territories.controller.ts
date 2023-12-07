import { Controller, Get, Param } from '@nestjs/common';
import { TerritoriesService } from './territories.service';
import { Territory } from './territory.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Territories')
@Controller('territories')
export class TerritoriesController {
  constructor(private readonly territoriesService: TerritoriesService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Territory | null> {
    return this.territoriesService.findOne(id);
  }

  @Get()
  findAll(): Promise<Territory[]> {
    return this.territoriesService.findAll();
  }

  @Get(':id/territories/count')
  countTerritoriesByRegion(@Param('id') id: number): Promise<number> {
    return this.territoriesService.countTerritoriesByRegion(id);
  }

  @Get('count/regions')
  countTerritoriesByRegions(): Promise<any> {
    return this.territoriesService.countTerritoriesByRegions();
  }
}
