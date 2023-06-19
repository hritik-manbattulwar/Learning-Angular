import { Component } from '@angular/core';
import { Persons } from 'src/app/models/Persons';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  public persons: any[] = Persons;
}
