import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentCardComponent } from './components/simple/parent-card/parent-card.component';
import { ChildCardComponent } from './components/simple/child-card/child-card.component';
import { FormsParentCardComponent } from './components/forms-binding/forms-parent-card/forms-parent-card.component';
import { FormsChildCardComponent } from './components/forms-binding/forms-child-card/forms-child-card.component';
import { FormsModule } from '@angular/forms';
import { ClientCardComponent } from './components/interaction/client-card/client-card.component';
import { ServerCardComponent } from './components/interaction/server-card/server-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentCardComponent,
    ChildCardComponent,
    FormsParentCardComponent,
    FormsChildCardComponent,
    ClientCardComponent,
    ServerCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
