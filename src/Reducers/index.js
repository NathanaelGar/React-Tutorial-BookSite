import counterReducer from './counter'
import isLogged from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    // counterReducer,
    // isLogged
})

export default allReducers;