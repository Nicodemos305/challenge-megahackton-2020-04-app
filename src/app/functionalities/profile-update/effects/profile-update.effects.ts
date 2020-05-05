import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromRoot from '@core/store/reducers';
import { NavController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, tap } from 'rxjs/operators';
import * as ProfileUpdateActions from '../actions/profile-update.actions';
import { ProfileUpdateService } from '../profile-update.service';
import { show } from '@app/core/store/actions/overlay.actions';
import { OverlayEnum } from '@app/core/models/overlay.model';

@Injectable()
export class ProfileUpdateEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private service: ProfileUpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) {}

  profileUpdatePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileUpdateActions.profileUpdatePageWithData),
        tap(() => this.navCtrl.navigateForward('/profile-update'))
      ),
    { dispatch: false }
  );

  profileUpdatePageSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileUpdateActions.profileUpdate),
      exhaustMap((action) => {
        return this.service.profileUpdate(action.profile).pipe(
          map((r) => {
            return ProfileUpdateActions.successProfileUpdate();
          })
        );
      })
    )
  );

  successProfileUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileUpdateActions.successProfileUpdate),
        tap(() => {
          this.store.dispatch(
            show({
              overlay: {
                overlayType: OverlayEnum.Alert,
                overlayOptions: {
                  message: 'Atulização cadastral realizada com sucesso! Obrigado! 😊',
                  buttons: ['OK'],
                },
              },
            })
          );
          this.navCtrl.navigateForward('/home');
        })
      ),
    { dispatch: false }
  );
}
