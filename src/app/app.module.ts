import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { ChampionshipsModule } from './championships/championships.module';
import { MatchesModule } from './matches/matches.module';
import { ResultsModule } from './results/results.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    PlayersModule,
    ChampionshipsModule,
    MatchesModule,
    ResultsModule,
    StadiumsModule,
    TeamsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
