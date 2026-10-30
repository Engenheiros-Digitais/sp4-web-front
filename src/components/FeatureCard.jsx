import { Link } from 'react-router-dom';

function FeatureCard({ id, titulo, texto, imagem, alt, link }) {
  return (
    <div id={`card-${id}`} className="grid items-center gap-8 bg-gradient-to-br from-white to-suave px-5 py-10 md:px-24 lg:grid-cols-2">
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="font-serif text-2xl">{titulo}</h2>
        <p className="leading-relaxed text-gray-600">{texto}</p>
        <Link to={link} className="rounded-full bg-jovi px-6 py-2 font-semibold text-white hover:scale-105">
          Descubra
        </Link>
      </div>
      <img className="mx-auto w-full max-w-xs md:max-w-sm" src={imagem} alt={alt} />
    </div>
  );
}

export default FeatureCard;
