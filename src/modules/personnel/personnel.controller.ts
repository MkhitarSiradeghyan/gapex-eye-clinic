import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { Personnel } from './entities/personnel.entity';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';

@Controller('personnel')
export class PersonnelController {
  constructor(private readonly personnelService: PersonnelService) {}

  @Post()
  create(@Body() createPersonnelDto: CreatePersonnelDto): Promise<Personnel> {
    return this.personnelService.create(createPersonnelDto);
  }

  @Get()
  findAll(): Promise<Personnel[]> {
    return this.personnelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Personnel> {
    return this.personnelService.findOne(+id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updatePersonnelDto: UpdatePersonnelDto): Promise<Personnel> {
    return this.personnelService.update(+id, updatePersonnelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.personnelService.remove(+id);
  }
}
