import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { PlayersRepository } from './players.repository';
import { PrismaTestTransaction } from '../../utils/prisma-test-transaction';

describe('PlayersRepository', () => {
  let prisma: PrismaClient;
  let repository: PlayersRepository;
  let trsc: PrismaTestTransaction

  beforeAll(async () => {
    prisma = new PrismaClient();
    trsc = new PrismaTestTransaction(prisma)
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayersRepository,
        { provide: PrismaClient, useValue: prisma },
      ],
    }).compile();

    repository = module.get<PlayersRepository>(PlayersRepository);
  });

  beforeEach(async () => {
    await trsc.start()
  })

  afterEach(async () => {
    await trsc.rollback()
  })

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should correctly save a player at db', async () => {
    const player = {
      name: 'Adrian',
      birth: '2000-11-22',
      gender: 'M' as const,
      height: 1.70
    };

    const savedPlayer = await repository.save(player);

    expect(savedPlayer.id).toBeDefined();
    expect(savedPlayer.name).toBe('Adrian');
  });

  it('should find player by name', async () => {
    const player = {
      name: 'Adrian',
      birth: '2000-11-22',
      gender: 'M' as const,
      height: 1.70
    };
    const player2 = {
      name: 'Cristiano Ronaldo',
      birth: '1985-02-05',
      gender: 'M' as const,
      height: 1.87
    };
    const player3 = {
      name: 'Flávio Caça Rato',
      birth: '1986-06-29',
      gender: 'M' as const,
      height: 1.75
    };

    await repository.save(player);
    await repository.save(player2);
    await repository.save(player3);

    const playerByName = await repository.findByName('Rato')

    expect(playerByName?.name).toBe('Flávio Caça Rato')
  })

});
