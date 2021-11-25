import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateSellerDto {
  @Field() readonly name: string;
}
