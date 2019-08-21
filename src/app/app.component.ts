import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Zeeds CV';
  items = [];
  cvdata: any;

  constructor(private http: HttpClient) {
    this.http.get('../../assets/cvdata.json').subscribe(data => {
      this.cvdata = data;
    });
  }
}


