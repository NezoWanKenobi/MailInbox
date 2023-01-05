import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import appRoutes from "./appRoutes";
import {useDispatch} from "react-redux";
import {getLoggedUser} from "./redux/actions/userAction";

const App = () => {
    const dispatch = useDispatch();
    const authToken = localStorage.getItem('__AUTH_TOKEN');

    useEffect(() => {
        if (authToken) dispatch(getLoggedUser())
    }, [authToken])

    return (
        <Router>
            <Layout>
                <Routes>
                    {appRoutes.map((route, index) => (
                        <Route key={index} exact={route.exact} path={route.path} element={route.element}/>
                    ))}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
