import { Test, TestingModule } from '@nestjs/testing';
import { PabrikController } from './pabrik.controller';

describe('Controllers Controller', () => {
  let controller: PabrikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PabrikController],
    }).compile();

    controller = module.get<PabrikController>(PabrikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
