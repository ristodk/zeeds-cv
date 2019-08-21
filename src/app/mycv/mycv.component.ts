import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.css']
})
export class MycvComponent implements OnInit {

  items = [];
  cvdata: any;

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/cvdata.json').subscribe(data => {
      this.cvdata = data;
    });
  }

  ngOnInit() {
  }

}
