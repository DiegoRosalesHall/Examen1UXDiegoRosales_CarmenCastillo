import React from 'react';

const BotonAtomico: React.FC<{clase: string; dataTarget: string; dataSlide: string}> = ({clase, dataTarget, dataSlide}) => {
  return (
    <button className={clase} type="button" data-bs-target={dataTarget} data-bs-slide={dataSlide}>
      <span className="visually-hidden">{dataSlide === "prev" ? "Anterior" : "Siguiente"}</span>
    </button>
  );
};

export default BotonAtomico;