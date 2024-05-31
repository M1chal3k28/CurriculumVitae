
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <h1>404 Page not found</h1>
            <Link to="/Cv_react_tailwindcss">Home Page</Link>
        </div>
    );
}

export default NotFoundPage;