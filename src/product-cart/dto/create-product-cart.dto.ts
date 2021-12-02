
import { ProductEntity } from 'src/product/product.entity'
import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class CreateProductCartDto {
	@Field() readonly id: number
	@Field() readonly amount: number
    @Field() readonly product: ProductEntity
   	
}



