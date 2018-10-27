import { combineReducers } from 'redux'
import NotificationReducer from './NotificationReducer'


const rootReducer = combineReducers({
    notify: NotificationReducer
})

export default rootReducer
