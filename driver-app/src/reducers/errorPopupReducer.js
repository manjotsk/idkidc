import Immutable from "immutable"

const errorPopupActions = {
    TOGGLE: 'TOGGLE',
}

export const toggleErrorPopup = message => ({
    type: errorPopupActions.TOGGLE,
    message
})


export const errorPopup = (state = Immutable.fromJS({
    'visible' : false,
    'message' : ''
}), action) => {

    switch (action.type) {
        case errorPopupActions.TOGGLE:
            return state.set('visible', !state.get('visible'))
                .set('message', !state.get('visible') ? action.message : '')

        default:
            return state
    }
}