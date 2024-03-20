import React from "react";
import Cards from "./Cards";
import Banner from "./Banner";
import MapaGoogle from "./Mapa";
import Footer from "./Footer";
import { ParallaxBanner } from "react-scroll-parallax";

const Home = () => {
  return (
    <div>
      <>
        <header>
          <ParallaxBanner
            layers={[{ image: "/la-cocha.jpg", speed: -15 }]}
            className="aspect-[2/1] h-80 bg-cover bg-center bg-no-repeat"
          />
        </header>

        {/* 
        <header
          className="h-80 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/la-cocha.jpg")' }}
        ></header> */}

        <main className="container lg:px-32 mx-auto py-7 text-gray-700">
          <p className="text-sm md:text-base text-center">
            Este Instituto Superior de Formación Docente es parte del sistema
            educativo público estatal. A través de este sitio web, compartimos
            novedades, información, experiencias y brindamos apoyo a alumnos,
            docentes e interesados en unirse a nuestra comunidad educativa.
            Formamos parte de la Red Virtual de Institutos Superiores de
            Formación Docente coordinada por el INFD, dependiente del Ministerio
            de Educación de la Nación Argentina.
          </p>
        </main>

        <article className="">
          <h3 className="text-center text-3xl font-semibold">
            Nuestras carreras
          </h3>
          <Cards />
        </article>

        <div className="mt-12">
          <Banner />
        </div>

        <section className="mt-12">
          <h3 className="text-center text-3xl my-9 font-semibold">
            Te esperamos aqui!
          </h3>
          <MapaGoogle />
        </section>

        <Footer />
      </>
    </div>
  );
};

export default Home;
