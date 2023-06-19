import { Component } from '@angular/core';

@Component({
  selector: 'msg-card',
  templateUrl: './msg-card.component.html',
  styleUrls: ['./msg-card.component.css']
})
export class MsgCardComponent {
  public username: string = '';
}
