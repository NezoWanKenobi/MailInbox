import {GET_USER, LOGOUT, SET_USER_TOKEN} from '../types'

const initialState = {
    user: null,
    auth: false,
    userToken: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                auth: true
            }
        case SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                userToken: null,
                auth: false
            }
        default:
            return state
    }
}

export default reducer
