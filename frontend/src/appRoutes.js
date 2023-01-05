import Login from "./components/Login";
import Register from "./components/Register";
import NotFoundPage from "./components/NotFoundPage";
import Mailbox from "./components/Mailbox";
import SingleMail from "./components/SingleMail";
import CreateMail from "./components/CreateMail";

const appRoutes = [
    {
        exact: true,
        path: '/',
        element: <Mailbox/>
    },
    {
        exact: true,
        path: '/mail/:id',
        element: <SingleMail/>
    },
    {
        exact: true,
        path: '/login',
        element: <Login/>
    },
    {
        exact: true,
        path: '/register',
        element: <Register/>
    },
    {
        exact: true,
        path: '/create',
        element: <CreateMail/>
    },
    {
        exact: true,
        path: '*',
        element: <NotFoundPage/>
    },
]

export default appRoutes;
