import { Module } from '@nestjs/common';
import { PlayersController } from './controller/players.controller';
import { PlayersService } from './service/players.service';
import { PlayersRepository } from './repository/players.repository';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService, PlayersRepository],
})
export class PlayersModule {}
