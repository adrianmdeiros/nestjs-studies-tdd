import { Module } from '@nestjs/common';
import { StadiumsController } from './controller/stadiums.controller';
import { StadiumsService } from './service/stadiums.service';

@Module({
  controllers: [StadiumsController],
  providers: [StadiumsService],
})
export class StadiumsModule {}
