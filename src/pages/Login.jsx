import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // Validação do formulário (mesma regra da Sprint 3)
  const handleLogin = (e) => {
    e.preventDefault();
    const nomeLimpo = nome.trim();

    if (!nomeLimpo || !senha) {
      alert('Erro: Preencha todos os campos do formulário!');
      return;
    }

    if (senha.length < 4) {
      alert('Erro: A senha precisa ter pelo menos 4 caracteres!');
      return;
    }

    const nomeFormatado = nomeLimpo.toUpperCase();
    login(nomeFormatado);
    alert(`Bem-vindo, ${nomeFormatado}! Login realizado com sucesso.`);
    navigate('/painel');
  };

  return (
    <main className="flex justify-center px-4 py-16">
      <form onSubmit={handleLogin} className="flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-white p-6 shadow">
        <h1 className="text-center text-2xl font-bold text-jovi">Área de Autenticação</h1>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="rounded border border-gray-300 p-2"
        />
        <input
          type="password"
          placeholder="Senha (mínimo 4 dígitos)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="rounded border border-gray-300 p-2"
        />
        <button type="submit" className="rounded-full bg-jovi py-2 font-semibold text-white">
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
