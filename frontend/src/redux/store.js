import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer";
import inboxReducer from "./reducers/inboxReducer";

const rootReducer = combineReducers({
    user: userReducer,
    inbox: inboxReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
