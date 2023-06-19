import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public messageOne: string = "GOOD MORNING";
  public messageTwo: string = "GOOD AFTERNOON";
  public messageThree: string = "GOOD EVENING";
}
