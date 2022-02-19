import { Test, TestingModule } from '@nestjs/testing';
import { PabrikService } from './pabrik.service';

describe('Pabrik', () => {
  let service: PabrikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PabrikService],
    }).compile();

    service = module.get<PabrikService>(PabrikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
