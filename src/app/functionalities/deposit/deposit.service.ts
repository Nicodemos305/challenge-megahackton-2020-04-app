import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class DepositService {
  private ENDPOINT = environment.API_REST.concat(environment.API_PATH);
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      [environment.LOADING_HEADER]: 'true',
    }),
  };

  constructor(private http: HttpClient) {}

  depositFinancialAccount(deposit: { deposit: number }) {
    return this.http.put(
      this.ENDPOINT.concat('/depositFinancialAccount'),
      deposit,
      this.httpOptions
    );
  }
}
