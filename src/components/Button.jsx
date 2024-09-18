import { Link } from "react-router-dom";

const Button = ({ label, href = "", variant = "primary" }) => {
  let styles = "";

  switch (variant) {
    case "primary":
      styles =
        "w-full bg-secondary-blue text-center transition text-light-white px-6 py-3 rounded hover:bg-hover-blue font-bold";
      break;
    case "secondary":
      styles =
        "w-full bg-white text-center border-2 transition border-transparent text-secondary-blue px-6 py-3 rounded hover:border-secondary-blue font-bold";
      break;
  }

  if (href) {
    return (
      <Link to={href} className={styles}>
        {label}
      </Link>
    );
  }

  return <button className={styles}>{label}</button>;
};

export default Button;
