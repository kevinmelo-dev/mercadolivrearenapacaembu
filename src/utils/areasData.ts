import { Area } from './types';

const areasData: Area[] = [
  {
    id: 1,
    name: 'Piscina Olímpica Mercado Livre',
    abbr: 'Piscina Olímpica',
    mercadoLivre: true,
    location: '/img/areas/piscina_olimpica/location.png',
    description: `Piscina Olímpica Mercado Livre no Pacaembu é um dos lugares mais icônicos do Complexo, que ao longo dos anos, se tornou um ponto de encontro para atletas, entusiastas e famílias. 

      Ela foi totalmente revitalizada e será executada pela empresa Fluidra, líder na indústria global de piscinas.

      Ela permanecerá pública para uso da população e também estará disponível para a realização de eventos e competições.`,
    status: 70,
    checklist: [
      { name: 'Instalação das raias', completed: true },
      { name: 'Instalação dos pódios', completed: true },
      { name: 'Limpeza e tratamento', completed: true },
      { name: 'Escavação do entorno', completed: true },
      { name: 'Estrutura da arquibancada', completed: true },
      { name: 'Tratamento da água', completed: false },
      { name: 'Estrutura dos vestiários', completed: false },
    ],
    preview: '/img/areas/piscina_olimpica/preview_01.png',
  },
  {
    id: 2,
    name: 'Centro de Tênis Mercado Livre',
    abbr: 'Centro de Tênis',
    mercadoLivre: true,
    location: '/img/areas/tenis_externo/location.png',
    description: `Este espaço está preparado para receber treinos, scompetições, eventos de menor porte, como pocket shows, apresentações culturais e artísticas, além de ensaios e gravações comerciais.`,
    status: 70,
    preview: '/img/areas/tenis_externo/preview_01.png',
  },
  {
    id: 3,
    name: 'Ginásio Poliesportivo Mercado Livre',
    abbr: 'Ginásio Poliesportivo',
    mercadoLivre: true,
    location: '/img/areas/ginasio_poliesportivo/location.png',
    description: `Sua versatilidade esportiva e estrutural permite a prática de diversas modalidades, bem como a realização de pequenos eventos corporativos, feiras e festas.`,
    status: 70,
    preview: '/img/areas/ginasio_poliesportivo/preview_01.png',
  },
  {
    id: 4,
    name: 'Largo Pacaembu',
    abbr: 'Largo Pacaembu',
    mercadoLivre: false,
    location: '/img/areas/largo_pacaembu/location.png',
    description: `O Mercado Pago Hall foi desenvolvido para ser a melhor opção para a realização dos principais eventos do país.

    Em uma localização privilegiada e de fácil acesso, este espaço é ideal para receber shows, feiras, eventos corporativos e convenções.

    Localizado no subsolo do novo Edifício Multifuncional, o público pode usufruir de uma experiência única com a integração de um hotel, que oferece vista para o campo, o espaço de eventos e alta gastronomia.`,
    status: 50,
    preview: '/img/areas/largo_pacaembu/preview_01.png',
  },
  {
    id: 5,
    name: 'Edifício Multifuncional',
    abbr: 'Ed. Multifuncional',
    mercadoLivre: false,
    location: '/img/areas/edificio_multifuncional/location.png',
    description: `O Mercado Pago Hall foi desenvolvido para ser a melhor opção para a realização dos principais eventos do país.

    Em uma localização privilegiada e de fácil acesso, este espaço é ideal para receber shows, feiras, eventos corporativos e convenções.

    Localizado no subsolo do novo Edifício Multifuncional, o público pode usufruir de uma experiência única com a integração de um hotel, que oferece vista para o campo, o espaço de eventos e alta gastronomia.`,
    status: 50,
    preview: '/img/areas/edificio_multifuncional/preview_01.png',
  },
];

export default areasData;
