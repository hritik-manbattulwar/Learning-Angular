import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;

  public increase() {
    this.counter = this.counter + 1;
  }
  public decrease() {
    this.counter = this.counter - 1 < 0 ? 0 : this.counter - 1;
  }
  public reset() {
    this.counter = 0;
  }
}
