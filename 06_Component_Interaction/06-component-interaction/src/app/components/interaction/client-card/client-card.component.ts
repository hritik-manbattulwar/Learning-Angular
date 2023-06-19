import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent {
  public cData: string = '';
  @Input() serverData: string = '';
  @Output() sendData = new EventEmitter();

  public sendTo() {
    this.sendData.emit(this.cData)
  }
}
