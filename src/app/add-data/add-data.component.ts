import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {SubmitIncomeDto} from './submit-income-dto';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  tax: SubmitIncomeDto = new SubmitIncomeDto();
  Years = [2012, 2013, 2014, 2015, 2016, 2017, 2018];
  gross: number;
  year: number;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  calculateTax(superAnnuation, income) {
    const body: SubmitIncomeDto = {
      email: 'demo2@email.com',
      superPercentage: parseFloat(superAnnuation),
      income: income,
      type: this.gross,
      year: this.year,
    };
    this.api.submitData(JSON.stringify(body))
      .subscribe((result) => {
        this.router.navigate(['dash']);
      });
  }

  onSelectGross(number) {
    this.gross = number;
  }

  onSelectYear(year) {
    this.year = year;
  }

}
