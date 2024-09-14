import BannerBg from "../imgs/banner-bg.png";
import Logo from "../imgs/logo.png";
import LogoBg from "../imgs/logoBackground.png"

const Home = () => {
  return (
    <main className="bg-light-white flex flex-col items-center gap-40">

      <section className="relative flex justify-center w-full items-center mt-12 h-screen">
        <img
          className="w-full brightness-50 absolute object-cover h-full top-0 left-0"
          src={BannerBg}
          alt=""
        />
        <img src={Logo} className="p-8 z-10 absolute w-full max-w-[36rem]" alt="" />
      </section>

      <section className="w-full h-screen bg-[#000138] relative flex justify-center">
        <img src={LogoBg} alt="" className="absolute top-0 left-0 h-full object-cover w-full" />
        <div className="max-w-screen-lg w-full text-light-white flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Nossa Solução</h2>
          <div>
            <ul>0</ul>
          </div>
        </div>
      </section>

      

      

    </main>
  );
};

export default Home;
