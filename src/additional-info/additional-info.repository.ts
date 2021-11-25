import { EntityRepository, Repository } from "typeorm";
import { AdditionalInfoEntity } from "./additional-info.entity";

@EntityRepository(AdditionalInfoEntity)
export class AdditionalInfoRepository extends Repository<AdditionalInfoEntity> {}