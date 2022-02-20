import { Dessert } from '../../interfaces/Dessert';
import { Drink } from '../../interfaces/Drink';
import { Fries } from '../../interfaces/Fries';
import { McdoData } from '../../interfaces/McdoData';
import { Menu } from '../../interfaces/Menu';
import { Sandwich } from '../../interfaces/Sandwich';
import { Snack } from '../../interfaces/Snack';
import { Wrap } from '../../interfaces/Wrap';
import { ActionType } from './types/';

interface HiAction {
  type: ActionType.HI;
  payload: number;
}

interface HelloAction {
  type: ActionType.HELLO;
  payload: number;
}

interface GetPosts {
  type: ActionType.GETPOSTS;
  payload: McdoData;
}

interface CurrentTarget {
  type: ActionType.CURRENTTARGET;
  payload:
    | Menu[]
    | Sandwich[]
    | Wrap[]
    | Snack[]
    | Drink[]
    | Dessert[]
    | Fries[]
    | [];
}

export type Action = HiAction | HelloAction | GetPosts | CurrentTarget;

export * from './foodActions';
