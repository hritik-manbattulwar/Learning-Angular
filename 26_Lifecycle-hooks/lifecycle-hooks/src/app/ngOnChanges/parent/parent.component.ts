import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  private myNumber: number = 50;
  name: string = 'codeheist';
  get counter() {
    return this.myNumber;
  }
  set counter(value: number) {
    this.myNumber = value;
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  changeName() {
    this.name = 'Hritik';
  }
}
