import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './directives/custom.directive';
import { MyifDirective } from './custom-structural-directives/myif.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    MyifDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
