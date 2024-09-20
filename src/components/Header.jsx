import Logo from "../imgs/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-primary-blue py-3 z-50">
      <div className="max-w-7xl flex justify-between items-center px-8">
        <a href="/">
          <img className="w-48" src={Logo} alt="" />
        </a>

        <nav>
          <ul className="flex-row gap-4 hidden md:flex">
            <li>
              <a
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                href="/about"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                href="/solution"
              >
                Solução
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
