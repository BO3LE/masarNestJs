import { Test, TestingModule } from '@nestjs/testing';
import { RejestService } from './rejest.service';

describe('RejestService', () => {
  let service: RejestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RejestService],
    }).compile();

    service = module.get<RejestService>(RejestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
