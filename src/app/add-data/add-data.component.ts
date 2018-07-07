import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tax } from './tax';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  tax: Tax = new Tax();
  Years = [2015, 2016, 2017, 2018];

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  calculateTax(superAnnuation, income, gross, year) {
    const body = {
      superAnnuation: superAnnuation,
      income: income,
      gross: gross,
      year: year,
    };
    console.log(body);
}

  onSubmit() {
    console.log(this.tax);
    this.api.submitData(this.tax)
      .subscribe((result) => {
        console.log(result);
        this.router.navigate(['dash']);
      });
    }

}
