import { Module } from '@nestjs/common';
import { TeamsController } from './controller/teams.controller';
import { TeamsService } from './service/teams.service';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
