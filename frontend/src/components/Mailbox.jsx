import CheckAuth from "./CheckAuth";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserMails} from "../redux/actions/inboxAction";

const Mailbox = () => {
    const dispatch = useDispatch();
    const {inbox} = useSelector(state => state.inbox)
    const {user} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUserMails(user?.username))
    } ,[user])

    return (
        <div className="h-[100vh] w-full items-center flex justify-center">
            <CheckAuth/>
            <div className="inbox">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Hello {user?.username}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">You have {inbox.filter(mail => !mail.isread).length} unread mails out of {inbox.length} mails.</p>
                    </div>
                    <Link to="/create" className="bg-indigo-500 text-white px-2 py-1 rounded cursor-pointer text-sm">Send Mail</Link>
                </div>
                <div className="inbox__mails">
                    <dl className="inbox__mails--list">
                        {
                            inbox.map(mail => (
                                <Link to={`/mail/${mail._id}`} className={`inbox__mails--list--item ${mail.isread && 'opacity-40'}`}>
                                    <dt className="text-sm font-medium text-gray-500">{mail.subject}</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{mail.content.substring(0,50)}</dd>
                                </Link>
                            ))
                        }
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Mailbox;
