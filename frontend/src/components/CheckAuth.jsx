import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getLoggedUser} from "../redux/actions/userAction";

const CheckAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userToken} = useSelector(state => state.user);
    const authToken = localStorage.getItem('__AUTH_TOKEN')

    useEffect(() => {
        if (userToken || authToken) {
            dispatch(getLoggedUser())
        } else {
            navigate('/login')
        }
    }, [userToken, authToken])
    return null
}

export default CheckAuth;
