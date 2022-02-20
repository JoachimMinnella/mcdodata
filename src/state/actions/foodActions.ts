import data from '../../../public/assets/datas/mcdo.json';

import { Dessert, Drink } from '@/domain/entities';

import { FoodThunkResult, SET_DESSERTS, SET_DRINKS } from '@/state';

export const setDesserts =
  (desserts: Dessert[]): FoodThunkResult<void> =>
  async (dispatch) => {
    const desserts = data.desserts as Dessert[];

    const res = await fetch(`https://api.mcdo.com`, {
      method: `GET`,
      headers: {
        Authorization: `API_KEY`,
      },
    });

    const data = (await res.json()) as { desserts: Dessert[] };

    dispatch({
      type: SET_DESSERTS,
      desserts: data.desserts,
    });
  };

export const setDrinks =
  (drinks: Drink[]): FoodThunkResult<void> =>
  (dispatch) => {
    dispatch({
      type: SET_DRINKS,
      drinks,
    });
  };
