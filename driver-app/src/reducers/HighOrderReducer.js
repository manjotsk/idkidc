import { combineReducers } from 'redux-immutable'
import { errorPopup } from './errorPopupReducer'


const rootReducer = combineReducers({
    errorPopup
})

export default rootReducer
