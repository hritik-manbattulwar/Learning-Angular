import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

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

    source2.pipe(map(res => this.getData(res)), mergeAll()).subscribe((res) => {
      this.designUtilityService.addVideo(res, 'elContainer2');
    })
    const source3 = from(['Tech', 'Comedy', 'News'])

    source3.pipe(mergeMap(res => this.getData(res))).subscribe((res) => {
      this.designUtilityService.addVideo(res, 'elContainer3');
    })

  }

}
