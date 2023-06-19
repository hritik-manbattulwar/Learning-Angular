import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildCardComponent {
  @Input() pData: string = " ";
  @Output() sendData = new EventEmitter();
  public childData: string = "From Child Component";

  public sendTo() {
    this.sendData.emit(this.childData)
  }
}
