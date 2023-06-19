import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/IEmployee';
import { EmployeesService } from '../../services/employees.service';
import { StocksService } from 'src/app/stocks/services/stocks.service';
import { IStock } from 'src/app/stocks/models/IStock';
import {NgxSpinnerService} from 'ngx-spinner'
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  public employees : IEmployee[] = [];
  public stocks : IStock[] = [];
 
  constructor(private employeeService:EmployeesService, private stockService:StocksService,private ngxService:NgxSpinnerService){}
 
   ngOnInit(): void {
    this.ngxService.show();
     this.employeeService.getEmployees().subscribe((data)=>{
       this.employees=data;
       this.ngxService.hide();
     })
     this.stockService.getStocks().subscribe((data)=>{
      // this.ngxService.hide();
       this.stocks=data;
     })

   }
 
 }