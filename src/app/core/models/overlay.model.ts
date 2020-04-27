import { AlertOptions, LoadingOptions, ToastOptions } from '@ionic/core';

/**
 * OverlayEnum
 */
export enum OverlayEnum {
  Alert,
  Loading,
  Toast,
}

/**
 * OverlayOptions
 */
export class OverlayOptions {
  overlayType: OverlayEnum;
  overlayOptions?: AlertOptions | LoadingOptions | ToastOptions | null;
}
