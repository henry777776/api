import { Test, TestingModule } from '@nestjs/testing';
import { employeeController } from './employee.controller';

describe('EmployeeController', () => {
  let controller: employeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [employeeController],
    }).compile();

    controller = module.get<employeeController>(employeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
