export interface BlogArticle {
  id: number;
  slug: string;
  titlePt: string;
  titleEn: string;
  excerptPt: string;
  excerptEn: string;
  contentPt: string;
  contentEn: string;
  author: string;
  featuredImage: string;
  featuredImageAlt?: string;
  category: string;
  publishedAt: string;
  metaDescriptionPt?: string;
  metaDescriptionEn?: string;
  keywordsPt?: string;
  keywordsEn?: string;
  tags?: string;
}

export const staticBlogArticles: BlogArticle[] = [
  {
    id: 25,
    slug: "certificacao-marca-acores-amigo-natureza",
    titlePt: "Qualidade e Sustentabilidade com Selo Oficial: A Nossa Certificação \"Marca Açores\" e \"Amigo da Natureza\"",
    titleEn: "Quality and Sustainability with Official Seal: Our \"Marca Açores\" and \"Friend of Nature\" Certification",
    excerptPt: "Na Azores4fun, acreditamos que o turismo de excelência deve caminhar de mãos dadas com a valorização do que é nosso e a proteção do meio ambiente.",
    excerptEn: "At Azores4fun, we believe that excellent tourism must go hand in hand with valuing what is ours and protecting the environment.",
    contentPt: `Na Azores4fun, acreditamos que o turismo de excelência deve caminhar de mãos dadas com a valorização do que é nosso e a proteção do meio ambiente. Por isso, temos orgulho em partilhar que somos uma empresa certificada pela **Marca Açores** e distinguida como **Amigo da Natureza**.

## O que é a Marca Açores?

A Marca Açores é uma certificação oficial que atesta a origem açoriana e a qualidade superior de produtos e serviços. Esta marca é atribuída a empresas que cumprem rigorosos critérios de qualidade, autenticidade e ligação à identidade regional.

### Porque é importante?

- **Garantia de Qualidade**: Os serviços certificados passam por avaliações rigorosas
- **Valorização Local**: Promove o que é genuinamente açoriano
- **Confiança do Cliente**: Selo reconhecido que transmite credibilidade
- **Compromisso com a Excelência**: Melhoria contínua dos nossos serviços

## Amigo da Natureza: O Nosso Compromisso Ambiental

A distinção "Amigo da Natureza" (Portaria n.º 118/2023) reconhece empresas que demonstram uma gestão ambiental proativa e cumprem rigorosas boas práticas sustentáveis.

### As nossas práticas sustentáveis incluem:

- **Transporte Elétrico**: Carrinha 100% elétrica para tours e transfers
- **Compensação de Carbono**: Plantação anual de árvores na Mata Azores4fun
- **Eficiência Energética**: Lâmpadas de baixo consumo e energia solar
- **Gestão da Água**: Sistemas de poupança e recolha de águas pluviais
- **Economia Circular**: Materiais biodegradáveis e reciclagem

## O Nosso Compromisso Contínuo

Estas certificações não são um ponto de chegada, mas sim o reconhecimento de um caminho que continuamos a percorrer todos os dias. Monitorizamos constantemente os nossos consumos e impacto ambiental, procurando sempre formas de melhorar.

Quando escolhe a Azores4fun, está a escolher uma empresa que valoriza a qualidade, a autenticidade açoriana e a proteção do nosso ambiente único.`,
    contentEn: `At Azores4fun, we believe that excellent tourism must go hand in hand with valuing what is ours and protecting the environment. That's why we are proud to share that we are a company certified by **Marca Açores** and distinguished as **Friend of Nature**.

## What is Marca Açores?

Marca Açores is an official certification that attests to the Azorean origin and superior quality of products and services. This brand is awarded to companies that meet rigorous criteria for quality, authenticity and connection to regional identity.

### Why is it important?

- **Quality Guarantee**: Certified services undergo rigorous evaluations
- **Local Appreciation**: Promotes what is genuinely Azorean
- **Customer Trust**: Recognized seal that conveys credibility
- **Commitment to Excellence**: Continuous improvement of our services

## Friend of Nature: Our Environmental Commitment

The "Friend of Nature" distinction (Decree n.º 118/2023) recognizes companies that demonstrate proactive environmental management and comply with rigorous sustainable best practices.

### Our sustainable practices include:

- **Electric Transport**: 100% electric van for tours and transfers
- **Carbon Offset**: Annual tree planting in the Azores4fun Forest
- **Energy Efficiency**: Low consumption bulbs and solar energy
- **Water Management**: Saving systems and rainwater collection
- **Circular Economy**: Biodegradable materials and recycling

## Our Ongoing Commitment

These certifications are not a destination, but rather the recognition of a path we continue to walk every day. We constantly monitor our consumption and environmental impact, always looking for ways to improve.

When you choose Azores4fun, you are choosing a company that values quality, Azorean authenticity and the protection of our unique environment.`,
    author: "Azores4fun",
    featuredImage: "/attached_assets/AF_ACO_SELO_NEG_PT_1767092255014.jpg",
    featuredImageAlt: "Selo Marca Açores - Certificado pela Natureza",
    category: "Sustentabilidade",
    publishedAt: "2024-12-30",
    metaDescriptionPt: "Descubra como a Azores4fun é certificada pela Marca Açores e distinguida como Amigo da Natureza, garantindo qualidade e sustentabilidade.",
    metaDescriptionEn: "Discover how Azores4fun is certified by Marca Açores and distinguished as Friend of Nature, ensuring quality and sustainability.",
    keywordsPt: "marca açores, amigo da natureza, certificação turismo, sustentabilidade açores, turismo responsável faial",
    keywordsEn: "marca acores, friend of nature, tourism certification, azores sustainability, responsible tourism faial",
    tags: "sustentabilidade,marca açores,amigo da natureza,certificação,qualidade,turismo responsável"
  },
  {
    id: 24,
    slug: "pegada-carbono-floresta",
    titlePt: "Viajar com Propósito: Como a Azores4fun está a Transformar a sua Pegada de Carbono em Floresta",
    titleEn: "Travel with Purpose: How Azores4fun is Transforming Your Carbon Footprint into Forest",
    excerptPt: "Viajar para os Açores é, para muitos, um sonho de ligação à natureza. Na Azores4fun, decidimos que não bastava apenas oferecer aventuras; era preciso cuidar do cenário onde elas acontecem.",
    excerptEn: "Traveling to the Azores is, for many, a dream of connecting with nature. At Azores4fun, we decided that it wasn't enough to just offer adventures; we needed to take care of the scenery where they happen.",
    contentPt: `Viajar para os Açores é, para muitos, um sonho de ligação à natureza. Na Azores4fun, decidimos que não bastava apenas oferecer aventuras; era preciso cuidar do cenário onde elas acontecem. Por isso, criámos a **Mata Azores4fun** — a nossa floresta de compensação carbónica.

## A Iniciativa: De Pegada a Floresta

Todos os anos, plantamos Criptomérias (a árvore emblemática dos Açores) para compensar as emissões de CO2 geradas pelas viagens dos nossos hóspedes até à ilha do Faial.

### Como funciona?

1. **Calculamos a pegada**: Estimamos as emissões médias de uma viagem até aos Açores
2. **Plantamos árvores**: Cada árvore absorve CO2 ao longo da sua vida
3. **Criamos floresta**: A Mata Azores4fun cresce a cada ano que passa
4. **Preservamos biodiversidade**: A floresta torna-se habitat para espécies locais

## Mais do que Compensação

A nossa abordagem vai além da simples compensação de carbono:

- **Sem herbicidas**: Não usamos químicos nas nossas instalações
- **Materiais biodegradáveis**: As bolas de Paintball são eco-friendly
- **Transporte elétrico**: Carrinha 100% elétrica para tours
- **Economia local**: Preferimos produtos e fornecedores locais

## O Impacto Real

Cada hóspede que nos visita contribui para o crescimento da nossa floresta. Não é apenas uma viagem — é um investimento no futuro do nosso planeta.

### A Mata Azores4fun representa:

- Centenas de árvores plantadas
- Toneladas de CO2 compensadas
- Um legado verde para as gerações futuras
- Habitat preservado para a fauna local

## Junte-se a Nós

Quando escolhe a Azores4fun, não está apenas a escolher uma experiência turística. Está a fazer parte de um movimento que acredita que é possível viajar com propósito, deixando o mundo melhor do que o encontrámos.

Venha conhecer a nossa floresta. Venha plantar connosco o futuro.`,
    contentEn: `Traveling to the Azores is, for many, a dream of connecting with nature. At Azores4fun, we decided that it wasn't enough to just offer adventures; we needed to take care of the scenery where they happen. That's why we created the **Azores4fun Forest** — our carbon offset forest.

## The Initiative: From Footprint to Forest

Every year, we plant Cryptomeria trees (the emblematic tree of the Azores) to offset the CO2 emissions generated by our guests' trips to Faial island.

### How does it work?

1. **We calculate the footprint**: We estimate the average emissions of a trip to the Azores
2. **We plant trees**: Each tree absorbs CO2 throughout its life
3. **We create forest**: The Azores4fun Forest grows every year
4. **We preserve biodiversity**: The forest becomes habitat for local species

## More than Compensation

Our approach goes beyond simple carbon offsetting:

- **No herbicides**: We don't use chemicals in our facilities
- **Biodegradable materials**: Paintball balls are eco-friendly
- **Electric transport**: 100% electric van for tours
- **Local economy**: We prefer local products and suppliers

## The Real Impact

Every guest who visits us contributes to the growth of our forest. It's not just a trip — it's an investment in the future of our planet.

### The Azores4fun Forest represents:

- Hundreds of trees planted
- Tons of CO2 offset
- A green legacy for future generations
- Preserved habitat for local fauna

## Join Us

When you choose Azores4fun, you're not just choosing a tourist experience. You're becoming part of a movement that believes it's possible to travel with purpose, leaving the world better than we found it.

Come see our forest. Come plant the future with us.`,
    author: "Azores4fun",
    featuredImage: "/attached_assets/plantio_criptomerias_1767092159031.jpg",
    featuredImageAlt: "Plantio de Criptomérias na Mata Azores4fun",
    category: "Sustentabilidade",
    publishedAt: "2024-12-30",
    metaDescriptionPt: "Descubra como a Azores4fun está a compensar as emissões de CO2 dos seus hóspedes através da plantação de árvores na Mata Azores4fun, no Faial.",
    metaDescriptionEn: "Discover how Azores4fun is offsetting CO2 emissions from its guests by planting trees in the Azores4fun Forest, in Faial.",
    keywordsPt: "sustentabilidade açores, turismo responsável, compensação carbono, reflorestação faial, mata azores4fun, criptomérias",
    keywordsEn: "azores sustainability, responsible tourism, carbon offset, faial reforestation, azores4fun forest, cryptomeria",
    tags: "sustentabilidade,ambiente,CO2,reflorestação,turismo responsável"
  },
  {
    id: 18,
    slug: "tours-carrinha-ilha-faial",
    titlePt: "Tours de Carrinha na Ilha do Faial",
    titleEn: "Van Tours on Faial Island",
    excerptPt: "Explorar a Ilha do Faial é mergulhar num dos cenários mais impressionantes dos Açores. Com os tours de carrinha 100% elétrica da Azores4Fun, descobre cada recanto desta ilha mágica.",
    excerptEn: "Exploring Faial Island is diving into one of the most impressive settings in the Azores. With Azores4Fun 100% electric van tours, discover every corner of this magical island.",
    contentPt: `Explorar a Ilha do Faial é mergulhar num dos cenários mais impressionantes dos Açores. Com os tours de carrinha 100% elétrica da Azores4Fun, descobre cada recanto desta ilha mágica — desde a majestosa Caldeira até à paisagem lunar do Vulcão dos Capelinhos.

## Porquê escolher os nossos tours?

### Transporte 100% Elétrico
A nossa carrinha de 9 lugares é totalmente elétrica, garantindo uma experiência silenciosa e amiga do ambiente. Viajar de forma sustentável nunca foi tão confortável.

### Guia Local Experiente
Conhecemos a ilha como a palma da mão. Cada tour inclui histórias, curiosidades e os melhores spots para fotografias que só um local conhece.

### Flexibilidade Total
Personalizamos o itinerário de acordo com os teus interesses. Quer passes mais tempo na Caldeira ou prefiras explorar as praias escondidas, adaptamo-nos a ti.

## O que vais descobrir

### Caldeira do Faial
A impressionante cratera vulcânica com 2km de diâmetro e 400m de profundidade. Um dos pontos mais emblemáticos dos Açores.

### Vulcão dos Capelinhos
A paisagem lunar criada pela erupção de 1957-58. Um testemunho vivo da força da natureza e o Centro de Interpretação premiado.

### Miradouros Panorâmicos
Vistas deslumbrantes para o Pico, São Jorge e o canal. Cada paragem é uma oportunidade para fotografias inesquecíveis.

### Porto Pim e Marina da Horta
A beleza da baía histórica e a famosa marina, paragem obrigatória para velejadores de todo o mundo.

## Duração e Preços

Oferecemos tours de diferentes durações:
- **Tour Essencial** (2-3h): Os pontos mais icónicos
- **Tour Completo** (4-5h): Exploração aprofundada da ilha
- **Tour Personalizado** (tempo à escolha): Tu decides o que queres ver

Contacta-nos para preços atualizados e disponibilidade.`,
    contentEn: `Exploring Faial Island is diving into one of the most impressive settings in the Azores. With Azores4Fun 100% electric van tours, discover every corner of this magical island — from the majestic Caldeira to the lunar landscape of Capelinhos Volcano.

## Why choose our tours?

### 100% Electric Transport
Our 9-seater van is fully electric, ensuring a quiet and environmentally friendly experience. Sustainable travel has never been so comfortable.

### Experienced Local Guide
We know the island like the back of our hand. Each tour includes stories, curiosities and the best photo spots that only a local knows.

### Total Flexibility
We customize the itinerary according to your interests. Whether you want to spend more time at Caldeira or prefer to explore hidden beaches, we adapt to you.

## What you will discover

### Faial Caldeira
The impressive volcanic crater with 2km diameter and 400m depth. One of the most emblematic points of the Azores.

### Capelinhos Volcano
The lunar landscape created by the 1957-58 eruption. A living testimony to the force of nature and the award-winning Interpretation Center.

### Panoramic Viewpoints
Stunning views of Pico, São Jorge and the channel. Each stop is an opportunity for unforgettable photos.

### Porto Pim and Horta Marina
The beauty of the historic bay and the famous marina, a mandatory stop for sailors from around the world.

## Duration and Prices

We offer tours of different durations:
- **Essential Tour** (2-3h): The most iconic spots
- **Complete Tour** (4-5h): In-depth exploration of the island
- **Custom Tour** (your choice): You decide what you want to see

Contact us for updated prices and availability.`,
    author: "Azores4fun",
    featuredImage: "/attached_assets/20250615_114223_1766217619228.jpg",
    category: "Tours",
    publishedAt: "2025-11-16",
    metaDescriptionPt: "Tours de carrinha 100% elétrica na Ilha do Faial, Açores. Visite o Vulcão dos Capelinhos, Caldeira, miradouros panorâmicos. Transporte sustentável e ecológico.",
    metaDescriptionEn: "Electric van tours on Faial Island, Azores. Visit Capelinhos Volcano, Caldeira, panoramic viewpoints. Sustainable and ecological transport.",
    keywordsPt: "tours faial, carrinha elétrica açores, vulcão capelinhos, caldeira faial, turismo sustentável açores, passeios ilha faial",
    keywordsEn: "faial tours, electric van azores, capelinhos volcano, faial caldeira, sustainable tourism azores, faial island tours",
    tags: "tours, electric van, faial, capelinhos, caldeira, sustainable tourism"
  },
  {
    id: 17,
    slug: "jogos-estrategia-azores4fun",
    titlePt: "Jogos de Estratégia da Azores4Fun: Adrenalina, Diversão e Trabalho em Equipa",
    titleEn: "Azores4Fun Strategy Games: Adrenaline, Fun and Teamwork",
    excerptPt: "Na Azores4Fun, acreditamos que a melhor forma de viver experiências inesquecíveis é através do jogo, da adrenalina e da estratégia. Paintball, LaserTag, Gelblaster e Nerfs.",
    excerptEn: "At Azores4Fun, we believe that the best way to live unforgettable experiences is through games, adrenaline and strategy. Paintball, LaserTag, Gelblaster and Nerfs.",
    contentPt: `Na Azores4Fun, acreditamos que a melhor forma de viver experiências inesquecíveis é através do jogo, da adrenalina e da estratégia. Por isso, oferecemos uma variedade de atividades que combinam ação, trabalho em equipa e muita diversão.

## As Nossas Modalidades

### Paintball
O clássico jogo de marcação com bolas de tinta. Ideal para quem procura ação intensa e não se importa com um pouco de cor!
- **Idade mínima**: 10 anos
- **Impacto**: Médio
- **Inclui**: Todo o equipamento

### LaserTag
Tecnologia infravermelha para jogos táticos sem impacto físico. Perfeito para todas as idades!
- **Idade mínima**: 6 anos
- **Impacto**: Nenhum
- **Inclui**: Equipamento eletrónico

### Gelblaster
O meio-termo perfeito. Bolas de gel biodegradável com impacto suave.
- **Idade mínima**: 8 anos
- **Impacto**: Leve
- **Inclui**: Todo o equipamento

### Nerfs
Dardos de espuma para diversão garantida. Ideal para os mais pequenos!
- **Idade mínima**: Sem limite
- **Impacto**: Mínimo
- **Inclui**: Blasters e dardos

## Benefícios dos Jogos de Estratégia

1. **Trabalho em Equipa**: Comunicação e coordenação são essenciais
2. **Exercício Físico**: Movimentação constante durante o jogo
3. **Redução de Stress**: Libertação de endorfinas e adrenalina
4. **Pensamento Estratégico**: Planeamento e tomada de decisão rápida
5. **Criação de Memórias**: Momentos inesquecíveis com amigos e família

## Ideal Para

- Festas de aniversário
- Despedidas de solteiro/a
- Team building empresarial
- Eventos escolares
- Encontros de amigos
- Atividades em família

Contacta-nos para mais informações e reservas!`,
    contentEn: `At Azores4Fun, we believe that the best way to live unforgettable experiences is through games, adrenaline and strategy. That's why we offer a variety of activities that combine action, teamwork and lots of fun.

## Our Modalities

### Paintball
The classic marking game with paint balls. Ideal for those looking for intense action and don't mind a bit of color!
- **Minimum age**: 10 years
- **Impact**: Medium
- **Includes**: All equipment

### LaserTag
Infrared technology for tactical games without physical impact. Perfect for all ages!
- **Minimum age**: 6 years
- **Impact**: None
- **Includes**: Electronic equipment

### Gelblaster
The perfect middle ground. Biodegradable gel balls with soft impact.
- **Minimum age**: 8 years
- **Impact**: Light
- **Includes**: All equipment

### Nerfs
Foam darts for guaranteed fun. Ideal for the little ones!
- **Minimum age**: No limit
- **Impact**: Minimal
- **Includes**: Blasters and darts

## Benefits of Strategy Games

1. **Teamwork**: Communication and coordination are essential
2. **Physical Exercise**: Constant movement during the game
3. **Stress Reduction**: Release of endorphins and adrenaline
4. **Strategic Thinking**: Planning and quick decision making
5. **Creating Memories**: Unforgettable moments with friends and family

## Ideal For

- Birthday parties
- Bachelor/bachelorette parties
- Corporate team building
- School events
- Friends gatherings
- Family activities

Contact us for more information and reservations!`,
    author: "Azores4fun",
    featuredImage: "/attached_assets/6O6A4383-Aprimorado-NR_1766217417180.jpg",
    category: "Paintball",
    publishedAt: "2025-11-16",
    metaDescriptionPt: "Jogos de estratégia na Ilha do Faial: Paintball, LaserTag, Gelblaster e Nerfs. Diversão para todas as idades com equipamento profissional.",
    metaDescriptionEn: "Strategy games on Faial Island: Paintball, LaserTag, Gelblaster and Nerfs. Fun for all ages with professional equipment.",
    keywordsPt: "paintball faial, lasertag açores, gelblaster horta, nerfs açores, jogos estratégia faial, atividades grupo açores",
    keywordsEn: "faial paintball, azores lasertag, horta gelblaster, azores nerfs, faial strategy games, azores group activities",
    tags: "paintball, lasertag, gelblaster, nerfs, strategy games, faial"
  },
  {
    id: 6,
    slug: "beneficios-sociais-paintball",
    titlePt: "Para além da Adrenalina: Os Benefícios Sociais do Paintball",
    titleEn: "Beyond Adrenaline: The Social Benefits of Paintball",
    excerptPt: "Se és fã de desafios emocionantes e diversão ao ar livre, então o paintball é o jogo perfeito para ti. Além de proporcionar uma descarga de adrenalina, o paintball oferece uma série de benefícios sociais.",
    excerptEn: "If you're a fan of exciting challenges and outdoor fun, then paintball is the perfect game for you. In addition to providing an adrenaline rush, paintball offers a range of social benefits.",
    contentPt: `Se és fã de desafios emocionantes e diversão ao ar livre, então o paintball é o jogo perfeito para ti. Além de proporcionar uma descarga de adrenalina, o paintball oferece uma série de benefícios, especialmente no que diz respeito ao fortalecimento das relações interpessoais e à criação de laços inquebráveis entre a equipa.

## O Benefício Social do Paintball

O paintball, para além de ser uma atividade cheia de emoção e estratégia, é também uma ferramenta poderosa para fortalecer relações e criar laços duradouros.

### Fortalecimento do Espírito de Equipa

Ao participar de um jogo de paintball, tu és desafiado a trabalhar em equipa, a comunicar-te efetivamente com os teus companheiros e a tomar decisões rápidas em conjunto. Esta experiência de trabalho em equipa desenvolve habilidades de cooperação e liderança, criando um espírito de camaradagem e união.

### Criação de Laços para a Vida

O paintball proporciona uma experiência única que cria memórias duradouras. Através da partilha de desafios, vitórias e até mesmo derrotas, tu e os teus companheiros de equipa estabelecem um vínculo especial.

### Diversão e Redução do Stress

O paintball é uma atividade extremamente divertida e pode ser uma excelente forma de aliviar o stress. A adrenalina libertada durante o jogo ajuda a reduzir o stress e a aumentar a sensação de bem-estar.

## Notas Finais

O paintball não é apenas um jogo cheio de emoção, mas também uma experiência que fortalece a equipa e cria laços inquebráveis. Reúne a tua equipa, prepara-te para a aventura e desfruta dos benefícios sociais e emocionais que o paintball tem para oferecer.`,
    contentEn: `If you're a fan of exciting challenges and outdoor fun, then paintball is the perfect game for you. In addition to providing an adrenaline rush, paintball offers a range of benefits, especially when it comes to strengthening interpersonal relationships and creating unbreakable bonds between teammates.

## The Social Benefit of Paintball

Paintball, in addition to being an activity full of excitement and strategy, is also a powerful tool for strengthening relationships and creating lasting bonds.

### Strengthening Team Spirit

When participating in a paintball game, you are challenged to work as a team, communicate effectively with your teammates, and make quick decisions together. This teamwork experience develops cooperation and leadership skills, creating a spirit of camaraderie and unity.

### Creating Lifelong Bonds

Paintball provides a unique experience that creates lasting memories. Through sharing challenges, victories, and even defeats, you and your teammates establish a special bond.

### Fun and Stress Reduction

Paintball is an extremely fun activity and can be an excellent way to relieve stress. The adrenaline released during the game helps reduce stress and increase the feeling of well-being.

## Final Notes

Paintball is not just a game full of excitement, but also an experience that strengthens the team and creates unbreakable bonds. Gather your team, prepare for adventure, and enjoy the social and emotional benefits that paintball has to offer.`,
    author: "Raquel Medeiros",
    featuredImage: "https://azores4fun.com/old/wp-content/uploads/2023/07/paintball-beneficios-social-scaled.jpg",
    category: "Paintball",
    publishedAt: "2023-07-07",
    metaDescriptionPt: "Benefícios do Paintball: trabalho em equipa, exercício físico, estratégia e diversão. Descubra as vantagens sociais desta atividade nos Açores.",
    metaDescriptionEn: "Benefits of Paintball: teamwork, physical exercise, strategy and fun. Discover the social advantages of this activity in the Azores.",
    keywordsPt: "benefícios paintball, paintball social, trabalho equipa paintball, atividades grupo açores, exercício divertido faial",
    keywordsEn: "paintball benefits, social paintball, paintball teamwork, azores group activities, faial fun exercise",
    tags: "paintball, benefits, teamwork, social, exercise, faial"
  },
  {
    id: 2,
    slug: "melhores-locais-sup-faial",
    titlePt: "Os 5 Melhores Locais para Fazer Stand Up Paddle na Ilha do Faial",
    titleEn: "The 5 Best Places to Stand Up Paddle on Faial Island",
    excerptPt: "O Stand Up paddle é uma atividade cada vez mais popular e, na bela Ilha do Faial, existem alguns lugares incríveis para desfrutar dessa prática.",
    excerptEn: "Stand Up Paddle is an increasingly popular activity and, on the beautiful island of Faial, there are some incredible places to enjoy this practice.",
    contentPt: `O Stand Up paddle é uma atividade cada vez mais popular e, na bela Ilha do Faial, existem alguns lugares incríveis para desfrutar dessa prática.

### 1. Baía de Porto Pim

**Localização:** Horta, Faial

Porto Pim é um local deslumbrante para fazer stand up paddle. Com suas águas tranquilas e paisagem encantadora, esta praia é perfeita para explorar a costa enquanto desliza sobre a prancha.

### 2. Porto Comprido

**Localização:** Capelo, Faial

Situado nas proximidades do Vulcão dos Capelinhos, o Porto Comprido oferece uma vista deslumbrante para esta maravilha geológica.

### 3. Praia do Almoxarife

**Localização:** Freguesia do Almoxarife, Faial

Com águas cristalinas e um ambiente tranquilo, esta praia oferece uma experiência relaxante para aproveitar as vistas deslumbrantes para o Pico.

### 4. Praia da Fajã (Praia do Norte)

**Localização:** Freguesia da Praia do Norte, Faial

Com águas calmas e uma paisagem deslumbrante, esta praia proporciona uma experiência única de remada.

### 5. Praia da Conceição

**Localização:** Horta, Faial

Aproveita a proximidade com a cidade e desfruta da vista para o Pico e para a marina da Horta.

Prepara-te para viver momentos cheios de aventura e diversão enquanto exploras as águas açorianas!`,
    contentEn: `Stand Up Paddle is an increasingly popular activity and, on the beautiful island of Faial, there are some incredible places to enjoy this practice.

### 1. Porto Pim Bay

**Location:** Horta, Faial

Porto Pim is a stunning location for stand up paddling. With its calm waters and charming landscape, this beach is perfect for exploring the coast while gliding on your board.

### 2. Porto Comprido

**Location:** Capelo, Faial

Located near the Capelinhos Volcano, Porto Comprido offers a stunning view of this geological wonder.

### 3. Almoxarife Beach

**Location:** Almoxarife Parish, Faial

With crystal clear waters and a peaceful environment, this beach offers a relaxing experience to enjoy the stunning views of Pico.

### 4. Fajã Beach (Praia do Norte)

**Location:** Praia do Norte Parish, Faial

With calm waters and a stunning landscape, this beach provides a unique paddling experience.

### 5. Conceição Beach

**Location:** Horta, Faial

Enjoy the proximity to the city and the view of Pico and Horta marina.

Get ready to experience moments full of adventure and fun while exploring the Azorean waters!`,
    author: "Azores4fun",
    featuredImage: "https://azores4fun.com/old/wp-content/uploads/2023/06/porto-pim-faial-scaled.jpg",
    category: "SUP",
    publishedAt: "2023-06-27",
    metaDescriptionPt: "Melhores locais para SUP Stand Up Paddle na Ilha do Faial. Marina da Horta, Porto Pim, Varadouro. Aluguer de equipamento disponível.",
    metaDescriptionEn: "Best spots for SUP Stand Up Paddle on Faial Island. Horta Marina, Porto Pim, Varadouro. Equipment rental available.",
    keywordsPt: "SUP faial, stand up paddle açores, paddle board horta, desportos náuticos faial, aluguer SUP açores",
    keywordsEn: "faial SUP, azores stand up paddle, horta paddle board, faial water sports, azores SUP rental",
    tags: "SUP, stand up paddle, water sports, faial, horta, rental"
  }
];

export function getAllBlogArticles(): BlogArticle[] {
  return staticBlogArticles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return staticBlogArticles.find(article => article.slug === slug);
}

export function getBlogArticlesByCategory(category: string): BlogArticle[] {
  return staticBlogArticles
    .filter(article => article.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
