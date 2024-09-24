import React, { useEffect, useState } from "react";
import PodioImg from "../../imgs/podio.png";

const images = [PodioImg, PodioImg, PodioImg, PodioImg, PodioImg, PodioImg];

const Galery = () => {
  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlideshow = (index) => {
    setCurrentIndex(index);
    setSlideshowOpen(true);
  };

  const closeSlideshow = (e) => {
    if (e.target.id === "container") {
      setSlideshowOpen(false);
    }
  };

  const disableScroll = () => {
    const scrollTop = document.documentElement.scrollTop;

    window.onscroll = () => {
      window.scrollTo(0, scrollTop);
    };
  };

  const enableScroll = () => {
    window.onscroll = () => {};
  };

  useEffect(() => {
    if (slideshowOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [slideshowOpen]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="flex w-full justify-center">
      <div className="w-full max-w-screen-lg p-4 lg:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className="aspect-video object-cover cursor-pointer"
              onClick={() => openSlideshow(index)}
            />
          ))}
        </div>
      </div>

      {slideshowOpen && (
        <div
          id="container"
          className="flex justify-center items-center w-screen h-screen z-50 fixed top-0 left-0 bg-black bg-opacity-75"
          onClick={closeSlideshow}
        >
          <img
            src={images[currentIndex]}
            alt={`Slideshow Image ${currentIndex + 1}`}
            className="max-h-full w-full max-w-screen-md"
          />
          <button onClick={prevImage} className="absolute text-4xl left-20 text-white">
            ❮
          </button>
          <button onClick={nextImage} className="absolute text-4xl right-20 text-white">
            ❯
          </button>
        </div>
      )}
    </section>
  );
};

export default Galery;
