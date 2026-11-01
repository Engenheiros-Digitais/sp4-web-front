import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import useFetch from '../hooks/useFetch';
import { API_URL } from '../services/api';

function Feedbacks() {
  const { usuario } = useAuth();
  const { dados: feedbacks, setDados: setFeedbacks, carregando, erro } = useFetch(`${API_URL}/feedbacks`);
  const [mensagem, setMensagem] = useState('');

  const enviarFeedback = (e) => {
    e.preventDefault();

    if (mensagem.trim().length < 5) {
      alert('Erro: O feedback precisa ter pelo menos 5 caracteres!');
      return;
    }

    fetch(`${API_URL}/feedbacks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: usuario, mensagem: mensagem.trim() })
    })
      .then((resposta) => resposta.json())
      .then((novo) => {
        setFeedbacks([...feedbacks, novo]);
        setMensagem('');
        alert('Obrigado pelo feedback!');
      })
      .catch(() => alert('Erro ao enviar o feedback.'));
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-3xl font-bold text-jovi">Feedbacks</h1>
      <p className="mb-6 text-gray-600">O que você achou das tecnologias JOVI Vision AI?</p>

      <form onSubmit={enviarFeedback} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow">
        <textarea
          rows="3"
          placeholder="Escreva seu feedback"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="rounded border border-gray-300 p-2"
        ></textarea>
        <button type="submit" className="self-start rounded-full bg-jovi px-6 py-2 font-semibold text-white">
          Enviar Feedback
        </button>
      </form>

      {carregando && <p className="mt-6">Carregando...</p>}
      {erro && <p className="mt-6 text-red-600">{erro}</p>}

      <ul className="mt-6 flex flex-col gap-3">
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className="rounded-xl bg-white p-4 shadow">
            <p className="font-semibold">{feedback.nome}</p>
            <p className="text-gray-600">{feedback.mensagem}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Feedbacks;
