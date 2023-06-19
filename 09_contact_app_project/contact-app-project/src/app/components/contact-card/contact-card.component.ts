import { Component, Input } from '@angular/core';
import { IEmployee } from 'src/app/models/ICustomer';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent {
  @Input() employee: any | IEmployee;
}
