import { Module } from '@nestjs/common';
import { ChampionshipController } from './championships.controller';
import { ChampionshipService } from './championships.service';

@Module({
  controllers: [ChampionshipController],
  providers: [ChampionshipService],
})
export class ChampionshipsModule {}
