import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {


  public person: {
    id?: '',
    name?: '',
    username?: '',
    email?: '',
    phone?: ''
  } = {};

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.fetchDetails()
  }

  fetchDetails() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users/1').subscribe((res) => {
      console.log(res)
      this.person = res
    })
  }

}
