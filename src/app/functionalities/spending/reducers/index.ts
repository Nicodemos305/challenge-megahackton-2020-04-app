import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as SpendingActions from '../actions/spending.actions';
import { Spending } from '../spending.model';

export const featureKey = 'spending';

// STATES
export interface State {
  resultado: any;
}

export const initialState: State = {
  resultado: null,
};

// REDUCERS
const featureReducer = createReducer(
  initialState,
  on(SpendingActions.successListSpending, (state, { resultado }) =>
    Object.assign({}, state, { resultado: { lista: resultado.result, total: resultado.total } })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}

// SELECTORS
export const selectFeature = createFeatureSelector<State>(featureKey);
export const selectListSpendings = createSelector(selectFeature, (state: State) => state.resultado);
