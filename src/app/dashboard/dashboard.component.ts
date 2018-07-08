import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['year', 'income', 'superPercentage', 'super', 'gross', 'type', 'tax', 'net', 'netPlusSuper'];

  dataSource;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.api.getData()
      .subscribe((data: any) => {
        this.dataSource = data[0].taxData;
      });
  }

}
