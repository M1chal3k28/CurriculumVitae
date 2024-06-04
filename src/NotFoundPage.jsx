
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex text-center flex-col text-xl">
                <h1>404 Page not found</h1>
                <Link to="/Cv_react_tailwindcss/" className="font-bold">Home Page</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;