import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storage } from '@core/storages/capacitor';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileUpdateService {
  private ENDPOINT = environment.API_REST.concat(environment.API_PATH);
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  profileUpdate(profile) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        [environment.LOADING_HEADER]: 'true',
      }),
    };
    return this.http.post(this.ENDPOINT.concat('/users'), profile, httpOptions);
  }
}
