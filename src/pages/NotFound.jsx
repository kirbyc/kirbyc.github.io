
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <h1 className="text-4xl font-mono font-bold mb-4">404</h1>
        <p className="text-neutral-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="text-accent hover:text-accent/80 transition-colors duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
