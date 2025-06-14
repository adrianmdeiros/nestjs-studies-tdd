import { Module } from '@nestjs/common';
import { ChampionshipController } from './controller/championships.controller';
import { ChampionshipService } from './service/championships.service';

@Module({
  controllers: [ChampionshipController],
  providers: [ChampionshipService],
})
export class ChampionshipsModule {}
