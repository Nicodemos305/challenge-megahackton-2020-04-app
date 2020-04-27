import { Injectable } from '@angular/core';
import { OverlayService } from '@app/core/services/overlay.service';
import * as fromRoot from '@core/store/reducers';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, tap } from 'rxjs/operators';
import { show } from '../actions/overlay.actions';

@Injectable()
export class OverlayEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private overlayService: OverlayService
  ) {}

  /**
   * Show messages
   */
  show$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(show),
        exhaustMap((action) =>
          this.overlayService.show(action.overlay).pipe(tap((o) => o.present()))
        )
      ),
    { dispatch: false }
  );
}
