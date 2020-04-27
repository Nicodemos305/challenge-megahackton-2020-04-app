import { createAction, props } from '@ngrx/store';
import { OverlayOptions } from '@app/core/models/overlay.model';

// show
export const show = createAction('[Overlay] Show', props<{ overlay: OverlayOptions }>());
