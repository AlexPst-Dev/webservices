import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './region.entity';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Region)
    private RegionsRepository: Repository<Region>,
  ) {}

  findAll(): Promise<Region[]> {
    return this.RegionsRepository.find();
  }

  async findOne(id: number): Promise<Region | null> {
    return await this.RegionsRepository.findOne({
      where: {
        RegionId: id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.RegionsRepository.delete(id);
  }
}
