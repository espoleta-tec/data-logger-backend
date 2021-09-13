import { Test, TestingModule } from '@nestjs/testing';
import { CommonServiceService } from './common-service.service';

describe('CommonServiceService', () => {
  let service: CommonServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonServiceService],
    }).compile();

    service = module.get<CommonServiceService>(CommonServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
