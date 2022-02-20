import { combineReducers } from 'redux';

import {
  currentTargetReducer,
  foodReducer,
  getPostsReducer,
  testReducer,
} from '@/state';

export const reducers = combineReducers({
  food: foodReducer,
});
