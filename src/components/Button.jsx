import { Link } from "react-router-dom";

const Button = ({ label, href = "" }) => {
  if (href) {
    return (
      <Link
        to={href}
        className="w-full bg-secondary-blue text-center text-light-white px-4 py-2 rounded hover:bg-hover-blue"
      >
        {label}
      </Link>
    );
  }

  return (
    <button className="w-full bg-secondary-blue text-center text-light-white py-2 rounded hover:bg-hover-blue">
      {label}
    </button>
  );
};

export default Button;
