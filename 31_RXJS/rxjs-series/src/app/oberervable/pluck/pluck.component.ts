import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  public posts = [
    {
      "id": 1,
      "name": "Hritik",
      "gender": "Male",
      job: {
        title: "Full Stack Developer"
      }
    },
    {
      "id": 2,
      "name": "Atharva",
      "gender": "Male",
      job: {
        title: "React.js Developer"
      }
    },
    {
      "id": 3,
      "name": "Laxmi",
      "gender": "Female",
      job: {
        title: "SDET"
      }
    },
    {
      "id": 4,
      "name": "Krushna",
      "gender": "Male",
      job: {
        title: "Operations"
      }
    },
    {
      "id": 5,
      "name": "Nilay",
      "gender": "Male",
      job: {
        title: "HR Manager"
      }
    }
  ]
  public data1: string[] = [];
  public data2: string[] = [];

  ngOnInit(): void {

    // Example 1
    from(this.posts)
      .pipe(
        // map(res => res.name),
        pluck('name'),
        toArray())
      .subscribe((res: string[] | any) => {
        this.data1 = res;
      })

    // Example 1
    from(this.posts)
      .pipe(
        // map(res => res.name),
        pluck('job', 'title'),
        toArray())
      .subscribe((res: string[] | any) => {
        this.data2 = res;
      })
  }
}
