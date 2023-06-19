import { Component } from '@angular/core';

@Component({
  selector: 'template-card',
  // templateUrl: './template-card.component.html',
  template: '<h1>Hello {{name}}</h1>',
  styleUrls: ['./template-card.component.css']
})
export class TemplateCardComponent {
  public name: string = 'Hritik';
}
