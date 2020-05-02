import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  CanLoad,
  UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { take, tap, map } from 'rxjs/operators';
import * as LoginActions from '@func/login/actions/login.action';
import { Store } from '@ngrx/store';
import * as fromRoot from '@core/store/reducers/';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromRoot.State>
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthState(state.url);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const url = segments.map((segment) => `/${segment}`).join('');
    return this.checkAuthState(url).pipe(take(1));
  }

  private checkAuthState(redirect?: String): Observable<boolean> {
    console.log(this.authService.currentUser);
    return this.store.pipe(
      map(() => this.authService.currentUser != null),
      map((authed) => {
        console.log('authed', authed);
        if (!authed) {
          this.store.dispatch(LoginActions.loginRedirect());
          return false;
        }

        return authed;
      }),
      take(1)
    );
  }
}
