import { Test, TestingModule } from '@nestjs/testing';
import { RejestController } from './rejest.controller';
import { RejestService } from './rejest.service';

describe('RejestController', () => {
  let controller: RejestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RejestController],
      providers: [RejestService],
    }).compile();

    controller = module.get<RejestController>(RejestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
