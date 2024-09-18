import React from "react";
import PodioImg from "../../imgs/podio.png"

const Galery = () => {
  return (
    <section className="flex w-full justify-center pb-32">
      <div className="w-full max-w-screen-lg p-4 lg:p-0">
        <h2 className="text-4xl font-bold mb-20">Imagens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <img src={PodioImg} alt="" className="aspect-video object-cover"/>
            <img src={PodioImg} alt="" className="aspect-video object-cover"/>
            <img src={PodioImg} alt="" className="aspect-video object-cover"/>
            <img src={PodioImg} alt="" className="aspect-video object-cover"/>
            <img src={PodioImg} alt="" className="aspect-video object-cover"/>
            <img src={PodioImg} alt="" className="aspect-video object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Galery;
