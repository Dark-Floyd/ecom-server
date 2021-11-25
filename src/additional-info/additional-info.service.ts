
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AdditionalInfoEntity } from './additional-info.entity'
import { AdditionalInfoRepository } from './additional-info.repository'
import { CreateAdditionalInfoDto } from './dto/additional-info.dto'

@Injectable()
export class AdditionalInfoService {
	constructor (@InjectRepository(AdditionalInfoRepository) private readonly AdditionalInfoRepository: AdditionalInfoRepository) {}

	async createAadditionalInfo(data: CreateAdditionalInfoDto): Promise<AdditionalInfoEntity> {
		let addInfo = new AdditionalInfoEntity()
		addInfo.description = data.description
        addInfo.title = data.title

		await this.AdditionalInfoRepository.save(addInfo)

		return addInfo
	}

	async getPokemons () {
		return await this.AdditionalInfoRepository.find()
	}
}