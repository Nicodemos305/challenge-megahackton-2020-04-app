import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import * as ProfileUpdateActions from '../actions/profile-update.actions';

export const featureKey = 'profileupdate';

// STATES
export interface State {
  profile: any;
}

export const initialState: State = {
  profile: null,
};

// REDUCERS
const featureReducer = createReducer(
  initialState,
  on(ProfileUpdateActions.profileUpdatePageWithData, (state, { profile }) =>
    Object.assign({}, state, profile)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}

// SELECTORS
export const selectFeature = createFeatureSelector<State>(featureKey);
