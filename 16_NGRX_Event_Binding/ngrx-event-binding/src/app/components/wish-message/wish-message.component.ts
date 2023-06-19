import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { sayGoodAfternoon, sayGoodEvening, sayGoodMorning } from './wish-message-actions';
@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {

  public message: string = ''

  constructor(private store: Store<{ wishReducer: { message: string } }>) { }

  ngOnInit(): void {
    this.store.pipe(select('wishReducer')).subscribe((state) => {
      this.message = state.message;
    })
  }

  public goodMorning() {
    this.store.dispatch(sayGoodMorning())
  }
  public goodAfternoon() {
    this.store.dispatch(sayGoodAfternoon())
  }
  public goodEvening() {
    this.store.dispatch(sayGoodEvening())
  }
}
