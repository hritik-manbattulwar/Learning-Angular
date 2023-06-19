import { Component } from '@angular/core';

@Component({
  selector: 'amount-range',
  templateUrl: './amount-range.component.html',
  styleUrls: ['./amount-range.component.css']
})
export class AmountRangeComponent {
  public amount: number = 5000;
  public tax: number = 10;
}
