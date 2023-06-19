import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IEmployee } from 'src/app/models/ICustomer';
import { EmployeesService } from 'src/app/services/Employees/employees.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  public employees: IEmployee[] = [];
  public errorMessage: string = '';
  @Output() sendData = new EventEmitter();

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.fetchAllEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  public sendSelectedEmployee(selectedEmployee: IEmployee) {
    this.sendData.emit(selectedEmployee);
  }
}
