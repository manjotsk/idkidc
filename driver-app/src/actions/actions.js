import {
    SAVE_NOTIFICATION_DATA,
    SAVE_NOTIFICATION_TOKEN
} from './types'

export const saveNotificationData=(notification)=>({
    type: SAVE_NOTIFICATION_DATA,
    notification
})

export const saveToken=(token)=>({
    type: SAVE_NOTIFICATION_TOKEN,
    token
})