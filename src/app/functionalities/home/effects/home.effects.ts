import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromRoot from '@core/store/reducers';
import { Injectable } from '@angular/core';
import { update, updateHomePage } from '../actions/home.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private store: Store<fromRoot.State>) {}

  updateHome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(update),
        tap((action) => this.store.dispatch(updateHomePage({ page: action.page })))
      ),
    { dispatch: false }
  );
}
