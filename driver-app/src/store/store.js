import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import rootReducer  from '../reducers/HighOrderReducer'

const middleware = [thunk]

const initialState = Immutable.fromJS({})

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store