import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerritoriesService } from './territories.service';
import { TerritoriesController } from './territories.controller';
import { Territory } from './teritory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Territory])],
  providers: [TerritoriesService],
  controllers: [TerritoriesController],
})
export class TerritoriesModule {}
