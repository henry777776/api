import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  update(id: number, employee: any) {
    const index = this.employee.findIndex((emp) => emp.id === id);
    if (index === -1) 
      return null;
    }
  private employee = [
    { id: 1, name: 'henry santoxs', email: 'henry@email.com' },
    { id: 2, name: 'glock dezenove', email: 'clockdezenove@email.com' },
  ];

  findAll() {
    return this.employee;
  }

  findOne(id: number) {
    return this.employee.find((employee) => employee.id === id);
  }

  create(employee: any) {
    const newemployee = { id: Date.now(), ...employee };
    this.employee.push(newemployee);
    return newemployee;
  }

  remove(id: number) {
    this.employee = this.employee.filter((employee) => employee.id !== id);
    return { deleted: true };
  }
}