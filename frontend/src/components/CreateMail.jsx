import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createMail} from "../redux/actions/inboxAction";

const CreateMail = () => {
    const dispatch = useDispatch();
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [messageTo, setMessageTo] = useState("")

    const sendMail = e => {
        e.preventDefault();
        dispatch(createMail({subject, content, isread: false, messageTo}))
    }

    return (
        <div className="flex h-[100vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Send Mail
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={sendMail}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="subject" className="sr-only">
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Subject"
                                onChange={e => setSubject(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="to" className="sr-only">
                                To
                            </label>
                            <input
                                id="to"
                                name="to"
                                type="text"
                                required
                                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="To"
                                onChange={e => setMessageTo(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="sr-only">
                                Content
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Content"
                                onChange={e => setContent(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateMail;
