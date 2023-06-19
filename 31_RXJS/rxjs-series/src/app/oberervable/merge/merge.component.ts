import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {


  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map(data => 'TechVideo #' + (data + 1)), take(5));
    const sourceComedy = interval(6000).pipe(map(data => 'ComedyVideo #' + (data + 1)), take(3));
    const sourceNews = interval(3500).pipe(map(data => 'NewsVideo #' + (data + 1)), take(4));

    const finalObs = merge(sourceTech, sourceComedy, sourceNews)

    finalObs.subscribe((data) => {
      this.designUtilityService.addVideo(data, 'elContainer1')
    })
  }

}