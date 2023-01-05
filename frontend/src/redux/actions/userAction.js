import axios from "axios";
import tokenConfig from "../tokenConfig";
import {GET_USER, LOGOUT, SET_USER_TOKEN} from "../types";

export const loginUser = (password, username) => dispatch => {
    axios
        .post("/user/login", {password, username})
        .then(res => {
            localStorage.setItem('__AUTH_TOKEN', res.data.token);
            dispatch({type: SET_USER_TOKEN, payload: res.data.token});
            window.location.href = '/';
            axios
                .get('/user/me', tokenConfig())
                .then(user => dispatch({type: GET_USER, payload: user.data}))
                .catch(console.log)
        })
        .catch(console.log)
}

export const registerUser = (data) => dispatch => {
    axios
        .post("/user/register", data)
        .then(res => {
            alert(res.data.message)
            window.location.href = "/"
        })
        .catch(err => {
            alert(err.response.data.message)
        })
}

export const getLoggedUser = () => dispatch => {
    axios
        .get('/user/me', tokenConfig())
        .then(user => dispatch({type: GET_USER, payload: user.data}))
        .catch(console.log)
}

export const logOut = () => dispatch => {
    localStorage.clear('__AUTH_TOKEN');
    dispatch({type: LOGOUT});
    window.location.href = '/login';
}
