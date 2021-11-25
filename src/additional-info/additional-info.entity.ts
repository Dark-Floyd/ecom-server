import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('additional-info')
export class AdditionalInfoEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { length: 500 })
  title: string;

  @Field()
  @Column('varchar', { length: 500 })
  description: string;
}
