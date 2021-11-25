import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCategoryDto {
  @Field() readonly name: string;
}
