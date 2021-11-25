import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { SellerEntity } from "./seller.entity";

@Injectable()
@EntityRepository(SellerEntity)
export class SellerRepository extends Repository<SellerEntity> {}