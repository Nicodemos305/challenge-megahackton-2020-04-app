import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromRoot from '@core/store/reducers';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { logout } from '@func/login/actions/login.action';
import { show } from '../store/actions/overlay.actions';
import { OverlayEnum } from '../models/overlay.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private readonly store$: Store<fromRoot.State>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          console.log('LOGOUT');
          // auto logout if 401 response returned from api
          this.store$.dispatch(logout());
          this.store$.dispatch(
            show({
              overlay: {
                overlayType: OverlayEnum.Toast,
                overlayOptions: {
                  message: 'Sessão expeirada',
                },
              },
            })
          );
        } else if (err.status === 400) {
          this.store$.dispatch(
            show({
              overlay: {
                overlayType: OverlayEnum.Toast,
                overlayOptions: {
                  message:
                    err.error.error ||
                    err.error.message ||
                    err.error.result ||
                    err.statusText ||
                    'Error 400',
                },
              },
            })
          );
        } else if (err.status === 500) {
          this.store$.dispatch(
            show({
              overlay: {
                overlayType: OverlayEnum.Toast,
                overlayOptions: {
                  message:
                    err.error.error ||
                    err.error.message ||
                    err.error.result ||
                    err.statusText ||
                    'Error 500',
                },
              },
            })
          );
        }

        const error = err.error.error || err.error.message || err.error.result || err.statusText;
        return throwError(error);
      })
    );
  }
}
