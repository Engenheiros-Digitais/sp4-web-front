import useAuth from '../hooks/useAuth';
import FlashSimulator from '../components/FlashSimulator';

function Painel() {
  const { usuario } = useAuth();

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-3xl font-bold text-jovi">Painel</h1>
      <p className="mb-6 text-gray-600">Sessão ativa: {usuario}</p>
      <FlashSimulator />
    </main>
  );
}

export default Painel;
