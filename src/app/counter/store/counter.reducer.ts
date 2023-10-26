import { createReducer, on } from '@ngrx/store';
import { decrementCount, incrementCount } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  // on takes the action and a function - the function is what occurs whenever the action is dispatched
  on(incrementCount, (state) => state + 1),
  on(decrementCount, (state) => state - 1)
);
