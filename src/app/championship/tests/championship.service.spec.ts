import { Test, TestingModule } from '@nestjs/testing';
import { ChampionshipService } from '../championships.service';
import { Stadium } from '../../stadiums/stadium.entity';
import { Team } from '../../teams/team.entity';
import { Championship } from '../championship.entity';

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
    expect(() => { service.addTeam(newTeam, brasileirao) }).toThrow('Team is already in this championship.')

  })



});
