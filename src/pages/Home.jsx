import Desafio from '../components/Desafio';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PublicoAlvo from '../components/PublicoAlvo';
import Galeria from '../components/Galeria';
import Equipe from '../components/Equipe';

function Home() {
  const cardsData = [
    {
      id: 1,
      titulo: 'Flash Frontal',
      texto: 'Uma reengenharia do sistema de iluminação para selfies e videochamadas. O algoritmo de Flash Adaptativo monitora os níveis de lux do ambiente em tempo real para ajustar a intensidade da luz emitida pela tela. Com três modos de operação — manual, automático e desativado — a funcionalidade assegura a exposição perfeita da cena, simulando o comportamento de estúdios fotográficos profissionais via software.',
      imagem: '/images/card-flash.png',
      alt: 'Imagem de uma mão segurando um celular com a tela iluminada.',
      link: '/funcionalidade/flash'
    },
    {
      id: 2,
      titulo: 'Nuvem',
      texto: 'Eleve o potencial do seu dispositivo com nossa infraestrutura de processamento remoto. De forma opcional e segura, o JOVI VisionAI utiliza servidores de alta performance para realizar a recuperação avançada de detalhes e o refinamento estético de nível profissional. Uma solução que une o poder da nuvem à liberdade de escolha do usuário, garantindo resultados superiores com um simples clique.',
      imagem: '/images/card-nuvem.png',
      alt: 'Imagem de uma nuvem conectada a diversos dispositivos.',
      link: '/funcionalidade/nuvem'
    },
    {
      id: 3,
      titulo: 'Inteligência Artificial',
      texto: 'O JOVI VisionAI é um ecossistema de visão computacional de alto desempenho que redefine a convergência entre hardware e inteligência artificial. Através de modelos de aprendizado de máquina otimizados para execução on-device, oferecemos processamento de imagem em tempo real com total privacidade. Nossa arquitetura permite não apenas o refinamento estético automático, mas também o reconhecimento inteligente de padrões, criando uma jornada de fotografia assistida e totalmente personalizada sob os pilares da Total Experience (TX).',
      imagem: '/images/card-ia.png',
      alt: 'Imagem do rosto de um robô humanoide.',
      link: '/funcionalidade/ia'
    }
  ];

  return (
    <main>
      <Desafio />
      <Hero />
      <section className="flex flex-col gap-2">
        {cardsData.map((card) => (
          <FeatureCard
            key={card.id}
            id={card.id}
            titulo={card.titulo}
            texto={card.texto}
            imagem={card.imagem}
            alt={card.alt}
            link={card.link}
          />
        ))}
      </section>
      <PublicoAlvo />
      <Galeria />
      <Equipe />
    </main>
  );
}

export default Home;
