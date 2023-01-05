import CheckAuth from "./CheckAuth";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSingleUserMail} from "../redux/actions/inboxAction";

const SingleMail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {mail} = useSelector(state => state.inbox)

    useEffect(() => {
        dispatch(getSingleUserMail(id))
    }, [id])

    return (
        <div className="min-h-[100vh] py-20 w-full items-center flex justify-center">
            <CheckAuth/>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg w-1/2">
                <div className="px-4 py-5 sm:px-6 flex gap-2 items-center justify-between">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">{mail?.subject}</h3>
                        <p className="mt-1 max-w-2xl text-xs text-gray-500">Mail from: {mail?.messageFrom}</p>
                    </div>
                    <p onClick={() => navigate(-1)} className="bg-indigo-500 text-white px-2 py-1 rounded cursor-pointer text-xs">Go Back</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:px-6">
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {mail?.content}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default SingleMail;
