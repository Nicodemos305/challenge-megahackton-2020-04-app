import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let usuarioCorrente = this.authService.currentUserValue;
    if (usuarioCorrente && usuarioCorrente.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${usuarioCorrente.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
