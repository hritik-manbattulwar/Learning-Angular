import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IUser } from 'src/app/models/IUser';
import { State } from 'src/app/reducers';
import * as registerReducer from './reducers/register.reducer';
import * as registerActions from './actions/register.actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: IUser = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private store: Store<State>) { }

  ngOnInit(): void { }

  public register() {
    this.store.dispatch(registerActions.registerUser({ user: this.user }));
  }
}
