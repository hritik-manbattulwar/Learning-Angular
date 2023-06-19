import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/IEmployee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: IEmployee[] = [];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    })
  }

}
