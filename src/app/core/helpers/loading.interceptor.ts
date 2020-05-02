import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OverlayService } from '../services/overlay.service';
import { environment } from '@env/environment';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  /**
   * requests
   */
  private requests: HttpRequest<any>[] = [];

  /**
   * constructor
   *
   * @param overlay
   */
  constructor(private overlay: OverlayService) {}

  /**
   * intercept
   *
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.headers.get(environment.LOADING_HEADER));
    if (
      !req.headers.get(environment.LOADING_HEADER) ||
      req.headers.get(environment.LOADING_HEADER) === 'false'
    ) {
      return next.handle(req);
    }

    this.requests.push(req);

    return next.handle(req).pipe(
      tap(() => this.overlay.showLoaging()),
      finalize(() => {
        return this.removeRequest(req);
      })
    );
  }

  /**
   * Remove requests
   *
   * @param req
   */
  private removeRequest(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index >= 0) {
      this.requests.splice(index, 1);
    }

    if (this.requests.length === 0) {
      this.overlay.hideLoaging();
    }
  }
}
