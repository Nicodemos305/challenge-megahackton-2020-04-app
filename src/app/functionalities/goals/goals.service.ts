import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Spending } from './goals.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpendingService {
  private ENDPOINT = environment.API_REST.concat(environment.API_PATH);
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      [environment.LOADING_HEADER]: 'true',
    }),
  };

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(this.ENDPOINT.concat('/goals'), this.httpOptions);
  }

  deleteById(_id: String) {
    return this.http.delete(this.ENDPOINT.concat(`/goals?_id=${_id}`), this.httpOptions);
  }

  create(spending: Spending) {
    return this.http.post(this.ENDPOINT.concat(`/goals`), spending, this.httpOptions);
  }

  update(spending: Spending) {
    return this.http.put(this.ENDPOINT.concat(`/goals`), spending, this.httpOptions);
  }
}
