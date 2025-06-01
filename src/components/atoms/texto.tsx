import React from 'react';

const TextoAtomico: React.FC<{ contenido: string }> = ({ contenido }) => {
  return <p className="texto">{contenido}</p>;
};

export default TextoAtomico;