import { Action } from "../actions"
import { ActionType } from "../actions/types"

//Interfaces
import { Dessert } from "../../interfaces/Dessert"
import { Drink } from "../../interfaces/Drink"
import { Fries } from "../../interfaces/Fries"
import { Menu } from "../../interfaces/Menu"
import { Sandwich } from "../../interfaces/Sandwich"
import { Snack } from "../../interfaces/Snack"
import { Wrap } from "../../interfaces/Wrap"


const reducer = (state: Menu[] | Sandwich[] | Wrap[] | Snack[] | Drink[] | Dessert[] | Fries[] = [] , action: Action) => {
    switch (action.type) {
        case ActionType.CURRENTTARGET:
            return action.payload;
        default:
            return state
    }
}

export default reducer 