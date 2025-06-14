import { Module } from '@nestjs/common';
import { MatchesController } from './controller/matches.controller';
import { MatchesService } from './service/matches.service';

@Module({
  controllers: [MatchesController],
  providers: [MatchesService],
})
export class MatchesModule {}
