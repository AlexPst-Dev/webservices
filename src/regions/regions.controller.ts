import { Controller, Get, Param } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { Region } from './region.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Regions')
@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Region | null> {
    return this.regionsService.findOne(id);
  }

  @Get()
  findAll(): Promise<Region[]> {
    return this.regionsService.findAll();
  }
}
