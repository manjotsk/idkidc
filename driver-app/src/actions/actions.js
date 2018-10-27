import {
    SAVE_NOTIFICATION_DATA
} from './types'

export const saveNotificationData=(notification)=>({
    type: SAVE_NOTIFICATION_DATA,
    notification
})