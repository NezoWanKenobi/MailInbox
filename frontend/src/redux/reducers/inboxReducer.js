import {GET_USER_INBOX, GET_USER_MAIL} from '../types'

const initialState = {
    inbox: [],
    mail: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INBOX:
            return {
                ...state,
                inbox: action.payload
            }
        case GET_USER_MAIL:
            return {
                ...state,
                mail: action.payload
            }
        default:
            return state
    }
}

export default reducer
