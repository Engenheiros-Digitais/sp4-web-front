import { useState, useEffect } from 'react';

// Hook customizado com a lógica do Flash Adaptativo
// Quanto menos luz no ambiente, maior o brilho da tela
function useFlash() {
  const [lux, setLux] = useState(() => {
    const salvo = localStorage.getItem('ultimoLux');
    return salvo !== null ? Number(salvo) : 56;
  });

  const brilho = Math.max(0, 100 - lux);

  // Salva o último valor no navegador
  useEffect(() => {
    localStorage.setItem('ultimoLux', lux);
  }, [lux]);

  return { lux, setLux, brilho };
}

export default useFlash;
