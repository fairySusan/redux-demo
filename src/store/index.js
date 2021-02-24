import {createStore, combineReducers} from '../redux'
import {themeColor} from './reducer/theme'
import {count} from './reducer/count'

const rootReducer = combineReducers({themeColor, count})

const store = createStore(rootReducer)

export default store