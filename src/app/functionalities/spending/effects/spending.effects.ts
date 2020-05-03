import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromRoot from '@core/store/reducers';
import { NavController, ModalController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map } from 'rxjs/operators';
import * as SpendingActions from '../actions/spending.actions';
import { Spending } from '../spending.model';
import { SpendingService } from '../spending.service';
import { showToast } from '@app/core/store/actions/overlay.actions';

@Injectable()
export class SpendingEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private service: SpendingService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) {}

  listSpending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpendingActions.listSpending),
      exhaustMap(() => {
        return this.service.list().pipe(
          map((resultado) => {
            return SpendingActions.successListSpending({ resultado });
          })
        );
      })
    )
  );

  createSpending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpendingActions.createSpending),
      exhaustMap((action) => {
        return this.service.create(action.spending).pipe(
          map((resultado) => {
            this.modalCtrl.dismiss();
            this.store.dispatch(
              showToast({
                overlayOptions: {
                  message: 'Despesa cadastrada!',
                },
              })
            );
            return SpendingActions.listSpending();
          })
        );
      })
    )
  );

  deleteSpendingById = createEffect(() =>
    this.actions$.pipe(
      ofType(SpendingActions.deleteSpendingById),
      exhaustMap((action) => {
        return this.service.deleteById(action.id).pipe(
          map((resultado) => {
            this.store.dispatch(
              showToast({
                overlayOptions: {
                  message: 'Despesa excluída',
                },
              })
            );
            return SpendingActions.listSpending();
          })
        );
      })
    )
  );
}
