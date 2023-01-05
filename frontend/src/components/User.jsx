import Photo from '../assets/img/user.png';
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../redux/actions/userAction";
import {Link} from "react-router-dom";
const User = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user)

    return (
        <li className="dropdown group border-2 border-gray-300 rounded-full pr-3 bg-gray-100" tabIndex={0}>
            <button className="dropdown-button flex gap-2">
                <img src={Photo} alt="User" className="w-10 h-10 rounded-full"/>
                <p className="text-gray-600">{user?.username}</p>
            </button>
            <div className="dropdown-content shadow-lg">
                <Link to="/">Mail Box</Link>
                <Link to="/create">Send Mail</Link>
                <p className="hover:!bg-red-400 text-red-700" onClick={() => dispatch(logOut())}>Logout</p>
            </div>
        </li>
    )
}

export default User;
