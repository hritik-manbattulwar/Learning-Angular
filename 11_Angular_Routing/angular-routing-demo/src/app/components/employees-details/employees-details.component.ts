import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IEmployee } from 'src/app/models/IEmployee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {
  public employeeId: string | null = '';
  public selectedEmployee: IEmployee | any;
  constructor(private activatedRoute: ActivatedRoute,
    private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.employeeId = param.get('id');
    })

    this.employeeService.getEmployees().subscribe((data) => {
      let allEmployees: IEmployee[] = data;
      this.selectedEmployee = allEmployees.find(emloyee => emloyee.eid === this.employeeId);
    })
  }

}
