import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "./banner.css";

const Banner = () => {
  return (
    <header>
      <ParallaxBanner
        layers={[{ image: "/194877_10150118796269628_783740_o-1100x409.jpg", speed: -15 }]}
        className="aspect-[2/1] h-80 bg-cover bg-center bg-no-repeat"
      >
        <ParallaxBannerLayer>
          <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill banner">
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">Información</p>
              <p className="text-3xl font-bold">
                Nuestra instalacion y personal.
              </p>
              <p className="mt-3 leading-6">
                El IES “La Cocha” posee una planta actual de 56 Profesores, dos
                preceptores, 1 bibliotecario, 1 personal Auxiliar de Servicio y
                670 Alumnos, provenientes del Departamento La Cocha, Alberdi,
                Graneros, Concepción, Lamadrid, Rumi Punco y de la provincia
                vecina de Catamarca.
              </p>
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </header>
  );
};

export default Banner;
