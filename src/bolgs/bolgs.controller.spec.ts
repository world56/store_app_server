import { Test, TestingModule } from '@nestjs/testing';
import { BolgsController } from './bolgs.controller';

describe('Bolgs Controller', () => {
  let controller: BolgsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BolgsController],
    }).compile();

    controller = module.get<BolgsController>(BolgsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
