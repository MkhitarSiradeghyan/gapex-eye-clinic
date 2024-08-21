import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PersonnelTranslation } from './personnel-translation.entity';

@Entity()
export class Personnel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  role: string;

  @OneToMany(() => PersonnelTranslation, (translation) => translation.personnel, { cascade: true })
  translations: PersonnelTranslation[];
}
