import { createAction, props } from '@ngrx/store';

// open page profile update with data
export const profileUpdatePageWithData = createAction(
  '[Profile Update] Profile Update Page',
  props<{ profile: any }>()
);
// profile update
export const profileUpdate = createAction(
  '[Profile Update] Profile Update',
  props<{ profile: any }>()
);
// success update
export const successProfileUpdate = createAction('[Profile Update] Success Profile Update');
// restart profile update
export const restartProfileUpdate = createAction('[Profile Update] Restart Profile Update');
