function Hero() {
  return (
    <section id="solucao" className="flex flex-col items-center gap-8 px-5 py-12 md:px-24 md:py-20 lg:flex-row">
      <div className="flex flex-col items-center gap-5 text-center lg:w-1/2">
        <h3 className="text-gray-500">Tecnologia & Avanço</h3>
        <h2 className="text-4xl font-bold text-jovi">JOVI Vision AI</h2>
        <p className="leading-relaxed text-gray-700">
          A JOVI VisionAI é uma solução pioneira em visão computacional, desenvolvida para redefinir a interação entre usuários e sistemas de captura digital. Através de algoritmos inteligentes e processamento adaptativo, elevamos o padrão de fotografia computacional, entregando uma experiência fluida, inclusiva e de alta performance.
        </p>
      </div>
      <img className="w-full max-w-md lg:w-1/2 lg:max-w-2xl" src="/images/hero-y31.png" alt="Imagem do Y31" />
    </section>
  );
}

export default Hero;
