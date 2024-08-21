import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Personnel } from './personnel.entity';

@Entity()
export class PersonnelTranslation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  language: string;

  @Column({ type: 'text' })
  biography: string;

  @ManyToOne(() => Personnel, (personnel) => personnel.translations)
  personnel: Personnel;
}
