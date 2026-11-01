import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

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

    if (confSenha !== senha) {
    alert("Erro: As senhas precisam ser iguais!");
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
        <input
          type="password"
          placeholder="Confirme a Senha"
          value={confSenha}
          onChange={(e) => setConfSenha(e.target.value)}
          className="rounded border border-gray-300 p-2"
        />
        <button type="submit" className="rounded-full bg-jovi py-2 font-semibold text-white hover:scale-103 transition-transform">
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
