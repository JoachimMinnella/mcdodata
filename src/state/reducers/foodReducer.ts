import { FoodActionTypes, FoodState } from '@/state';

const initialState: FoodState = {
  desserts: [],
  drinks: [],
  fries: [],
  menus: [],
  sandwich: [],
  snacks: [],
  wraps: [],
};

export const foodReducer = (
  state = initialState,
  action: FoodActionTypes
): FoodState => {
  switch (action.type) {
    case `SET_DESSERTS`:
      return {
        ...state,
        desserts: action.desserts,
      };
    case `SET_DRINKS`:
      return {
        ...state,
        drinks: action.drinks,
      };
    default:
      return state;
  }
};
