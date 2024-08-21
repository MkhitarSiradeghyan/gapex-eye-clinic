import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Service } from './service.entity';

@Entity()
export class ServiceTranslation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  language: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => Service, (service) => service.translations)
  service: Service;
}
