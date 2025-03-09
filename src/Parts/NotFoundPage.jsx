
import { Link } from "react-router-dom";
import { basePath } from "../Config";

function NotFoundPage() {
    return (
        <div className="flex justify-center">
            <div className="flex text-center flex-col text-xl">
                <h1>404 Page not found</h1>
                <Link to={basePath} className="font-bold">Home Page</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;