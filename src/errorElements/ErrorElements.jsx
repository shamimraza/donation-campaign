import { Link } from "react-router-dom";

const ErrorElements = () => {
  return (
    <div className="text-center mt-56">
      <h2 className="font-bold mt-4 text-7xl">
        <span className="text-red-400">404 </span>
      </h2>
      <h2 className="font-bold text-5xl mt-5">Page Not Found</h2>
      <Link to="/">
        <button className="btn btn-error mt-4 text-white">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorElements;
