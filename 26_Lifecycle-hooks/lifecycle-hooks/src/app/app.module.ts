import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './ngOnChanges/child/child.component';
import { ParentComponent } from './ngOnChanges/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }