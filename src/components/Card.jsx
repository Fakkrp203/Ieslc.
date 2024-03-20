import React from "react";

import { motion } from "framer-motion";

const Card = ({ title, description, image, url }) => {
  return (
    <motion.div
      className="mx-12 hvr-bob hover:shadow-2xl"
      whileHover={{
        scale: 1.1,
        transition: { ease: "easeInOut", duration: 0.1 },
        shadow: true,
      }}
      onHoverEnd={(e) => {
        setTimeout(() => {
          // Reducir la escala y ajustar la transición
          e.target.style.transform = "scale(1)";
          e.target.style.transition = "transform 0.3s ease";
        }, 300); // Retardo de 200 milisegundos
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="block rounded-lg bg-white border shadow-secondary-1 dark:bg-surface-dark">
        <a href="#!">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-6 text-surface">
          <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
          <p className="mb-4 text-base">{description}</p>
          <button>
            <a
              href={url}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg"
            >
              Cuadernillo
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
