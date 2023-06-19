import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'employees-card',
  templateUrl: './employees-card.component.html',
  styleUrls: ['./employees-card.component.css']
})
export class EmployeesCardComponent {
  public employees: any[] = [];

  constructor(private employeeService: EmployeesService) {

  }
  public getData() {
    this.employeeService.fetchAllEmployees().subscribe((data) => {
      this.employees = data;
    })
  }
}
