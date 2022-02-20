import { ActionType } from '../types';
import { Dispatch } from 'redux';
import { Action } from '..';
import axios from 'axios';

// Interfaces
import { Menu } from '../../../interfaces/Menu';
import { Sandwich } from '../../../interfaces/Sandwich';
import { Wrap } from '../../../interfaces/Wrap';
import { Snack } from '../../../interfaces/Snack';
import { Drink } from '../../../interfaces/Drink';
import { Dessert } from '../../../interfaces/Dessert';
import { Fries } from '../../../interfaces/Fries';

export const helloTest = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HELLO,
      payload: amount,
    });
  };
};

export const hiTest = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HI,
      payload: amount,
    });
  };
};

export const getPosts = (): any => {
  return (dispatch: Dispatch<Action>): Promise<any> => {
    return axios
      .get('./assets/datas/mcdo.json')
      .then((res) => {
        dispatch({
          type: ActionType.GETPOSTS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const currentTarget = (
  current:
    | Menu[]
    | Sandwich[]
    | Wrap[]
    | Snack[]
    | Drink[]
    | Dessert[]
    | Fries[]
) => {
  return (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.CURRENTTARGET,
      payload: current,
    });
  };
};
