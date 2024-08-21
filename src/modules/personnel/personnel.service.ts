import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personnel } from './entities/personnel.entity';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';

@Injectable()
export class PersonnelService {
  constructor(
    @InjectRepository(Personnel)
    private readonly personnelRepository: Repository<Personnel>,
  ) {}

  create(createPersonnelDto: CreatePersonnelDto): Promise<Personnel> {
    const personnel = this.personnelRepository.create(createPersonnelDto);
    return this.personnelRepository.save(personnel);
  }

  findAll(): Promise<Personnel[]> {
    return this.personnelRepository.find({ relations: ['translations'] });
  }

  findOne(id: number): Promise<Personnel> {
    return this.personnelRepository.findOne({
      where: { id },
      relations: ['translations'],
    });
  }

  async update(id: number, updatePersonnelDto: UpdatePersonnelDto): Promise<Personnel> {
    await this.personnelRepository.update(id, updatePersonnelDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.personnelRepository.delete(id);
  }
}
