import { useState } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
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
