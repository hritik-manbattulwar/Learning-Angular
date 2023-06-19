import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent {
  @Input() clientData: string = '';
  @Output() sendData = new EventEmitter();
  public serverData: string = '';

  public sendTo(){
    this.sendData.emit(this.serverData)
  }
}
