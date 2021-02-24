import {createStore} from '../redux'
import {theme} from './reducer/theme'

const store = createStore(theme)

export default store