import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

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

    source2.pipe(map(res => this.getData(res)), concatAll()).subscribe((res) => {
      this.designUtilityService.addVideo(res, 'elContainer2');
    })
    const source3 = from(['Tech', 'Comedy', 'News'])

    source3.pipe(concatMap(res => this.getData(res))).subscribe((res) => {
      this.designUtilityService.addVideo(res, 'elContainer3');
    })

  }

}