import { createAction } from '@ngrx/store';

// define actions that can be dispatched
export const incrementCount = createAction('[Counter] Increment Count');

export const decrementCount = createAction('[Counter] Decrement Count');
