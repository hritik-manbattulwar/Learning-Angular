import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import * as hobbyReducer from './reducers/hobby.reducer';
import * as hobbyActions from './actions/hobby.actions';
@Component({
  selector: 'app-hobby-selector',
  templateUrl: './hobby-selector.component.html',
  styleUrls: ['./hobby-selector.component.css'],
})
export class HobbySelectorComponent implements OnInit {
  public eating: boolean = false;
  public coding: boolean = false;
  public sleeping: boolean = false;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(select(hobbyReducer.hobbyFeatureKey)).subscribe((state) => {
      (this.eating = state.eating),
        (this.coding = state.coding),
        (this.sleeping = state.sleeping);
    });
  }

  public changeEating() {
    this.store.dispatch(hobbyActions.checkEating());
  }
  public changeCoding() {
    this.store.dispatch(hobbyActions.checkCoding());
  }
  public changeSleeping() {
    this.store.dispatch(hobbyActions.checkSleeping());
  }
}
