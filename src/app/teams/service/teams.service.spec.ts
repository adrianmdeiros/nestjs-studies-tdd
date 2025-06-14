import { Test, TestingModule } from '@nestjs/testing';
import { Player } from '../../players/model/player.entity';
import { Stadium } from 'src/app/stadiums/model/stadium.entity';
import { Team } from '../model/team.entity';
import { TeamsService } from './teams.service';


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

    const mockAverage = players.reduce((sum, player) => sum + player.height, 0) / players.length

    const playersHeightAverage = service.getPlayersHeightAverage(players)
    expect(playersHeightAverage).toEqual(mockAverage)
  })

  it('should add and remove a player from a team and correctly update the team players list.', () => {
    const morumbis = new Stadium(1, 'Morumbis', 'São Paulo')
    const saoPaulo = new Team(1, 'São Paulo', morumbis)
    const cr7 = new Player('Cristiano Ronaldo', new Date('1985-02-05'), 'M', 1.87, '1')
    const flavioCacaRato = new Player('Flávio Caça Rato', new Date('1986-06-29'), 'M', 1.75,'2')

    service.addPlayerToTeam(cr7, saoPaulo)
    expect(saoPaulo.players[0]).toBe(cr7)

    service.addPlayerToTeam(flavioCacaRato, saoPaulo)
    expect(saoPaulo.players[0]).toBe(cr7)
    expect(saoPaulo.players[1]).toBe(flavioCacaRato)
    
    service.removePlayerFromTeam('2', saoPaulo)
    expect(saoPaulo.players.find(p => p.id === '2')).toBeUndefined();
  })

});
