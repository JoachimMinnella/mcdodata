import { Dessert } from "./Dessert";
import { Drink } from "./Drink";
import { Fries } from "./Fries";
import { Menu } from "./Menu";
import { Sandwich } from "./Sandwich";
import { Snack } from "./Snack";
import { Wrap } from "./Wrap";
import { Nav } from "./Nav";

export interface McdoData {
    nav: Nav[],
    desserts: Dessert[],
    drink: Drink[],
    fries: Fries[],
    menus: Menu[],
    sandwich: Sandwich[],
    snack: Snack[],
    wrap: Wrap[],
}