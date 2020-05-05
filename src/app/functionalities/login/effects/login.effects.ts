import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayEnum } from '@app/core/models/overlay.model';
import { AuthService } from '@app/core/services/auth.service';
import { show } from '@app/core/store/actions/overlay.actions';
import * as fromRoot from '@core/store/reducers';
import { NavController, ModalController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, tap } from 'rxjs/operators';
import * as LoginActions from '../actions/login.action';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.State>,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController
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

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap((action) =>
        this.authService.login(action.login).pipe(
          map((result) => {
            console.log(result);
            this.authService.saveLoginStorage(result);
            return LoginActions.loginSuccess({
              createdUser: result.createdUser,
            });
          })
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginSuccess),
        tap((result) => {
          let rota = '/profile-update';
          if (result.createdUser) {
            rota = '/home';
          }
          this.navCtrl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || rota);
        })
      ),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginRedirect),
        tap(() => {
          console.log('LOGIN');
          // return this.navCtrl.navigateForward('');
          this.modalCtrl.dismiss();
          return this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.register),
      exhaustMap((action) =>
        this.authService.register(action.register).pipe(
          map((result: any) => {
            this.store.dispatch(
              show({
                overlay: {
                  overlayType: OverlayEnum.Toast,
                  overlayOptions: {
                    message: 'Favor, informar o código de confirmação',
                  },
                },
              })
            );
            const confirmation = result.result;
            confirmation.password = action.register.password;
            return LoginActions.confirmationRegister({ confirmation });
          })
        )
      )
    )
  );

  confirmationCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.confirmationCode),
      exhaustMap((action) => {
        console.log(action);
        return this.authService.confirmation(action.confirm).pipe(
          map((r) => {
            return LoginActions.successConfirmationCode({
              login: {
                phone: action.confirm.phone,
                password: action.confirm.password,
              },
            });
          })
        );
      })
    )
  );

  successConfirmationCode$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.successConfirmationCode),
        map((r) => {
          return LoginActions.login({
            login: {
              phone: r.login.phone,
              password: r.login.password,
              createdUser: false,
            },
          });
        })
      )
    // ,
    //     { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.logout),
        tap(() => {
          // remove user from local storage to log user out
          this.modalCtrl.dismiss();
          this.authService.logout();
          this.navCtrl.navigateForward('/login');
          this.store.dispatch(LoginActions.logoutSuccess());
        })
      ),
    { dispatch: false }
  );
}
