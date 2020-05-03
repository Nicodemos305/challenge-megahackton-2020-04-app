import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromRoot from '@core/store/reducers';
import { NavController, ModalController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map } from 'rxjs/operators';
import * as GoalsActions from '../actions/goals.actions';
import { Spending } from '../goals.model';
import { SpendingService } from '../goals.service';
import { showToast } from '@app/core/store/actions/overlay.actions';

@Injectable()
export class GoalsEffects {
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
      ofType(GoalsActions.listGoals),
      exhaustMap(() => {
        return this.service.list().pipe(
          map((resultado) => {
            return GoalsActions.successListGoal({ resultado });
          })
        );
      })
    )
  );

  createSpending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.createGoal),
      exhaustMap((action) => {
        return this.service.create(action.goal).pipe(
          map((resultado) => {
            this.modalCtrl.dismiss();
            this.store.dispatch(
              showToast({
                overlayOptions: {
                  message: 'Objetivo cadastrado!',
                },
              })
            );
            return GoalsActions.listGoals();
          })
        );
      })
    )
  );

  updateSpending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.updateGoal),
      exhaustMap((action) => {
        return this.service.update(action.goal).pipe(
          map((resultado) => {
            this.modalCtrl.dismiss();
            this.store.dispatch(
              showToast({
                overlayOptions: {
                  message: 'Objetivo atualizado!',
                },
              })
            );
            return GoalsActions.listGoals();
          })
        );
      })
    )
  );

  deleteSpendingById = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.deleteGoalById),
      exhaustMap((action) => {
        return this.service.deleteById(action.id).pipe(
          map((resultado) => {
            this.store.dispatch(
              showToast({
                overlayOptions: {
                  message: 'Objetivo excluído',
                },
              })
            );
            return GoalsActions.listGoals();
          })
        );
      })
    )
  );
}
