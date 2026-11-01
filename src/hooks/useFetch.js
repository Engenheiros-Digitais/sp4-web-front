import { useState, useEffect } from 'react';

function useFetch(url) {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch(url)
      .then((resposta) => {
        if (!resposta.ok) throw new Error('Erro ao carregar os dados.');
        return resposta.json();
      })
      .then((json) => setDados(json))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, [url]);

  return { dados, setDados, carregando, erro };
}

export default useFetch;
