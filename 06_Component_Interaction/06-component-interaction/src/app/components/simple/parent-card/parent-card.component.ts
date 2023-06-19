import { Component } from '@angular/core';

@Component({
  selector: 'parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.css']
})
export class ParentCardComponent {
public parentData: string="Hello From Parent";
public cData: string=" ";
}
