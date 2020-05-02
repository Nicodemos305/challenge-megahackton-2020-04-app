import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertOptions, LoadingOptions, ToastOptions } from '@ionic/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { OverlayOptions, OverlayEnum } from '../models/overlay.model';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  loadingOverlay = new BehaviorSubject<boolean>(false);

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  showLoaging(): void {
    this.loadingOverlay.next(true);
  }

  hideLoaging(): void {
    this.loadingOverlay.next(false);
  }

  /**
   * Default method to show temporary mensage types: OverlayEnum
   *
   * @typedef OverlayOptions
   * @param option
   */
  show(option: OverlayOptions): Observable<HTMLIonAlertElement | HTMLIonToastElement> {
    console.log(OverlayEnum.Alert);
    let overlay;
    switch (option.overlayType) {
      case OverlayEnum.Alert:
        overlay = this.alert(<AlertOptions>option.overlayOptions);
        break;
      case OverlayEnum.Toast:
        overlay = this.toast(<ToastOptions>option.overlayOptions);
        break;
    }

    console.log(overlay);

    return overlay;
  }

  /**
   * Alert
   *
   * @param options
   */
  private alert(options?: AlertOptions): Observable<HTMLIonAlertElement> {
    const alert = from(this.alertCtrl.create(options));
    return alert;
  }

  /**
   * Loading
   * @param options
   */
  private loading(options?: LoadingOptions): Observable<Promise<any>> {
    const loading = from(
      this.loadingCtrl.create({
        message: 'Loading...',
        ...options,
      })
    );
    return loading.pipe(map((l) => l.present()));
  }

  /**
   *  Toast
   * @param options
   */
  private toast(options?: ToastOptions): Observable<HTMLIonToastElement> {
    const toast = from(
      this.toastCtrl.create({
        position: 'bottom',
        duration: 5000,
        buttons: [
          {
            text: 'OK',
          },
        ],
        ...options,
      })
    );
    return toast.pipe(map((p) => p));
  }
}
