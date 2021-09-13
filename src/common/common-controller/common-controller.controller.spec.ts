import { Test, TestingModule } from '@nestjs/testing';
import { CommonControllerController } from './common-controller.controller';

describe('CommonControllerController', () => {
  let controller: CommonControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonControllerController],
    }).compile();

    controller = module.get<CommonControllerController>(CommonControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
