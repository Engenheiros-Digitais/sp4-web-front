import useFlash from '../hooks/useFlash';

function FlashSimulator() {
  const { lux, setLux, brilho } = useFlash();

  return (
    <section className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center shadow">
      <h2 className="text-2xl font-bold">Simulador de Flash Adaptativo</h2>
      <p className="text-gray-600">Ajuste o nível de luz do ambiente (0 = Escuro total, 100 = Muito claro):</p>

      <input
        type="range"
        min="0"
        max="100"
        value={lux}
        onChange={(e) => setLux(Number(e.target.value))}
        className="w-full max-w-xs accent-jovi"
      />

      <p className="text-lg font-bold">
        Luz ambiente atual: <span className="text-jovi">{lux} lux</span>
      </p>
      <p className="text-lg font-bold">
        💡 Brilho recomendado da tela: <span className="text-jovi">{brilho}%</span>
      </p>
      <a href="/#desafio" className="rounded-full bg-jovi px-6 py-2 font-semibold text-white hover:scale-105">
        Voltar ao inicio 
      </a>
    </section>
  );
}

export default FlashSimulator;
