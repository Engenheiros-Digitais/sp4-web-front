import { useState } from 'react';

function useSlideshow(totalImagens) {
  const [indice, setIndice] = useState(0);

  const proxima = () => {
    setIndice((anterior) => (anterior + 1) % totalImagens);
  };

  const anterior = () => {
    setIndice((atual) => (atual - 1 + totalImagens) % totalImagens);
  };

  return { indice, proxima, anterior };
}

export default useSlideshow;
