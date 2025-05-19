import { Test, TestingModule } from '@nestjs/testing';
import { ResultsService } from '../results.service';
import { Championship } from '../../championships/championship.entity';
import { Match } from '../../matches/match.entity';
import { Stadium } from '../../stadiums/stadium.entity';
import { Team } from '../../teams/team.entity';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultsService],
    }).compile();

    service = module.get<ResultsService>(ResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an exception when result is invalid.', () => {
    const morumbis = new Stadium(1, 'Morumbis', 'São Paulo')
    const maracana = new Stadium(2, 'Maracanã', 'Rio de Janeiro')
    const saoPaulo = new Team(1, 'São Paulo', morumbis) // home team
    const flamengo = new Team(2, 'Flamengo', maracana) // away team
    const teams: Team[] = [
      saoPaulo,
      flamengo
    ]
    const brasileirao = new Championship(1, 2025, 'Brasileirao Serie A', teams)
    const match = new Match(1, new Date('2025-10-20'), saoPaulo, flamengo, morumbis, brasileirao)
    const homeGoals = 4
    const awayGoals = -2

    expect(() => service.updateResult(homeGoals, awayGoals, match))
      .toThrow('Invalid result. Goals must be positive values.')
  })

});
