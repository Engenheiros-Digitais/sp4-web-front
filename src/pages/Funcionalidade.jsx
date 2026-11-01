import { Link, useParams } from 'react-router-dom';

const funcionalidades = {
  flash: {
    titulo: 'Flash Frontal',
    subtitulo: '(câmera frontal)',
    icone: '/images/icone-flash.png',
    texto: 'O flash frontal é uma função opcional da câmera frontal que, quando ativada pelo usuário, ilumina a tela do dispositivo no momento da captura, funcionando como uma fonte de luz para selfies em ambientes escuros. Com ele, é possível obter fotos mais nítidas e bem iluminadas sem depender de luz externa.',
    video: '/videos/flash-frontal.mp4'
  },
  nuvem: {
    titulo: 'Nuvem',
    subtitulo: '(pós-processamento via nuvem)',
    icone: '/images/icone-nuvem.png',
    texto: 'O processamento via nuvem potencializa o dispositivo de forma opcional, aprimorando fotos com recuperação avançada de detalhes, melhoria de resolução e refinamentos estéticos de nível profissional. O usuário decide se deseja ou não utilizar esse recurso — caso sim, a imagem é enviada para um serviço externo e retorna aprimorada.',
    video: ''
  },
  ia: {
    titulo: 'Melhoria com IA',
    subtitulo: '(processamento on-device)',
    icone: '/images/icone-ia.png',
    texto: 'Simula o refinamento local da foto logo após a captura, sem necessidade de internet. O usuário estima a qualidade da imagem em uma escala de 1 a 5, e o sistema aplica automaticamente o nível de melhoria correspondente: qualidade baixa (1 ou 2) recebe forte melhoria, com redução de ruído e aumento de nitidez; qualidade média (3) recebe melhoria moderada; qualidade alta (4 ou 5) recebe apenas uma otimização leve.',
    video: '/videos/ia.mp4'
  }
};

function Funcionalidade() {
  const { nome } = useParams();
  const item = funcionalidades[nome];

  if (!item) {
    return <p className="p-10 text-center">Funcionalidade não encontrada.</p>;
  }

  return (
    <main className="flex justify-center bg-gradient-to-b from-sky-300 to-sky-200 px-4 py-10">
      <div className="flex w-full max-w-md flex-col items-center gap-5 rounded-3xl bg-white p-6 shadow-lg">
        <div className="w-full rounded-2xl bg-suave p-4 text-center text-jovi">
          <h1 className="text-3xl font-bold">{item.titulo}</h1>
          <h2 className="text-xl">{item.subtitulo}</h2>
        </div>

        <img className="h-44 w-44 rounded-full border-4 border-suave object-cover" src={item.icone} alt={`Ícone ${item.titulo}`} />

        <p className="rounded-2xl bg-slate-50 p-5 text-center text-gray-600">{item.texto}</p>

        {item.video && (
          <video className="w-full rounded-2xl" src={item.video} controls muted playsInline></video>
        )}

        <Link to="/" className="rounded-full bg-jovi px-6 py-2 font-semibold text-white">
          Voltar à página inicial
        </Link>
      </div>
    </main>
  );
}

export default Funcionalidade;
