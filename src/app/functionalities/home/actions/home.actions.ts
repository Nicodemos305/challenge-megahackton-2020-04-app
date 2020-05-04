import { createAction, props } from '@ngrx/store';

export const update = createAction('[Home] Update ', props<{ page: String }>());
export const updateHomePage = createAction('[Home] Update Home Page', props<{ page: String }>());
