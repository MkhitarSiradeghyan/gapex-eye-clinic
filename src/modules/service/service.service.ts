import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { ServiceTranslation } from './entities/service-translation.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
    @InjectRepository(ServiceTranslation)
    private translationRepository: Repository<ServiceTranslation>,
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(service);
  }

  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find({ relations: ['translations'] });
  }

  async findOne(id: number): Promise<Service | null> {
    return this.serviceRepository.findOne({
      where: { id },
      relations: ['translations'],
    });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto): Promise<Service | null> {
    await this.serviceRepository.update(id, updateServiceDto);
    return this.serviceRepository.findOne({
      where: { id },
      relations: ['translations'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}
