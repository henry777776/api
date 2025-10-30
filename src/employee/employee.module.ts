import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { employeeController } from './employee.controller';

@Module({
  providers: [EmployeeService],
  controllers: [employeeController]
})
export class EmployeeModule {}
