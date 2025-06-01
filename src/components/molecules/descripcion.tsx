import React from "react";
import TextoAtomico from "../atoms/texto";
import styles from "./descripcion.module.css";

const Descripcion: React.FC<{ src: string; descripcion: string }> = ({ src, descripcion }) => {
  return (
    <div className={`carousel-caption d-none d-md-block ${styles.contenedortitulo}`}>
      <img src={src} className={`${styles.tituloimagen}`} alt="Título en imagen" />
      <TextoAtomico contenido={descripcion} />
    </div>
  );
};

export default Descripcion;