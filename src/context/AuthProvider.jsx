import { useState } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  // Começa com o usuário salvo no navegador (se existir)
  const [usuario, setUsuario] = useState(localStorage.getItem('usuarioLogado') || '');

  const login = (nome) => {
    setUsuario(nome);
    localStorage.setItem('usuarioLogado', nome);
  };

  const logout = () => {
    setUsuario('');
    localStorage.removeItem('usuarioLogado');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
