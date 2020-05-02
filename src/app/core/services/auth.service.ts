import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storage, StorageItem } from '@core/storages/capacitor';
import { environment } from '@env/environment';
import { Login } from '@app/shared/models/login.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Register } from '@app/shared/models/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ENDPOINT = environment.API_REST.concat(environment.API_PATH);
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private currentUserSubject: BehaviorSubject<any>;
  currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    storage.get('user').then((s) => {
      console.log(s);
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(s));
      this.currentUser = this.currentUserSubject.asObservable();
    });
  }

  /**
   *
   */
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(login: Login): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.ENDPOINT.concat('/sessions'), login, httpOptions);
  }

  saveLoginStorage(session): void {
    storage.set({ key: 'user', value: JSON.stringify(session) } as StorageItem);
  }

  register(register: Register) {
    let o = {
      headers: this.headers,
    };
    return this.http.post(this.ENDPOINT.concat('/registers'), register, o);
  }

  /**
   * Confirmation login token
   *
   * @param confirm
   */
  confirmation(confirm: any) {
    console.log(JSON.stringify(confirm));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put(this.ENDPOINT.concat('/confirmation'), confirm, httpOptions);
  }

  logout() {
    // remove user from local storage to log user out
    storage.remove('user');
    this.currentUserSubject.next(null);
  }
}
