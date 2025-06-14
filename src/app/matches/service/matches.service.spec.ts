import { Test, TestingModule } from '@nestjs/testing';
import { Championship } from '../../championships/model/championship.entity';
import { Stadium } from '../../stadiums/model/stadium.entity';
import { Match } from '../model/match.entity';
import { Team } from 'src/app/teams/model/team.entity';
import { MatchesService } from './matches.service';

describe('MatchesService', () => {
  let service: MatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchesService],
    }).compile();

    service = module.get<MatchesService>(MatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a match.', () => {
    const morumbis = new Stadium(1, 'Morumbis', 'São Paulo')
    const maracana = new Stadium(2, 'Maracanã', 'Rio de Janeiro')
    const saoPaulo = new Team(1, 'São Paulo', morumbis)
    const flamengo = new Team(2, 'Flamengo', maracana)
    const teams: Team[] = [
      saoPaulo,
      flamengo
    ]
    const brasileirao = new Championship(1, 2025, 'Brasileirao Serie A', teams)
    const match = new Match(1, new Date('2025-10-20'), saoPaulo, flamengo, morumbis, brasileirao)

    expect(match.date).toStrictEqual(new Date('2025-10-20'))
    expect(match.homeTeam).toBe(saoPaulo)
    expect(match.awayTeam).toBe(flamengo)
    expect(match.championship).toBe(brasileirao)
  })

  it('should verify if match stadium is from home team or away team.', () => {
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

    const matchStadiumSide = service.isMatchStadiumHomeOrAway(match)

    expect(matchStadiumSide).toBe('Home')
  })

});
