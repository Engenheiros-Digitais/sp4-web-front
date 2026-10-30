import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// Se não estiver logado, manda para a página de login
function RotaPrivada({ children }) {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default RotaPrivada;
