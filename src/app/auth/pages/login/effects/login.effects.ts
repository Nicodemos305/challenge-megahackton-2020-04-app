import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as LoginActions from '../actions/login.action';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, last } from 'rxjs/operators';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private router: Router
  ) {}

  loginLayout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginLayout),
        tap(() => this.store.dispatch(LoginActions.showLoginLayout()))
      ),
    { dispatch: false }
  );

  registerLayout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.registerLayout),
        tap(() => this.store.dispatch(LoginActions.showRegisterLayout()))
      ),
    { dispatch: false }
  );
}
