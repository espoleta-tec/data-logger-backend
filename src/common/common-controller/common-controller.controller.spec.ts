import { Test, TestingModule } from "@nestjs/testing";
import { CommonControllerController } from "./common-controller.controller";
import { CommonServiceService } from "../common-service/common-service.service";
import { Request } from '@nestjs/common'

describe("CommonControllerController", () => {
  let controller: CommonControllerController<CommonServiceService<any>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonControllerController]
    }).compile();

    controller = module.get<CommonControllerController<CommonServiceService<any>>>(CommonControllerController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
