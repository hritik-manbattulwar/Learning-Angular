import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  public employees: any[] = [];
  constructor(private employeeService: EmployeesService) {

  }

  ngOnInit(): void {
    this.employeeService.fetchAllEmployees().subscribe((data) => {
      this.employees = data;
    })
  }

}
