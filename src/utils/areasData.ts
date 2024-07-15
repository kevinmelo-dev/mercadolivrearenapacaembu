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
  {
    id: 6,
    name: 'Salão Capivari',
    abbr: 'Salão Capivari',
    mercadoLivre: false,
    location: '/img/areas/salao_capivari/location.png',
    description: `Localizado no térreo do Edifício Multifuncional, com vista para o Largo Pacaembu e o campo, o Salão Capivari possui pé direito duplo e foi projetado para oferecer eventos exclusivos, além de experiências imersivas para toda a família.`,
    status: 50,
    preview: '/img/areas/salao_capivari/preview_01.png',
  },
  {
    id: 7,
    name: 'Esplanada',
    abbr: 'Esplanada',
    mercadoLivre: false,
    location: '/img/areas/esplanada/location.png',
    description: `Retomando o papel original, a esplanada concebida no projeto da Concha Acústica voltará a conectar as áreas do clube e do campo. Este será um local privilegiado devido ao alto fluxo de pessoas, ideal para ativações de marca e eventos de múltiplos formatos.`,
    status: 50,
    preview: '/img/areas/esplanada/preview_01.png',
  },
  {
    id: 8,
    name: 'Mercado Pago Hall',
    abbr: 'Mercado Pago Hall',
    mercadoLivre: false,
    imgName: '/img/areas/mercadopago_hall/icon.png',
    location: '/img/areas/mercadopago_hall/location.png',
    description: `O Mercado Pago Hall foi desenvolvido para ser a melhor opção para a realização dos principais eventos do país.

    Em uma localização privilegiada e de fácil acesso, este espaço é ideal para receber shows, feiras, eventos corporativos e convenções.

    Localizado no subsolo do novo Edifício Multifuncional, o público pode usufruir de uma experiência única com a integração de um hotel, que oferece vista para o campo, o espaço de eventos e alta gastronomia.`,
    status: 90,
    preview: '/img/areas/mercadopago_hall/preview_01.png',
  },
  {
    id: 9,
    name: 'Camarotes Mercado Livre',
    abbr: 'Camarotes Mercado Livre',
    mercadoLivre: true,
    location: '/img/areas/camarotes/location.png',
    description: `O Mercado Pago Hall foi desenvolvido para ser a melhor opção para a realização dos principais eventos do país.

    Em uma localização privilegiada e de fácil acesso, este espaço é ideal para receber shows, feiras, eventos corporativos e convenções.

    Localizado no subsolo do novo Edifício Multifuncional, o público pode usufruir de uma experiência única com a integração de um hotel, que oferece vista para o campo, o espaço de eventos e alta gastronomia.`,
    status: 50,
    preview: '/img/areas/camarotes/preview_01.png',
  },
  {
    id: 10,
    name: 'Salão Itápolis',
    abbr: 'Salão Itápolis',
    mercadoLivre: false,
    location: '/img/areas/salao_itapolis/location.png',
    description: `O Salão Itápolis é um espaço de infinitas possibilidades, podendo receber eventos sociais como casamentos, festas, formaturas, e eventos corporativos de menor porte.`,
    status: 50,
    preview: '/img/areas/salao_itapolis/preview_01.png',
  },
  {
    id: 11,
    name: 'Salão Nobre',
    abbr: 'Salão Nobre',
    mercadoLivre: false,
    location: '/img/areas/salao_nobre/location.png',
    description: `O Mercado Pago Hall foi desenvolvido para ser a melhor opção para a realização dos principais eventos do país.

    Em uma localização privilegiada e de fácil acesso, este espaço é ideal para receber shows, feiras, eventos corporativos e convenções.

    Localizado no subsolo do novo Edifício Multifuncional, o público pode usufruir de uma experiência única com a integração de um hotel, que oferece vista para o campo, o espaço de eventos e alta gastronomia.`,
    status: 50,
    preview: '/img/areas/salao_nobre/preview_01.png',
  },
  {
    id: 12,
    name: 'Pista de Atletismo',
    abbr: 'Pista de Atletismo',
    mercadoLivre: false,
    location: '/img/areas/pista_atletismo/location.png',
    description: `O Mercado Pago Hall foi desenvolvido para ser a melhor opção para a realização dos principais eventos do país.

    Em uma localização privilegiada e de fácil acesso, este espaço é ideal para receber shows, feiras, eventos corporativos e convenções.

    Localizado no subsolo do novo Edifício Multifuncional, o público pode usufruir de uma experiência única com a integração de um hotel, que oferece vista para o campo, o espaço de eventos e alta gastronomia.`,
    status: 50,
    preview: '/img/areas/pista_atletismo/preview_01.png',
  },
  {
    id: 13,
    name: 'Mercado Livre Arena Pacaembu',
    abbr: 'Mercado Livre Arena Pacaembu',
    mercadoLivre: false,
    imgName: '/img/areas/mercadolivre_arenapacaembu/logo.png',
    location: '/img/areas/mercadolivre_arenapacaembu/location.png',
    description: `Considerado a segunda casa de todas as torcidas, o Mercado Livre Arena Pacaembu foi uma das sedes na Copa do Mundo de 1950, recebeu a abertura dos Jogos PanAmericanos de 1963 e foi palco de diversas finais históricas de campeonatos nacionais e internacionais.

    Um Estádio clássico da década de 40, modernizado para os tempos atuais, oferecendo muito mais conforto e acessibilidade para o público.`,
    status: 80,
    preview: '/img/areas/mercadolivre_arenapacaembu/preview_01.png',
  },
  {
    id: 14,
    name: 'Fachada da Arena',
    abbr: 'Fachada da Arena',
    mercadoLivre: false,
    location: '/img/areas/fachada/location.png',
    description: `Estádio Municipal Paulo Machado de Carvalho, o Pacaembu, foi construída e teve seu projeto arquitetado pela construtora Severo e Villares. Sua construção se iniciou em 1936 e foi inaugurado dia 27 de abril de 1940.`,
    status: 50,
    preview: '/img/areas/fachada/preview_01.png',
  },
];

export default areasData;
