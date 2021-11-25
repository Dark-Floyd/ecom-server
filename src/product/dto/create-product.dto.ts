
import { CategoryEntity } from 'src/category/category.entity'
import { SellerEntity } from 'src/seller/seller.entity'
import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class CreateProductDto {
	@Field() readonly id: number
	@Field() readonly description: string
	@Field() readonly price: number
	@Field() readonly images: string[]
	@Field() readonly name: string
    @Field() readonly category: CategoryEntity
   	@Field() readonly seller: SellerEntity
    @Field() readonly uploadedDate: Date
    // additional info?
}



