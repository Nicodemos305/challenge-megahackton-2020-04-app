import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private ENDPOINT = environment.API_REST.concat(environment.API_PATH);
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      [environment.LOADING_HEADER]: 'true',
    }),
  };

  constructor(private http: HttpClient) {}

  goalForecast() {
    return this.http.get(this.ENDPOINT.concat('/goalForecast'), this.httpOptions);
  }

  financialHistory() {
    return this.http.get(this.ENDPOINT.concat('/financialHistory'), this.httpOptions);
  }
}
