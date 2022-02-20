import { ThunkAction } from 'redux-thunk';

import {
  Dessert,
  Drink,
  Fries,
  Menu,
  Sandwich,
  Snack,
  Wrap,
} from '@/domain/entities';

import { RootState } from '@/state';

export const SET_DESSERTS = `SET_DESSERTS`;
export const SET_DRINKS = `SET_DRINKS`;

export interface FoodState {
  desserts: Dessert[];
  drinks: Drink[];
  fries: Fries[];
  menus: Menu[];
  sandwich: Sandwich[];
  snacks: Snack[];
  wraps: Wrap[];
}

interface SetDessertsAction {
  type: typeof SET_DESSERTS;
  desserts: Dessert[];
}

interface SetDrinksAction {
  type: typeof SET_DRINKS;
  drinks: Drink[];
}

export type FoodActionTypes = SetDessertsAction | SetDrinksAction;

export type FoodThunkResult<R> = ThunkAction<
  R,
  RootState,
  undefined,
  FoodActionTypes
>;
