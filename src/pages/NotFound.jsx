import Logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  scrollTo(0, 0);

  return (
    <main className="bg-light-gray flex flex-col items-center">
      {/* Banner 404 */}
      <section className="relative w-full h-[90vh] flex justify-center items-center bg-banner-image bg-cover backdrop-brightness-50">
        <div className="text-center bg-opacity-60 z-10 flex flex-col justify-center items-center gap-4 w-full h-full bg-black">
          <img src={Logo} alt="Fórmula E" className="mt-8 w-64" />
          <h1 className="text-5xl font-bold text-light-white">
            404 - Página Não Encontrada
          </h1>
          <p className="text-xl text-light-white">
            Desculpe, mas a página que você está procurando não existe.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block bg-light-white text-primary-blue px-8 py-4 font-bold rounded-lg"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </section>

      {/* Perguntas Freqüentes */}
      <section className="px-4 w-full flex flex-col gap-12 items-center max-w-screen-lg py-16 md:px-0">
        <h2 className="text-3xl font-bold">Você precisa de ajuda?</h2>
        <p className="text-lg leading-relaxed text-center">
          Confira algumas perguntas frequentes ou entre em contato conosco para
          mais informações.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>
            <strong>O que é a Fórmula E?</strong> A Fórmula E é uma competição
            de automobilismo 100% elétrica.
          </li>
          <li>
            <strong>Como posso participar?</strong> Experimente nossa
            experiência virtual no Roblox!
          </li>
          <li>
            <strong>Onde posso encontrar mais informações?</strong> Visite nossa
            página "Sobre" para saber mais.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default NotFound;
