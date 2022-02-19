import { McdoData } from "../../interfaces/McdoData";
import { Action } from "../actions"
import { ActionType } from "../actions/types"

const reducer = (state: null | McdoData = null, action: Action) => {
    switch (action.type) {
        case ActionType.GETPOSTS:
            return action.payload;
        default:
            return state;
    }
}

export default reducer