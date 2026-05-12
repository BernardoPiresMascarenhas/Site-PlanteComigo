export type Project = {
  slug: string;
  num: string;
  title: string;
  category: string;
  year: string;
  location: string;
  services: string[];
  tags: string[];
  description: string;
  longDescription: string[];
  quote?: string;
  coverSrc: string;
  photos: {
    src: string;
    alt: string;
    aspect: "landscape" | "portrait";
  }[];
};

export const projects: Project[] = [
  {
    slug: "automovel-club",
    num: "01",
    title: "Automóvel Club",
    category: "Paisagismo corporativo",
    year: "2022",
    location: "Belo Horizonte, MG",
    services: ["Criação", "Implementação"],
    tags: ["Paisagismo corporativo", "Projeto exclusivo", "Implementação"],
    description:
      "Um projeto que une a história e sofisticação do Automóvel Club com a linguagem contemporânea do paisagismo.",
    longDescription: [
      "Um projeto que une a história e a sofisticação do Automóvel Club com a linguagem contemporânea do paisagismo. Espécies selecionadas criam volumes e texturas que respeitam a arquitetura do espaço enquanto trazem vida e movimento ao ambiente.",
      "Na fase de criação, fizemos um levantamento completo do espaço, estudando a incidência de luz, o fluxo de pessoas e a identidade visual do local para propor uma composição que fosse coerente com a tradição da instituição e ao mesmo tempo atual.",
      "A implementação foi conduzida pela nossa equipe em um período definido, garantindo previsibilidade e organização em cada etapa — do preparo do solo à escolha final dos adornos.",
    ],
    quote:
      "O projeto buscou criar um diálogo entre o ambiente construído e a natureza — onde cada planta tem uma função estética e simbólica.",
    coverSrc: "/auto01.png",
    photos: [
      { src: "/auto01.png", alt: "Automóvel Club — Vista geral do paisagismo", aspect: "landscape" },
      { src: "/auto2.png", alt: "Automóvel Club — Detalhe das espécies", aspect: "portrait" },
      { src: "/auto3.png", alt: "Automóvel Club — Composição verde", aspect: "landscape" },
      { src: "/auto4.png", alt: "Automóvel Club — Composição vertical", aspect: "portrait" },
      { src: "/auto7.png", alt: "Automóvel Club — Área de convivência", aspect: "landscape" },
    ],
  },
  {
    slug: "casacor-2019",
    num: "02",
    title: "Casacor 2019",
    category: "Evento & Design de Interiores Verdes",
    year: "2019",
    location: "Belo Horizonte, MG",
    services: ["Consultoria", "Criação", "Curadoria botânica"],
    tags: ["Jardim interno", "Consultoria", "Curadoria botânica"],
    description:
      "Participação no maior evento de arquitetura e design da América Latina, com um ambiente que traduziu em plantas e formas a essência da Plante Comigo.",
    longDescription: [
      "Participação no maior evento de arquitetura e design da América Latina. O projeto traduziu em plantas, volumes e texturas a essência da marca Plante Comigo — equilíbrio entre o espaço urbano e o desenvolvimento de um ambiente sustentável.",
      "O ambiente criado para a Casacor explorou a dimensão sensorial das plantas: o toque das folhas, o perfume das flores e a variação de tons de verde compondo uma experiência imersiva para os visitantes.",
      "Cada espécie foi posicionada de forma intencional, criando camadas de altura, textura e cor que conduzem o olhar e convidam à contemplação — uma curadoria botânica com olhar de design.",
    ],
    quote:
      "A Casacor foi uma oportunidade de mostrar que o paisagismo é também linguagem — uma forma de comunicar valores e criar experiências memoráveis.",
    coverSrc: "/casacor0.png",
    photos: [
      { src: "/casacor1.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/casacor5.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/casacor4.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/casacor3.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/casacor2.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "casa-mangabeiras",
    num: "03",
    title: "Casa Mangabeiras",
    category: "Projeto paisagístico em residência",
    year: "2023",
    location: "Belo Horizonte, MG",
    services: ["Criação", "Implementação", "Manutenção"],
    tags: ["Residencial", "Área Externa", "Jardim Tropical"],
    description:
      "Um oásis particular no bairro Mangabeiras, integrando a arquitetura da casa com a exuberância da flora local.",
    longDescription: [
      "Para a Casa Mangabeiras, o desafio foi criar um ambiente externo que conversasse de forma fluida com a arquitetura imponente da residência. Utilizamos uma paleta rica em texturas tropicais.",
      "A criação priorizou espécies de grande porte para gerar privacidade e conforto térmico, enquanto o sub-bosque foi preenchido com folhagens densas e esculturais.",
      "Na implementação, o cuidado com a topografia do terreno garantiu um resultado natural, transformando a área de lazer em um verdadeiro refúgio verde."
    ],
    quote: "A natureza não apenas contorna a casa, ela a abraça e redefine a forma de viver o espaço exterior.",
    coverSrc: "/mangabeiras0.png",
    photos: [
      { src: "/mangabeiras2.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/mangabeiras1.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/mangabeiras5.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/mangabeiras3.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/mangabeiras6.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "hospital-sao-lucas",
    num: "04",
    title: "Hospital São Lucas",
    category: "Projeto paisagístico em área comercial",
    year: "2021",
    location: "Belo Horizonte, MG",
    services: ["Criação", "Implementação", "Manutenção"],
    tags: ["Comercial", "Jardim Terapêutico", "Institucional"],
    description:
      "A cura através da natureza: jardins terapêuticos e ambientes de acolhimento para pacientes e profissionais.",
    longDescription: [
      "Em um ambiente hospitalar, o paisagismo assume uma função terapêutica vital. Para o Hospital São Lucas, projetamos áreas que oferecem alívio e contemplação.",
      "Criamos jardins internos, áreas de descanso com vegetação suave e corredores verdes que quebram a frieza institucional, proporcionando um ambiente mais humano.",
      "A escolha das plantas considerou rígidos critérios de fitossanidade e manutenção, priorizando espécies sem toxicidade e sem liberação de pólen excessivo."
    ],
    quote: "A natureza possui um poder restaurador que atua silenciosamente no bem-estar de quem a observa.",
    coverSrc: "/hospital0.png",
    photos: [
      { src: "/hospital3.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/hospital2.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/hospital5.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/hospital4.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/hospital1.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "cobertura-vale-do-sereno",
    num: "05",
    title: "Cobertura Vale do Sereno",
    category: "Projeto paisagístico em residência",
    year: "2023",
    location: "Nova Lima, MG",
    services: ["Criação", "Implementação"],
    tags: ["Residencial", "Cobertura", "Vasos de Design"],
    description:
      "Paisagismo em altura: trazendo a natureza para uma cobertura sofisticada, com foco em espécies resistentes a ventos e alta insolação.",
    longDescription: [
      "Projetar para coberturas exige um conhecimento técnico específico sobre a ação dos ventos e a intensidade solar. Neste projeto no Vale do Sereno, o verde foi elevado aos ares.",
      "Optamos por uma composição de vasos de terracota e cerâmica de alta qualidade, abrigando espécies esculturais como oliveiras e cactos, que suportam bem o microclima do local.",
      "O resultado é uma extensão da área de estar, onde o horizonte se mistura com o verde cuidadosamente planejado."
    ],
    quote: "Trazer o verde para as alturas é criar um respiro orgânico em meio à densidade urbana.",
    coverSrc: "/sereno2.png",
    photos: [
      { src: "/sereno3.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/sereno5.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/sereno4.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/sereno1.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/sereno0.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "casa-retiro-do-chale",
    num: "06",
    title: "Casa Retiro do Chalé",
    category: "Projeto paisagístico em residência",
    year: "2022",
    location: "Brumadinho, MG",
    services: ["Criação", "Implementação"],
    tags: ["Residencial", "Serra", "Integração Natural"],
    description:
      "Intervenção sutil que respeita e valoriza a paisagem exuberante e nativa do Retiro do Chalé.",
    longDescription: [
      "Neste refúgio na serra, o objetivo foi criar um paisagismo que não competisse com a mata ao redor, mas que servisse como uma transição suave entre a construção e a natureza selvagem.",
      "Trabalhamos com o conceito de jardim naturalista, utilizando gramíneas e espécies rústicas que exigem pouca manutenção e se adaptam perfeitamente ao clima da montanha.",
      "O projeto de implementação respeitou a topografia original, inserindo caminhos de pedra que convidam à caminhada e contemplação."
    ],
    quote: "O melhor paisagismo em áreas de serra é aquele que parece sempre ter estado ali.",
    coverSrc: "/chale3.png",
    photos: [
      { src: "/chale0.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/chale1.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/chale4.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/chale5.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/chale2.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "casa-passargada",
    num: "07",
    title: "Casa Passargada",
    category: "Projeto paisagístico em residência",
    year: "2024",
    location: "Nova Lima, MG",
    services: ["Criação", "Implementação", "Manutenção"],
    tags: ["Residencial", "Contemporâneo", "Minimalista"],
    description:
      "Linhas limpas e escolha botânica precisa marcam este projeto de paisagismo contemporâneo.",
    longDescription: [
      "A Casa Passargada apresenta uma arquitetura minimalista, o que exigiu um paisagismo igualmente preciso. O foco foi a curadoria botânica refinada.",
      "Criamos pontos focais com plantas de forte apelo escultural, emolduradas por forrações rasteiras e limpas. O verde atua como uma galeria de arte viva.",
      "A paleta de cores foca nos diferentes tons de verde, promovendo um ambiente de calma e sofisticação."
    ],
    quote: "A simplicidade é o mais alto grau de sofisticação, e isso se reflete na escolha de cada espécie deste jardim.",
    coverSrc: "/passargada0.png",
    photos: [
      { src: "/passargada1.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/passargada4.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/passargada3.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/passargada2.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/passargada5.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "guaja-casa",
    num: "08",
    title: "GUAJA Casa",
    category: "Projeto paisagístico em área comercial",
    year: "2021",
    location: "Belo Horizonte, MG",
    services: ["Consultoria", "Criação", "Implementação"],
    tags: ["Comercial", "Biofilia", "Ambiente Criativo"],
    description:
      "Transformando um hub de inovação e criatividade através do design biofílico e da conexão com o verde.",
    longDescription: [
      "O GUAJA é um espaço de criatividade e colaboração. Nosso projeto visou introduzir o design biofílico para estimular o bem-estar e a produtividade dos frequentadores.",
      "Utilizamos composições pendentes, paredes verdes e vasos estratégicos para criar uma atmosfera de 'selva urbana' controlada, que acolhe e inspira.",
      "A implementação foi pensada para não interferir na dinâmica acelerada do espaço, garantindo que o verde se tornasse parte da infraestrutura criativa."
    ],
    quote: "A introdução da natureza em ambientes de trabalho não é luxo, é uma ferramenta essencial para a inovação.",
    coverSrc: "/guaja0.png",
    photos: [
      { src: "/guaja1.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/guaja2.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/guaja3.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/guaja4.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/guaja6.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "casa-glaura",
    num: "09",
    title: "Casa Glaura",
    category: "Projeto paisagístico em residência",
    year: "2022",
    location: "Ouro Preto, MG",
    services: ["Criação", "Implementação"],
    tags: ["Residencial", "Histórico", "Jardim de Inverno"],
    description:
      "Um diálogo entre a arquitetura de traços históricos e o frescor de um paisagismo afetivo e acolhedor.",
    longDescription: [
      "No distrito de Glaura, a casa carrega a memória e a estética da região. O paisagismo foi desenhado para abraçar essa história de forma afetiva.",
      "Trabalhamos com pátios internos e jardins de inverno, trazendo luz natural e espécies tradicionais que remetem à memória dos grandes quintais mineiros.",
      "A seleção de vasos cerâmicos artesanais complementou a atmosfera bucólica e charmosa da residência."
    ],
    quote: "Um jardim que respeita a memória do lugar constrói raízes ainda mais profundas.",
    coverSrc: "/glaura0.png",
    photos: [
      { src: "/glaura3.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/glaura2.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/glaura1.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/glaura4.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/glaura5.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "area-privativa-savassi",
    num: "10",
    title: "Área Privativa Savassi",
    category: "Projeto paisagístico em residência",
    year: "2023",
    location: "Belo Horizonte, MG",
    services: ["Criação", "Implementação", "Manutenção"],
    tags: ["Residencial", "Apartamento", "Urban Jungle"],
    description:
      "Otimização de espaço e criação de um oásis urbano no coração da Savassi.",
    longDescription: [
      "Áreas privativas em grandes centros urbanos são joias raras. Neste apartamento na Savassi, o objetivo foi maximizar o espaço útil sem abrir mão da densidade verde.",
      "Criamos jardins verticais e utilizamos floreiras sob medida para contornar os muros, trazendo privacidade e bloqueio acústico em relação à rua.",
      "A composição de plantas tropicais de meia-sombra garantiu que o ambiente permanecesse vibrante durante todo o ano."
    ],
    quote: "No centro da cidade, o verdadeiro luxo é abrir a porta e encontrar o próprio jardim.",
    coverSrc: "/savassi0.png",
    photos: [
      { src: "/savassi0.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/savassi1.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/savassi2.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/savassi3.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/savassi4.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "casa-retiro-das-pedras",
    num: "11",
    title: "Casa Retiro das Pedras",
    category: "Projeto paisagístico em residência",
    year: "2024",
    location: "Brumadinho, MG",
    services: ["Criação", "Implementação"],
    tags: ["Residencial", "Integração Natural", "Espécies Nativas"],
    description:
      "Paisagismo de impacto que dialoga com a imponência do condomínio Retiro das Pedras.",
    longDescription: [
      "Posicionada em um local com vista privilegiada, a Casa Retiro das Pedras pedia um paisagismo que servisse de moldura, e não de obstáculo.",
      "Utilizamos espécies nativas e adaptadas ao vento constante da região, trabalhando texturas que se movimentam e ganham vida com a brisa.",
      "O projeto de iluminação paisagística foi fundamental para destacar as formas estruturais das plantas durante a noite."
    ],
    quote: "A moldura perfeita para uma vista definitiva é aquela desenhada com vida e texturas naturais.",
    coverSrc: "/pedras0.png",
    photos: [
      { src: "/pedras1.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/pedras2.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/pedras4.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/pedras5.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/pedras3.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "casa-bandeirantes",
    num: "12",
    title: "Casa Bandeirantes",
    category: "Projeto paisagístico em residência",
    year: "2022",
    location: "Belo Horizonte, MG",
    services: ["Criação", "Implementação", "Manutenção"],
    tags: ["Residencial", "Pampulha", "Clássico Contemporâneo"],
    description:
      "A fluidez das formas em um paisagismo pensado para a tradicional região da Pampulha.",
    longDescription: [
      "Localizada no bairro Bandeirantes, este projeto buscou inspiração na organicidade típica da região da Pampulha, traduzindo isso para um paisagismo contemporâneo.",
      "Os jardins foram desenhados com formas sinuosas, maciços de cores vibrantes e um trabalho cuidadoso de gramados impecáveis.",
      "Integramos o projeto de áreas molhadas (espelhos d'água e piscinas) com a escolha de vegetação, criando um microclima agradável e visualmente relaxante."
    ],
    quote: "A fluidez do jardim acompanha o ritmo tranquilo da arquitetura que o rodeia.",
    coverSrc: "/bandeirantes1.png",
    photos: [
      { src: "/bandeirantes0.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/bandeirantes2.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/bandeirantes5.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/bandeirantes4.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/bandeirantes3.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  },
  {
    slug: "apartamento-serra",
    num: "13",
    title: "Apartamento Serra",
    category: "Projeto paisagístico em residência",
    year: "2023",
    location: "Belo Horizonte, MG",
    services: ["Criação", "Curadoria botânica"],
    tags: ["Residencial", "Indoor", "Curadoria"],
    description:
      "Elegância botânica indoor: plantas selecionadas para complementar o design de interiores.",
    longDescription: [
      "O desafio no Apartamento Serra foi integrar a natureza estritamente em um ambiente indoor, conversando com um design de interiores sofisticado.",
      "A curadoria focou em espécies de comportamento contido e estética apurada, como Ficus lyrata, pacovás e dracenas, dispostas em cachepôs de design assinado.",
      "Cada planta foi posicionada como uma verdadeira escultura viva, valorizando cantos de leitura e áreas de convivência."
    ],
    quote: "O verde indoor transforma a casa em um lar, trazendo vitalidade para o dia a dia.",
    coverSrc: "/serra0.png",
    photos: [
      { src: "/serra1.png", alt: "Casacor 2019 — Ambiente principal", aspect: "landscape" },
      { src: "/serra5.png", alt: "Casacor 2019 — Composição botânica", aspect: "portrait" },
      { src: "/serra7.png", alt: "Casacor 2019 — Plantas de interior", aspect: "landscape" },
      { src: "/serra2.png", alt: "Casacor 2019 — Detalhe verde", aspect: "portrait" },
      { src: "/serra3.png", alt: "Casacor 2019 — Vista do espaço", aspect: "landscape" },
    ],
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
