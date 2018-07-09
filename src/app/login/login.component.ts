import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.api.signIn(this.loginForm.value)
        .subscribe((token: any) => {
          if (token) {
            window.localStorage.setItem('token', token.token);
            this.router.navigate(['dash']);
          }
        });
    }
  }



}
