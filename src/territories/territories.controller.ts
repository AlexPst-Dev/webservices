import { Controller, Get, Param } from '@nestjs/common';
import { TerritoriesService } from './territories.service';
import { Territory } from './territory.entity';

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
}
