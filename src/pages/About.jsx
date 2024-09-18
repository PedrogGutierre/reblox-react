import Button from "../components/Button";
import PrimeiroCarro from "../imgs/primeiro-carro.jpg";

const About = () => {
  return (
    <main className="w-full flex justify-center py-20 bg-light-gray">
      <div className="flex flex-col items-center w-full max-w-screen-lg gap-8 px-6 md:px-0">
        <section className="w-full">
          <h3 className="bg-secondary-blue text-light-white text-center w-full font-bold text-3xl py-4 mb-6">
            O que é a Fórmula E?
          </h3>
          <p className="text-lg text-justify leading-relaxed mb-6">
            A Fórmula E é a primeira categoria de automobilismo totalmente
            elétrica, criada em 2014 para promover a sustentabilidade e inovação
            no setor automotivo. Com corridas realizadas em circuitos urbanos ao
            redor do mundo, a Fórmula E visa não apenas entreter, mas também
            acelerar a transição para tecnologias de energia limpa e eficiência
            energética.
          </p>
          <img
            src={PrimeiroCarro}
            alt="Primeiro carro elétrico"
            className="w-full h-auto rounded-lg mb-6"
          />
          <p className="text-lg text-justify leading-relaxed">
            Além de ser um laboratório de testes para os carros elétricos, a
            Fórmula E oferece um ambiente competitivo que desafia grandes
            fabricantes a desenvolverem soluções tecnológicas que podem ser
            aplicadas em veículos de produção comercial.
          </p>
        </section>

        <section className="w-full">
          <h3 className="bg-secondary-blue text-light-white text-center w-full font-bold text-3xl py-4 mb-6">
            Impacto e Sustentabilidade
          </h3>
          <p className="text-lg text-justify leading-relaxed mb-6">
            A Fórmula E vai além de ser apenas um evento esportivo. Ela atua
            como uma plataforma de inovação, onde empresas desenvolvem e testam
            tecnologias que impulsionam a revolução dos veículos elétricos.
            Essas inovações ajudam a reduzir as emissões de carbono e a poluição
            em grandes cidades, promovendo um futuro mais sustentável.
          </p>
          <img
            src={PrimeiroCarro}
            alt="Impacto Sustentável"
            className="w-full h-auto rounded-lg mb-6"
          />
          <p className="text-lg text-justify leading-relaxed">
            O campeonato também tem um forte compromisso com a neutralidade de
            carbono, sendo a primeira série global de esportes a alcançar essa
            meta. Isso inclui práticas sustentáveis em suas corridas, como o uso
            de energia renovável e a redução de resíduos gerados durante os
            eventos.
          </p>
        </section>

        <section className="w-full flex flex-col items-center">
          <h3 className="bg-secondary-blue text-light-white text-center w-full font-bold text-3xl py-4 mb-6">
            Nossa Solução
          </h3>
          <p className="text-lg text-justify leading-relaxed mb-6">
            Nosso projeto, desenvolvido em parceria com a Tech Mahindra, busca
            aumentar a visibilidade e o engajamento com a Fórmula E através de
            uma experiência virtual interativa. Sabemos que o público jovem é
            crucial para o futuro da mobilidade sustentável, e nosso objetivo é
            aproximá-los desse universo por meio de uma plataforma acessível e
            envolvente no Roblox.
          </p>
          <img
            src={PrimeiroCarro}
            alt="Experiência no Roblox"
            className="w-full h-auto rounded-lg mb-6"
          />
          <p className="text-lg text-justify leading-relaxed mb-8">
            Com nossa solução, os usuários podem explorar o mundo da Fórmula E,
            entender as tecnologias envolvidas e participar de desafios virtuais
            que simulam a emoção de uma corrida ao vivo, tudo de maneira
            interativa e imersiva.
          </p>
          <Button label="Veja mais sobre a experiência" href="/solution" />
        </section>
      </div>
    </main>
  );
};

export default About;
