import { Module } from '@nestjs/common';
import { AdditionalInfoService } from './additional-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditionalInfoRepository } from './additional-info.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AdditionalInfoRepository])],
  providers: [AdditionalInfoService],
})
export class AdditionalInfoModule {}
