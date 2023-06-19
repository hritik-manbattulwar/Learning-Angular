import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, of, switchMap, switchAll } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  getData(data: string) {
    return of(data + ' Videos').pipe(delay(2000))
  }

  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    const source1 = from(['Tech', 'Comedy', 'News'])

    source1.pipe(map(res => this.getData(res))).subscribe((res) => {
      this.designUtilityService.addVideo(res, 'elContainer1');
    })

    const source2 = from(['Tech', 'Comedy', 'News'])

    source2.pipe(map(res => this.getData(res)), switchAll()).subscribe((res) => {
      this.designUtilityService.addVideo(res, 'elContainer2');
    })
    const source3 = from(['Tech', 'Comedy', 'News'])

    source3.pipe(switchMap(res => this.getData(res))).subscribe((res) => {
      this.designUtilityService.addVideo(res, 'elContainer3');
    })

  }

}
