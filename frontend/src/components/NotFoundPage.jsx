import {useNavigate} from "react-router-dom";
const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="flex justify-center gap-4 items-center flex-col">

                <div className="flex gap-4">
                    <p className="text-indigo-500 text-6xl font-bold">404</p>

                    <div className="w-[1px] h-[70px] bg-gray-200 opacity-50"/>

                    <div className="flex flex-col">
                        <p className="text-4xl font-bold">Page not found.</p>
                        <p className="text-gray-400">Please check url and try again.</p>
                    </div>
                </div>

                <button onClick={() => navigate(-1)} className="bg-indigo-500 opacity-90 hover:opacity-100 transition-opacity rounded text-white px-4 py-2">
                    Go back
                </button>

            </div>
        </div>
    )
}


export default NotFoundPage;
