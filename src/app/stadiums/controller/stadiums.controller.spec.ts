import { Test, TestingModule } from '@nestjs/testing';
import { StadiumsController } from '../controller/stadiums.controller';

describe('StadiumController', () => {
  let controller: StadiumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StadiumsController],
    }).compile();

    controller = module.get<StadiumsController>(StadiumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
