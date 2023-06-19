import { Component } from '@angular/core';
import { IEmployee } from 'src/app/models/ICustomer';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.css'],
})
export class ContactAppComponent {
  public selectedEmployee: any | IEmployee;
}
