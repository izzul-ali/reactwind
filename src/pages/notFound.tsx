import { Link } from "react-router-dom"
import { useChangeTitle } from "../hooks/changeTitle"

const NotFound = () => {
    useChangeTitle('404 | Belajar Routing')

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="text-center space-y-3">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-2xl font-semibold">PAGE NOT FOUND</h2>
                <Link to='/' className="hover:bg-blue-500 bg-inherit border text-sm border-gray-300 px-4 py-1 rounded shadow-md">home page</Link>
            </div>
        </div>
    )
}

export default NotFound