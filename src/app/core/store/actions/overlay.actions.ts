import { OverlayOptions } from '@app/core/models/overlay.model';
import { ToastOptions } from '@ionic/core';
import { createAction, props } from '@ngrx/store';

// show
export const show = createAction('[Overlay] Show', props<{ overlay: OverlayOptions }>());
// show toast
export const showToast = createAction(
  '[Overlay] Show Toast',
  props<{ overlayOptions?: ToastOptions }>()
);
