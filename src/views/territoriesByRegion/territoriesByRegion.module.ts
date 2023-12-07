import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerritoriesByRegion } from './territoriesByRegion.entity';
import { TerritoriesByRegionController } from './territoriesByRegion.controller';
import { TerritoriesByRegionService } from './territoriesByRegion.service';

@Module({
  imports: [TypeOrmModule.forFeature([TerritoriesByRegion])],
  providers: [TerritoriesByRegionService],
  controllers: [TerritoriesByRegionController],
})
export class ViewTerritoriesByRegionModule {}
