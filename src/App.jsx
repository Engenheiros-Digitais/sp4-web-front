import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RotaPrivada from './components/RotaPrivada';
import Home from './pages/Home';
import Funcionalidade from './pages/Funcionalidade';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Feedbacks from './pages/Feedbacks';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-fundo text-gray-900">
      <Header />
      <div className="flex-1">
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/funcionalidade/:nome" element={<Funcionalidade />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas privadas (precisa estar logado) */}
        <Route path="/painel" element={<RotaPrivada><Painel /></RotaPrivada>} />
        <Route path="/feedbacks" element={<RotaPrivada><Feedbacks /></RotaPrivada>} />

        {/* Qualquer outra rota volta para a página inicial */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
