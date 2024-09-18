import ImgSolucao from "../imgs/rebloxsolucao.png";
import Galery from "../components/sections/Galery"; // Galeria importada

const Solucao = () => {
  return (
    <main className="w-full flex flex-col items-center py-20 bg-light-gray">
      {/* Seção: Introdução */}
      <section className="w-full max-w-screen-lg px-6 md:px-0 flex flex-col gap-8 mb-12">
        <h2 className="text-4xl font-bold text-center text-secondary-blue">
          Nossa Solução para a Fórmula E
        </h2>
        <p className="text-lg text-justify leading-relaxed">
          A nossa solução foi desenvolvida com o intuito de aumentar a visibilidade e o
          engajamento com a Fórmula E. Ao criar uma experiência virtual no Roblox,
          oferecemos ao público uma imersão total no mundo da Fórmula E, permitindo
          que qualquer pessoa, independentemente de sua localização ou condições financeiras,
          possa vivenciar a emoção de uma corrida e entender a tecnologia por trás dos carros elétricos.
        </p>
        <img
          src={ImgSolucao}
          alt="Ilustração da Solução"
          className="w-full h-auto rounded-lg"
        />
      </section>

      {/* Seção: Detalhamento da Solução */}
      <section className="w-full max-w-screen-lg px-6 md:px-0 flex flex-col gap-8 mb-12">
        <h3 className="text-3xl font-bold text-center text-secondary-blue">
          Como Funciona?
        </h3>
        <p className="text-lg text-justify leading-relaxed">
          Através de nossa plataforma no Roblox, os usuários podem explorar o
          ambiente de uma corrida de Fórmula E de maneira interativa. Eles podem
          aprender sobre os carros, suas tecnologias, e até participar de desafios
          que simulam a experiência de estar em uma corrida ao vivo. A solução também
          conta com desafios interativos que incentivam o aprendizado sobre mobilidade
          sustentável e inovação.
        </p>
      </section>

      {/* Seção: Galeria */}
      <section className="w-full max-w-screen-lg px-6 md:px-0 flex flex-col gap-8 mb-12">
        <h3 className="text-3xl font-bold text-center text-secondary-blue mb-6">
          Galeria de Imagens
        </h3>
        <Galery /> {/* Galeria de imagens da solução */}
      </section>
    </main>
  );
};

export default Solucao;
