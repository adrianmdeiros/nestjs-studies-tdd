import { Test, TestingModule } from '@nestjs/testing';
import { TeamsService } from '../teams.service';
import { Player } from '../../players/player.entity';
import { Stadium } from '../../stadiums/stadium.entity';
import { Team } from '../team.entity';
import { Championship } from '../../championship/championship.entity';
import { Match } from '../../matches/match.entity';

describe('TeamsService', () => {
  let service: TeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamsService],
    }).compile();

    service = module.get<TeamsService>(TeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate players height average', () => {
    const players: Player[] = [
      new Player('Adrian', new Date('2000-11-22'), 'M', 1.70),
      new Player('Bruno', new Date('1998-05-15'), 'M', 1.80),
      new Player('Leo', new Date('1998-05-15'), 'M', 1.60),
      new Player('Ney', new Date('1998-05-15'), 'M', 1.72),
    ];

    const mockAverage = players.reduce((sum, player) => sum + player.getHeight(), 0) / players.length

    const playersHeightAverage = service.getPlayersHeightAverage(players)
    expect(playersHeightAverage).toEqual(mockAverage)
  })

  it('should create a match', () => {
    const morumbis = new Stadium(1, 'Morumbis', 'São Paulo')
    const maracana = new Stadium(2, 'Maracanã', 'Rio de Janeiro')
    const saoPaulo = new Team(1, 'São Paulo', morumbis)
    const flamengo = new Team(2, 'Flamengo', maracana)
    const teams: Team[] = [
      saoPaulo,
      flamengo
    ]
    const brasileirao = new Championship(1, 2025, 'Brasileirao Serie A', teams)
    const match = new Match(1, new Date('2025-10-20'), saoPaulo, flamengo, brasileirao)

    expect(match.getDate()).toStrictEqual(new Date('2025-10-20'))
    expect(match.getHomeTeam()).toBe(saoPaulo)
    expect(match.getAwayTeam()).toBe(flamengo)
    expect(match.getChampionship()).toBe(brasileirao)

  })
});
