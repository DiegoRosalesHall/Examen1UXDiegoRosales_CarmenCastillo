import React from 'react';

const PosterAtomico: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img className="d-block w-100 rounded" src={src} alt={alt} />;
};

export default PosterAtomico;