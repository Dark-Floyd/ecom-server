import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateAdditionalInfoDto {
  @Field() readonly title: string;
  @Field() readonly description: string;
}
