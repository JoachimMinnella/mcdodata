import { combineReducers } from 'redux'
import testReducer from './testReducer'
import getPostsReducer from './getPostsReducer'
import currentTargetReducer from './currentTargetReducer'

const reducers = combineReducers({
    testReducer,
    getPostsReducer,
    currentTargetReducer
})

export default reducers

export type State = ReturnType<typeof reducers>