import { environment } from '@env/environment';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromLogin from '@func/login/reducers';
import * as fromSpending from '@func/spending/reducers';

export interface State {
  login: fromLogin.State;
  spending: fromSpending.State;
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer,
  spending: fromSpending.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
