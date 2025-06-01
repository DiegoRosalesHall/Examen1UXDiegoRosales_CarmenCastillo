import React from "react";
import TextoAtomico from "../atoms/texto";

const Descripcion: React.FC<{ titulo: string; descripcion: string }> = ({ titulo, descripcion }) => {
  return (
    <div className="carousel-caption d-none d-md-block">
      <h2>{titulo}</h2>
      <TextoAtomico contenido={descripcion} />
    </div>
  );
};

export default Descripcion;