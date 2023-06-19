import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmsComponent } from './components/sms/sms.component';
import { FormsModule } from '@angular/forms';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { ThemeComponent } from './components/theme/theme.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    SmsComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    ThemeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
