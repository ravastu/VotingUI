
import { Component, OnInit } from  '@angular/core';

import { Observable } from  "rxjs/Observable";

import { HttpClient } from  "@angular/common/http";


class Option {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VotingUI';

  optionsObservable: Observable<Option[]>;

  constructor(private  httpClient: HttpClient ) {}

  ngOnInit(){
    this.optionsObservable = this.httpClient
      .get<Option[]>('localhost:8080/options')
      .do(console.log);
  }

}
