import useSlideshow from '../hooks/useSlideshow';

const imagens = [
  { src: '/images/galeria/flash-frontal.png', alt: 'Foto com o Flash Frontal' },
  { src: '/images/galeria/ia-ativacao.png', alt: 'Foto da ativação da IA' },
  { src: '/images/galeria/ia-original.png', alt: 'Foto original, sem melhorias aplicadas' },
  { src: '/images/galeria/ia-cores.png', alt: 'Melhoria na qualidade das cores' },
  { src: '/images/galeria/ia-fundo.png', alt: 'Melhoria no fundo' },
  { src: '/images/galeria/ia-fundo-cores.png', alt: 'Melhoria no fundo e nas cores' },
  { src: '/images/galeria/ia-nitidez.png', alt: 'Melhoria na nitidez' },
];

function Galeria() {
  const { indice, proxima, anterior } = useSlideshow(imagens.length);

  return (
    <section id="galeria" className="px-5 py-12 text-center md:px-24 md:py-20">
      <h2 className="text-3xl font-bold">Galeria</h2>
      <p className="mt-2 text-gray-600">Confira algumas das imagens capturadas com o JOVI Vision AI!</p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button onClick={anterior} className="shrink-0 rounded-full bg-jovi px-4 py-2 text-white">‹</button>
        <img
          className="aspect-video min-w-0 max-w-2xl flex-1 rounded-xl object-cover shadow-lg"
          src={imagens[indice].src}
          alt={imagens[indice].alt}
        />
        <button onClick={proxima} className="shrink-0 rounded-full bg-jovi px-4 py-2 text-white">›</button>
      </div>
      <p className="mt-3 text-sm text-gray-600">{imagens[indice].alt} — Imagem {indice + 1} de {imagens.length}</p>
    </section>
  );
}

export default Galeria;
