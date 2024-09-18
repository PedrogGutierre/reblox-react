import Logo from "../imgs/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#000138] text-light-white flex justify-center py-12">
      <div className="w-full flex items-center justify-between max-w-screen-lg">
        <img className="h-8" src={Logo} alt="" />
        <p>Copyright 2024 Reblox.</p>
      </div>
    </footer>
  );
};

export default Footer;
