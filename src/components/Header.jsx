import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-primary-blue py-3 z-50">
      <div className="max-w-7xl flex justify-between items-center px-8">
        <Link to="/">
          <img className="w-48" src={Logo} alt="" />
        </Link>

        <nav>
          <ul className="flex-row gap-4 hidden md:flex">
            <li>
              <Link
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                to="/about"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                to="/solution"
              >
                Solução
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
