import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class employeeController {
  constructor(private readonly EmployeeService: EmployeeService) {}

  @Get()
  findAll() {
    return this.EmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.EmployeeService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.EmployeeService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EmployeeService.remove(Number(id));
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.EmployeeService.update(Number(id), body);
  }
}