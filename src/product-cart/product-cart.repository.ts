import { EntityRepository, Repository } from "typeorm";
import { ProductCartEntity } from "./product-cart.entity";

@EntityRepository(ProductCartEntity)
export class ProductCartRepository extends Repository<ProductCartEntity> {}