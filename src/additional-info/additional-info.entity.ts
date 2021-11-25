import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('additional-info')
export class AdditionalInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 500 })
  title: string;

  @Column('varchar', { length: 500 })
  description: string;
}
