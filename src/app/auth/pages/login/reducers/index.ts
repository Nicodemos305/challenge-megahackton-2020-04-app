import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as LoginActions from '../actions/login.action';

export const featureKey = 'login';

// STATES
export interface State {
  isSignIn: boolean;
  action: string;
  actionChange: string;
}

export const initialState: State = {
  isSignIn: true,
  action: 'Login',
  actionChange: 'Create account',
};

// REDUCERS
const featureReducer = createReducer(
  initialState,
  on(LoginActions.showLoginLayout, (state) => onLogin(state)),
  on(LoginActions.showRegisterLayout, (state) => onRegister(state))
);

function onRegister(state) {
  return Object.assign({}, state, {
    isSignIn: false,
    action: 'Sign Up',
    actionChange: 'Already have an account',
  });
}

function onLogin(state) {
  return Object.assign({}, state, {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Create account',
  });
}

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}

// SELECTORS
export const selectFeature = createFeatureSelector<State>(featureKey);
export const selectRegisterLayout = createSelector(selectFeature, (state: State) => state);
