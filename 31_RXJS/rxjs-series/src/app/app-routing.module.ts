import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { OberervableComponent } from './oberervable/oberervable.component';
import { FromEventComponent } from './oberervable/from-event/from-event.component';
import { ListComponent } from './oberervable/list/list.component';
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
import { DebounceTimeComponent } from './oberervable/debounce-time/debounce-time.component';
import { MergeComponent } from './oberervable/merge/merge.component';
import { ConcatComponent } from './oberervable/concat/concat.component';
import { MergeMapComponent } from './oberervable/merge-map/merge-map.component';
import { ConcatMapComponent } from './oberervable/concat-map/concat-map.component';
import { SwitchMapComponent } from './oberervable/switch-map/switch-map.component';
import { ForkJoinComponent } from './oberervable/fork-join/fork-join.component';
import { HandleThrowErrorComponent } from './oberervable/handle-throw-error/handle-throw-error.component';
const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: OberervableComponent, children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'debounce-time', component: DebounceTimeComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge-map', component: MergeMapComponent },
      { path: 'concat-map', component: ConcatMapComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'fork-join', component: ForkJoinComponent },
      { path: 'catch-throw-error', component: HandleThrowErrorComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
