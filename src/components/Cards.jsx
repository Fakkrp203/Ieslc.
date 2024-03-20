import React from "react";
import Card from "./Card";
import carreras from "./Carreras";

const Cards = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-12">
      {carreras.map((carrera) => (
        <Card
          key={carrera.id}
          title={carrera.title}
          description={carrera.description}
          image={carrera.image}
          url = {carrera.url}
        />
      ))}
    </div>
  );
};

export default Cards;
