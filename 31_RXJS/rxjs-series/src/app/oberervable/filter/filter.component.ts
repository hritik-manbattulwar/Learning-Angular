import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

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
  public data1: any[] = [];
  public data2: any[] = [];
  public data3: any[] = [];

  ngOnInit(): void {

    // Example 1
    from(this.posts)
      .pipe(
        // map(res => res.name),
        filter(data => data.name.length > 5),
        toArray())
      .subscribe((res: any) => {
        console.log(res)
        this.data1 = res;
      })

    // Example 3
    from(this.posts)
      .pipe(
        // map(res => res.name),
        filter(data => data.gender === 'Male'),
        toArray())
      .subscribe((res: any) => {
        this.data2 = res;
      })
    // Example 2
    from(this.posts)
      .pipe(
        // map(res => res.name),
        filter(data => data.id <= 3),
        toArray())
      .subscribe((res: any) => {
        this.data3 = res;
      })
  }
}

