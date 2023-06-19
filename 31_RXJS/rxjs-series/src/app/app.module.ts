import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { LoadingBarModule, LoadingBar } from 'ngx-loading-bar'
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OberervableComponent } from './oberervable/oberervable.component';
import { PromiseComponent } from './promise/promise.component';
import { ListComponent } from './oberervable/list/list.component';
import { FromEventComponent } from './oberervable/from-event/from-event.component';
import { IntervalComponent } from './oberervable/interval/interval.component';
import { OfFromComponent } from './oberervable/of-from/of-from.component';
import { ToArrayComponent } from './oberervable/to-array/to-array.component';
import { CustomComponent } from './oberervable/custom/custom.component';
import { MapComponent } from './oberervable/map/map.component';
import { PluckComponent } from './oberervable/pluck/pluck.component';
import { FilterComponent } from './oberervable/filter/filter.component';
import { TapComponent } from './oberervable/tap/tap.component';
import { TakeComponent } from './oberervable/take/take.component';
import { RetryComponent } from './oberervable/retry/retry.component';
import { SubjectComponent } from './oberervable/subject/subject.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { DebounceTimeComponent } from './oberervable/debounce-time/debounce-time.component';
import { MergeComponent } from './oberervable/merge/merge.component';
import { ConcatComponent } from './oberervable/concat/concat.component';
import { MergeMapComponent } from './oberervable/merge-map/merge-map.component';
import { ConcatMapComponent } from './oberervable/concat-map/concat-map.component';
import { SwitchMapComponent } from './oberervable/switch-map/switch-map.component';
import { ForkJoinComponent } from './oberervable/fork-join/fork-join.component';
import { HandleThrowErrorComponent } from './oberervable/handle-throw-error/handle-throw-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OberervableComponent,
    PromiseComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    DebounceTimeComponent,
    MergeComponent,
    ConcatComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ForkJoinComponent,
    HandleThrowErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
