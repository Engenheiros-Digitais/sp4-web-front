import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Hook customizado para acessar o usuário logado em qualquer componente
function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
