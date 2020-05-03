import { createAction, props } from '@ngrx/store';

// List Goal
export const listGoals = createAction('[Goal] List Goal');
// success List Goal
export const successListGoal = createAction(
  '[Goal] Success List Goal',
  props<{ resultado: any }>()
);
// Delete Goal By Id
export const deleteGoalById = createAction('[Goal] Delete Goal By Id', props<{ id: String }>());

export const createGoal = createAction('[Goal] Create Goal', props<{ goal: any }>());
export const updateGoal = createAction('[Goal] Update Goal', props<{ goal: any }>());
export const successSaveGoal = createAction('[Goal]', props<{ goal: any }>());
