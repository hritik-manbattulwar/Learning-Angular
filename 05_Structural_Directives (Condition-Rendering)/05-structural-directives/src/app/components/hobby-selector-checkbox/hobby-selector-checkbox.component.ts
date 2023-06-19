import { Component } from '@angular/core';

@Component({
  selector: 'hobby-selector-checkbox',
  templateUrl: './hobby-selector-checkbox.component.html',
  styleUrls: ['./hobby-selector-checkbox.component.css']
})
export class HobbySelectorCheckboxComponent {
  public eating: boolean = false;
  public coding: boolean = false;
  public sleeping: boolean = false;

  /* public changeEvent(event:any): void{
    [event.target.name]=[event.target.value]
  } */
}
