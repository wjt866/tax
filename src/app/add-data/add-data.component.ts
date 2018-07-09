import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { ApiService } from '../api.service';
import {SubmitIncomeDto} from './submit-income-dto';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  addData: FormGroup;
  tax: SubmitIncomeDto = new SubmitIncomeDto();
  Years = [2012, 2013, 2014, 2015, 2016, 2017, 2018];
  gross: number;
  year: number;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addData = new FormGroup({
      super: new FormControl('9.5', [
        Validators.required,
        Validators.min(9.5),
      ]),
      income: new FormControl('', [
        Validators.required,
      ]),
      gross: new FormControl('', [
        Validators.required,
      ]),
      year: new FormControl('', [
        Validators.required,
      ])
    });
  }

  calculateTax() {
    if (this.addData.valid) {
      const body: SubmitIncomeDto = {
        email: 'demo2@email.com',
        superPercentage: +this.addData.value.super,
        income: +this.addData.value.income,
        type: +this.addData.value.gross,
        year: +this.addData.value.year,
      };
      this.api.submitData(JSON.stringify(body))
        .subscribe(() => {
          this.router.navigate(['dash']);
        });
    }

  }

}
