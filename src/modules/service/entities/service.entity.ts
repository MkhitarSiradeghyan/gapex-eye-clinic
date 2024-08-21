import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ServiceTranslation } from './service-translation.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => ServiceTranslation, (translation) => translation.service, { cascade: true })
  translations: ServiceTranslation[];
}
