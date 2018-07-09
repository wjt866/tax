import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Auth Api services

  signIn(credentials) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      `${environment.apiEndpoint}/auth`,
      {credentials},
      { headers }
    );
  }

  // Tax Api Service

  submitData(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      `${environment.apiEndpoint}/tax-records`,
      data,
      { headers }
    );
  }

  getData() {
    return this.http.get(
      `${environment.apiEndpoint}/tax-records`
    );
  }


}
