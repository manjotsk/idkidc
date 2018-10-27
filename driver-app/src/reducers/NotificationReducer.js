import {
    SAVE_NOTIFICATION_DATA
} from '../actions/types'

const INITIAL_STATE = {
    notification: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SAVE_NOTIFICATION_DATA: 
            return {...state, notification: action.notification}
        default:
        return state
    }
}