import axios from "axios";
import tokenConfig from "../tokenConfig";
import {GET_USER_INBOX, GET_USER_MAIL} from "../types";

export const getUserMails = (username) => dispatch => {
    axios
        .get(`/inbox/all/${username}`, tokenConfig())
        .then(res => {
            dispatch({type: GET_USER_INBOX, payload: res.data})
        })
        .catch(console.log)
}

export const getSingleUserMail = id => dispatch => {
    axios
        .get(`/inbox/${id}`, tokenConfig())
        .then(res => {
            dispatch({type: GET_USER_MAIL, payload: res.data})
        })
        .catch(err => {
            alert('An error occured')
            window.location.href = "/"
        })
}

export const createMail = (data) => dispatch => {
    axios
        .post("/inbox/create", data, tokenConfig())
        .then(res => {
            window.location.href = "/"
            alert('Mail sent.')
        })
        .catch(console.log)
}
