import BannerBg from "../imgs/banner-bg.png";
import Logo from "../imgs/logo.png";

const Home = () => {
  return (
    <main className="bg-light-white min-h-full">

      <section className="relative mt-12">
        <img
          className="w-full brightness-50 absolute top-0 left-0"
          src={BannerBg}
          alt=""
        />
        <img src={Logo} className="z-10 absolute top-64 left-24" alt="" />
      </section>

      

      

    </main>
  );
};

export default Home;
