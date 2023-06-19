import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'forms-child-card',
  templateUrl: './forms-child-card.component.html',
  styleUrls: ['./forms-child-card.component.css']
})
export class FormsChildCardComponent {
  @Input() pData: string = '';
  @Output() sendData = new EventEmitter()
  public cData: string = '';

  public sendTo() {
    this.sendData.emit(this.cData)
  }
}
