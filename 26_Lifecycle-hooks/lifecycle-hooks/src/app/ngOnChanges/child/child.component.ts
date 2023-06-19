import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  SimpleChange,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  private myNewNumber: number = 0;
  @Input() user: string = '';
  @Input()
  set myNumber(value: number) {
    this.myNewNumber = value;
  }

  get myNumber() {
    return this.myNewNumber;
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    const myNewNumberChange: SimpleChange = changes['myNumber'];
    console.log(
      'Previous Value - (ngOnChanges)',
      myNewNumberChange.previousValue
    );
    console.log(
      'Current Value - (ngOnChanges)',
      myNewNumberChange.currentValue
    );
  }

  ngOnInit(): void {
    console.log('OnInit', this.myNumber);
  }

  ngDoCheck(): void {
    debugger;
    // console.log(this.user);
  }
}
