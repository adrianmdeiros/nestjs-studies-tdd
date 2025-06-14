import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Testes da atividade
  it("should calculate player's age correctly based on his date of birth", () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-05-15'))
    const dto = {
      name: 'Adrian',
      birth: '2000-11-22',
      gender: 'M',
      height: 1.70
    } as const

    const createdPlayer = service.create(dto)
    const playerAge = createdPlayer.getAge()

    expect(playerAge).toBe(24)
  })

  it('should create a valid player with success', () => {
    const dto = {
      name: 'Adrian',
      birth: '2000-11-22',
      gender: 'M',
      height: 1.70
    } as const
    const createdPlayer = service.create(dto)

    expect(createdPlayer.name).toBe('Adrian')
    expect(createdPlayer.height).toBe(1.70)
  })

  it('should throw an exception when date of birth is invalid', () => {
    const dto = {
      name: 'Adrian',
      birth: '0000-00-00',
      gender: 'M',
      height: 1.70
    } as const

    expect(() => service.create(dto)).toThrow('Invalid date of birth.')
  })

  it('should throw an exeption when height is invalid', () => {
    const dto = {
      name: 'Adrian',
      birth: '2000-11-22',
      gender: 'M',
      height: -1.70
    } as const

    expect(() => service.create(dto)).toThrow('Invalid height.')
  })


});
