import { Action } from '../actions';
import { ActionType } from '../actions/types';

export const testReducer = (state: number, action: Action) => {
  switch (action.type) {
    case ActionType.HELLO:
      return state + action.payload;
    case ActionType.HI:
      return state - action.payload;
    default:
      return 0;
  }
};
