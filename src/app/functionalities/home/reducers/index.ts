import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';

export const featureKey = 'home';

// STATES
export interface State {
  page: string;
}

export const initialState: State = {
  page: null,
};

// REDUCERS
const featureReducer = createReducer(
  initialState,
  on(HomeActions.updateHomePage, (state, { page }) => Object.assign({}, state, { page }))
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}

// SELECTORS
export const selectFeature = createFeatureSelector<State>(featureKey);
