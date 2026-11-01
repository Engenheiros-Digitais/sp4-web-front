import useFetch from '../hooks/useFetch';
import { API_URL } from '../services/api';
import MembroCard from './MembroCard';

function Equipe() {
  const { dados: membros, carregando, erro } = useFetch(`${API_URL}/membros`);

  return (
    <section id="equipe" className="bg-gradient-to-br from-white to-suave px-5 py-12 text-center md:px-24 md:py-20">
      <h2 className="text-3xl font-bold">QUEM SOMOS?</h2>
      <p className="mt-2 text-gray-600">Conheça os integrantes da equipe e responsáveis pelo desenvolvimento da JOVI Vision AI.</p>

      {carregando && <p className="mt-8">Carregando...</p>}
      {erro && <p className="mt-8 text-red-600">{erro}</p>}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {membros.map((membro) => (
          <MembroCard key={membro.id} nome={membro.nome} cargo={membro.cargo} foto={membro.foto} />
        ))}
      </div>
    </section>
  );
}

export default Equipe;
