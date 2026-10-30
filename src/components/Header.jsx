import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { usuario, logout } = useAuth();

  const linkClasse = 'block rounded border border-jovi px-4 py-2 text-sm text-jovi hover:bg-jovi hover:text-white';

  return (
    <header className="sticky top-0 z-50 bg-sky-100/90">
      <div className="flex items-center justify-between px-5 py-4 md:px-12">
        <Link to="/" className="text-2xl font-bold text-jovi">JOVI Vision AI</Link>

        {/* Botão do menu no celular e tablet */}
        <button onClick={() => setMenuAberto(!menuAberto)} className="text-3xl text-jovi xl:hidden">
          {menuAberto ? '✕' : '☰'}
        </button>

        <nav className={`${menuAberto ? 'block' : 'hidden'} absolute left-0 top-full w-full bg-sky-100 p-5 xl:static xl:block xl:w-auto xl:bg-transparent xl:p-0`}>
          <ul className="flex flex-col gap-2 xl:flex-row xl:items-center">
            <li><a href="/#desafio" onClick={() => setMenuAberto(false)} className={linkClasse}>O Desafio</a></li>
            <li><a href="/#solucao" onClick={() => setMenuAberto(false)} className={linkClasse}>Nossa Solução</a></li>
            <li><a href="/#publico" onClick={() => setMenuAberto(false)} className={linkClasse}>Para Quem É</a></li>
            <li><a href="/#galeria" onClick={() => setMenuAberto(false)} className={linkClasse}>Galeria</a></li>
            <li><a href="/#equipe" onClick={() => setMenuAberto(false)} className={linkClasse}>Nossa Equipe</a></li>
            <li><a href="/#contato" onClick={() => setMenuAberto(false)} className={linkClasse}>Fale Conosco</a></li>
            <li><Link to="/painel" onClick={() => setMenuAberto(false)} className={linkClasse}>Painel</Link></li>
            <li><Link to="/feedbacks" onClick={() => setMenuAberto(false)} className={linkClasse}>Feedbacks</Link></li>
            <li>
              {usuario ? (
                <button onClick={logout} className="w-full rounded-full bg-jovi px-5 py-2 text-sm font-semibold text-white">
                  Sair ({usuario})
                </button>
              ) : (
                <Link to="/login" onClick={() => setMenuAberto(false)} className="block rounded-full bg-jovi px-5 py-2 text-center text-sm font-semibold text-white">
                  Entrar
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
