import { Test, TestingModule } from '@nestjs/testing';
import { ChampionshipService } from '../championships.service';
import { Stadium } from '../../stadiums/stadium.entity';
import { Team } from '../../teams/team.entity';
import { Championship } from '../championship.entity';
import { Match } from '../../matches/match.entity';

describe('ChampionshipService', () => {
  let service: ChampionshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionshipService],
    }).compile();

    service = module.get<ChampionshipService>(ChampionshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an exception when team is already in the championship', () => {
    const morumbis = new Stadium(1, 'Morumbis', 'São Paulo')
    const maracana = new Stadium(2, 'Maracanã', 'Rio de Janeiro')
    const saoPaulo = new Team(1, 'São Paulo', morumbis)
    const flamengo = new Team(2, 'Flamengo', maracana)
    const teams: Team[] = [
      saoPaulo,
      flamengo
    ]
    const brasileirao = new Championship(1, 2025, 'Brasileirao Serie A', teams)

    const newTeam = new Team(1, 'São Paulo', morumbis)
    expect(() => { service.addTeamToChampionship(newTeam, brasileirao) }).toThrow('Team is already in this championship.')

  })

  it('should filter matches by date, stadium, teams, etc.', () => {
    const morumbis = new Stadium(1, 'Morumbis', 'São Paulo')
    const maracana = new Stadium(2, 'Maracanã', 'Rio de Janeiro')
    const saoPaulo = new Team(1, 'São Paulo', morumbis)
    const flamengo = new Team(2, 'Flamengo', maracana)
    const teams: Team[] = [
      saoPaulo,
      flamengo
    ]
    const brasileirao = new Championship(1, 2025, 'Brasileirao Serie A', teams)

    const matchesToAdd = [
      new Match(1, new Date('2025-10-20'), saoPaulo, flamengo, morumbis, brasileirao),
      new Match(2, new Date('2025-10-30'), flamengo, saoPaulo, maracana, brasileirao)
    ]
    matchesToAdd.forEach(match => {
      service.addMatchToChampionship(match, brasileirao)
    });
    const filterMatches = service.getFilteredMatches({ date: new Date('2025-10-20') }, brasileirao)
    expect(filterMatches).toEqual([matchesToAdd[0]])
  })

  it('should get matches by day.', () => {
    const morumbis = new Stadium(1, 'Morumbis', 'São Paulo')
    const maracana = new Stadium(2, 'Maracanã', 'Rio de Janeiro')
    const saoPaulo = new Team(1, 'São Paulo', morumbis)
    const flamengo = new Team(2, 'Flamengo', maracana)
    const teams: Team[] = [
      saoPaulo,
      flamengo
    ]
    const brasileirao = new Championship(1, 2025, 'Brasileirao Serie A', teams)

    const matchesToAdd = [
      new Match(1, new Date('2025-10-20'), saoPaulo, flamengo, morumbis, brasileirao),
      new Match(2, new Date('2025-10-20'), flamengo, saoPaulo, maracana, brasileirao),
    ]
    matchesToAdd.forEach(match => {
      service.addMatchToChampionship(match, brasileirao)
    });
    const matchesByDay = service.getFilteredMatches({ date: new Date('2025-10-20') }, brasileirao)
    expect(matchesByDay).toEqual(matchesToAdd)
    

  })

});
