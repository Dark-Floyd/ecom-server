
import { ProductCartEntity } from 'src/product-cart/product-cart.entity'
import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class CreateCartDto {
	@Field() readonly id: number
	@Field() readonly productCart: ProductCartEntity
	
}



