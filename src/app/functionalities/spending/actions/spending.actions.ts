import { createAction, props } from '@ngrx/store';
import { Spending } from '../spending.model';

// List Spending
export const listSpending = createAction('[Spending] List Spending');
// success List Spending
export const successListSpending = createAction(
  '[Spending] Success List Spending',
  props<{ resultado: any }>()
);
// Delete Spending By Id
export const deleteSpendingById = createAction(
  '[Spending] Delete Spending By Id',
  props<{ id: String }>()
);

export const createSpending = createAction(
  '[Spending] Create Spending',
  props<{ spending: Spending }>()
);
export const updateSpending = createAction(
  '[Spending] Update Spending',
  props<{ spending: Spending }>()
);
export const successSaveSpending = createAction('[Spending]', props<{ spending: Spending }>());
