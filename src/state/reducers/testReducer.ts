import { Action } from '../actions'
import { ActionType } from '../actions/types';

const reducer = (state: number, action: Action) => {
    switch (action.type) {
        case ActionType.HELLO:
            return state + action.payload;
        case ActionType.HI:
            return state - action.payload;
        default: return 0;
    }
}

export default reducer