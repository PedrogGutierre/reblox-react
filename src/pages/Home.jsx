import Galery from "../components/sections/Galery";
import BannerBg from "../imgs/banner-bg.png";
import Logo from "../imgs/logo.png";
import ImgSolucao from "../imgs/rebloxsolucao.png";

const Home = () => {
  return (
    <main className="bg-light-white flex flex-col items-center gap-40">

      <section className="relative flex justify-center w-full items-center mt-12 h-[85vh]">
        <img
          className="w-full brightness-50 absolute object-cover h-full top-0 left-0"
          src={BannerBg}
          alt=""
        />
        <img
          src={Logo}
          className="p-8 z-10 absolute w-full max-w-[36rem]"
          alt=""
        />
      </section>

      <section className="w-full py-24 bg-[#000138] relative flex justify-center bg-logo-pattern bg-cover bg-no-repeat">
        <div className="gap-20 max-w-screen-lg w-full text-light-white flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Nossa Solução</h2>
          <div className="flex items-center gap-4">
            <ul className="list-disc h-full flex flex-col justify-around">
              <li>
                <span className="font-bold">Baixa Visibilidade: </span>A Fórmula
                E compete com a estabelecida Fórmula 1 e muitas vezes é vista
                apenas como uma variação, limitando seu alcance e popularidade.
              </li>
              <li>
                <span className="font-bold">Engajamento Insuficiente: </span>
                Há uma falta de engajamento, especialmente entre os jovens, que
                poderiam se tornar novos fãs e defensores da tecnologia de
                carros elétricos.
              </li>
              <li>
                <span className="font-bold">
                  Experiência de Evento Limitada:
                </span>
                Nem todos têm a oportunidade de vivenciar uma corrida de Fórmula
                E ao vivo devido a restrições geográficas ou financeiras.
              </li>
            </ul>
            <img src={ImgSolucao} alt="" />
          </div>
        </div>
      </section>

      <Galery />


    </main>
  );
};

export default Home;
