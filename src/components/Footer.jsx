import Logo from "../imgs/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-primary-blue text-light-white flex justify-center py-12">
      <div className="w-full flex flex-wrap justify-center gap-4 px-4 items-center md:justify-between max-w-screen-lg">
        <img className="h-8" src={Logo} alt="" />
        <p>Copyright 2024 Reblox.</p>
      </div>
    </footer>
  );
};

export default Footer;
