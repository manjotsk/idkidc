import {
    SAVE_NOTIFICATION_DATA,
    SAVE_NOTIFICATION_TOKEN
} from '../actions/types'

const INITIAL_STATE = {
    notification: '',
    token: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SAVE_NOTIFICATION_DATA: 
            return {...state, notification: action.notification}
        case SAVE_NOTIFICATION_TOKEN: 
            return {...state, token: action.token}
        default:
        return state
    }
}