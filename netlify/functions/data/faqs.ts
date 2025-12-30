export interface FAQ {
  id: number;
  service: string;
  questionPt: string;
  questionEn: string;
  answerPt: string;
  answerEn: string;
  keywords: string;
  displayOrder: number;
  isActive: boolean;
}

export const staticFaqs: FAQ[] = [
  {
    id: 33,
    service: "paintball",
    questionPt: "Qual é a idade mínima para jogar paintball?",
    questionEn: "What is the minimum age to play paintball?",
    answerPt: "A idade mínima é 10 anos. Menores devem estar acompanhados por um adulto responsável.",
    answerEn: "The minimum age is 10 years old. Minors must be accompanied by a responsible adult.",
    keywords: "idade,mínima,anos,criança,menor,paintball,jogar",
    displayOrder: 33,
    isActive: true
  },
  {
    id: 34,
    service: "paintball",
    questionPt: "O equipamento de paintball está incluído no preço?",
    questionEn: "Is paintball equipment included in the price?",
    answerPt: "Sim! O preço inclui máscara de proteção, marcador (arma), colete e bolas de tinta. Todo o equipamento necessário está incluído.",
    answerEn: "Yes! The price includes protective mask, marker (gun), vest and paintballs. All necessary equipment is included.",
    keywords: "equipamento,incluído,preço,máscara,marcador,colete,bolas,material",
    displayOrder: 34,
    isActive: true
  },
  {
    id: 35,
    service: "paintball",
    questionPt: "Preciso de reservar paintball com antecedência?",
    questionEn: "Do I need to book paintball in advance?",
    answerPt: "Sim, recomendamos reservar pelo menos 24 horas antes para garantir disponibilidade. Pode reservar online, por telefone (+351 934 993 770) ou WhatsApp (+351 969 519 950).",
    answerEn: "Yes, we recommend booking at least 24 hours in advance to ensure availability. You can book online, by phone (+351 934 993 770) or WhatsApp (+351 969 519 950).",
    keywords: "reservar,antecedência,marcação,agendar,disponibilidade,paintball",
    displayOrder: 35,
    isActive: true
  },
  {
    id: 36,
    service: "paintball",
    questionPt: "Onde fica o campo de paintball?",
    questionEn: "Where is the paintball field located?",
    answerPt: "Temos um campo exclusivo preparado na Ilha do Faial, Açores. O local exato é comunicado após a reserva para garantir a sua privacidade.",
    answerEn: "We have an exclusive prepared field on Faial Island, Azores. The exact location is communicated after booking to ensure privacy.",
    keywords: "onde,localização,campo,faial,açores,local,paintball",
    displayOrder: 36,
    isActive: true
  },
  {
    id: 37,
    service: "paintball",
    questionPt: "As bolas de paintball são biodegradáveis?",
    questionEn: "Are paintball balls biodegradable?",
    answerPt: "Sim! As nossas bolas de Paintball e Gelblaster são biodegradáveis. Depois de uma normal chuvinha, a tinta desaparece completamente, não deixando vestígios na paisagem.",
    answerEn: "Yes! Our Paintball and Gelblaster balls are biodegradable. After a normal rain, the paint disappears completely, leaving no traces in the landscape.",
    keywords: "biodegradável,ecológico,tinta,ambiente,sustentável,paintball",
    displayOrder: 37,
    isActive: true
  },
  {
    id: 38,
    service: "paintball",
    questionPt: "O paintball dói muito?",
    questionEn: "Does paintball hurt a lot?",
    answerPt: "As bolas de paintball podem causar um ligeiro impacto, mas com o equipamento de proteção fornecido, é seguro e confortável. Se preferir algo sem impacto, experimente o Lasertag!",
    answerEn: "Paintball balls can cause a slight impact, but with the protective equipment provided, it's safe and comfortable. If you prefer no impact, try Lasertag!",
    keywords: "dói,dor,impacto,seguro,proteção,paintball",
    displayOrder: 38,
    isActive: true
  },
  {
    id: 39,
    service: "paintball",
    questionPt: "Qual a diferença entre Paintball, Gelblaster, Lasertag e Nerfs?",
    questionEn: "What is the difference between Paintball, Gelblaster, Lasertag and Nerfs?",
    answerPt: "Paintball usa bolas de tinta com impacto médio. Gelblaster usa gel biodegradável com impacto leve. Lasertag usa sensores infravermelhos sem impacto. Nerfs usam dardos de espuma suaves. Todos são seguros e divertidos!",
    answerEn: "Paintball uses paint balls with medium impact. Gelblaster uses biodegradable gel with light impact. Lasertag uses infrared sensors with no impact. Nerfs use soft foam darts. All are safe and fun!",
    keywords: "diferença,paintball,gelblaster,lasertag,nerfs,comparar,tipo",
    displayOrder: 39,
    isActive: true
  },
  {
    id: 40,
    service: "paintball",
    questionPt: "Quantas pessoas podem jogar paintball?",
    questionEn: "How many people can play paintball?",
    answerPt: "Podemos organizar jogos para grupos de 6 a 40+ pessoas. Para grupos maiores, contacte-nos para um orçamento personalizado para eventos ou teambuilding.",
    answerEn: "We can organize games for groups of 6 to 40+ people. For larger groups, contact us for a personalized quote for events or teambuilding.",
    keywords: "pessoas,grupo,quantos,capacidade,paintball,teambuilding",
    displayOrder: 40,
    isActive: true
  },
  {
    id: 41,
    service: "lasertag",
    questionPt: "O LaserTag dói como o paintball?",
    questionEn: "Does LaserTag hurt like paintball?",
    answerPt: "Não! O LaserTag usa sensores infravermelhos, sem qualquer impacto físico. É perfeito para todas as idades, incluindo crianças.",
    answerEn: "No! LaserTag uses infrared sensors, with no physical impact. It's perfect for all ages, including children.",
    keywords: "dói,dor,impacto,seguro,lasertag,laser,crianças",
    displayOrder: 41,
    isActive: true
  },
  {
    id: 42,
    service: "lasertag",
    questionPt: "Qual a idade mínima para LaserTag?",
    questionEn: "What is the minimum age for LaserTag?",
    answerPt: "Não há idade mínima rígida. É adequado para crianças a partir dos 6 anos, tornando-o ideal para festas de aniversário infantis.",
    answerEn: "There is no strict minimum age. It is suitable for children from 6 years old, making it ideal for children's birthday parties.",
    keywords: "idade,mínima,criança,lasertag,anos,aniversário,festa",
    displayOrder: 42,
    isActive: true
  },
  {
    id: 43,
    service: "lasertag",
    questionPt: "O LaserTag pode ser jogado em qualquer lugar?",
    questionEn: "Can LaserTag be played anywhere?",
    answerPt: "Sim! O LaserTag pode ser jogado indoor ou outdoor. Podemos organizar jogos no nosso campo ou levar o equipamento ao seu evento, festa ou local preferido.",
    answerEn: "Yes! LaserTag can be played indoor or outdoor. We can organize games at our field or bring the equipment to your event, party or preferred location.",
    keywords: "onde,local,indoor,outdoor,lasertag,evento,festa",
    displayOrder: 43,
    isActive: true
  },
  {
    id: 44,
    service: "lasertag",
    questionPt: "Quanto dura uma sessão de LaserTag?",
    questionEn: "How long does a LaserTag session last?",
    answerPt: "Uma sessão típica dura cerca de 1-2 horas, incluindo briefing de segurança e múltiplas partidas. Podemos adaptar a duração conforme o seu evento.",
    answerEn: "A typical session lasts about 1-2 hours, including safety briefing and multiple games. We can adapt the duration according to your event.",
    keywords: "duração,tempo,horas,sessão,lasertag,quanto",
    displayOrder: 44,
    isActive: true
  },
  {
    id: 45,
    service: "kayak",
    questionPt: "Preciso de experiência prévia para alugar kayak ou SUP?",
    questionEn: "Do I need prior experience to rent kayak or SUP?",
    answerPt: "Não é necessário. Damos um briefing de segurança e instruções básicas antes de cada aluguer. É perfeito para todos os níveis de experiência.",
    answerEn: "No experience needed. We provide a safety briefing and basic instructions before each rental. It's perfect for all experience levels.",
    keywords: "experiência,iniciante,principiante,kayak,sup,alugar,aluguer",
    displayOrder: 45,
    isActive: true
  },
  {
    id: 46,
    service: "kayak",
    questionPt: "Onde posso usar o kayak ou SUP?",
    questionEn: "Where can I use the kayak or SUP?",
    answerPt: "Disponível na Marina da Horta e Porto Pim, duas das zonas mais bonitas e seguras da ilha, com águas cristalinas ideais para desportos aquáticos.",
    answerEn: "Available at Marina da Horta and Porto Pim, two of the most beautiful and safe areas of the island, with crystal clear waters ideal for water sports.",
    keywords: "onde,local,marina,horta,porto pim,kayak,sup,baía",
    displayOrder: 46,
    isActive: true
  },
  {
    id: 47,
    service: "kayak",
    questionPt: "O equipamento de segurança está incluído no aluguer?",
    questionEn: "Is safety equipment included in the rental?",
    answerPt: "Sim, fornecemos colete salva-vidas e todo o equipamento necessário para uma experiência segura nas águas do Faial.",
    answerEn: "Yes, we provide life jacket and all necessary equipment for a safe experience in the waters of Faial.",
    keywords: "segurança,colete,salva-vidas,equipamento,incluído,kayak,sup",
    displayOrder: 47,
    isActive: true
  },
  {
    id: 48,
    service: "kayak",
    questionPt: "Quanto custa alugar kayak ou SUP?",
    questionEn: "How much does it cost to rent kayak or SUP?",
    answerPt: "Os preços variam conforme a duração do aluguer. Contacte-nos para obter os preços atualizados e pacotes especiais para grupos.",
    answerEn: "Prices vary according to rental duration. Contact us for updated prices and special group packages.",
    keywords: "preço,custo,quanto,kayak,sup,aluguer,valor",
    displayOrder: 48,
    isActive: true
  },
  {
    id: 49,
    service: "kayak",
    questionPt: "Posso alugar equipamento de snorkeling?",
    questionEn: "Can I rent snorkeling equipment?",
    answerPt: "Sim! Oferecemos material de snorkeling para explorar a vida marinha vibrante das águas cristalinas dos Açores.",
    answerEn: "Yes! We offer snorkeling equipment to explore the vibrant marine life in the crystal clear waters of the Azores.",
    keywords: "snorkeling,mergulho,máscara,barbatanas,aluguer,equipamento",
    displayOrder: 49,
    isActive: true
  },
  {
    id: 50,
    service: "kayak",
    questionPt: "O SUP é difícil de aprender?",
    questionEn: "Is SUP difficult to learn?",
    answerPt: "Não! O Stand Up Paddle é fácil de aprender. A maioria das pessoas consegue manter o equilíbrio e remar confortavelmente em poucos minutos.",
    answerEn: "No! Stand Up Paddle is easy to learn. Most people can balance and paddle comfortably within minutes.",
    keywords: "sup,paddle,difícil,aprender,fácil,equilíbrio",
    displayOrder: 50,
    isActive: true
  },
  {
    id: 51,
    service: "tours",
    questionPt: "Quanto tempo dura o tour da ilha?",
    questionEn: "How long does the island tour take?",
    answerPt: "Os tours podem variar de 2 a 6 horas, dependendo do itinerário escolhido. Oferecemos tours personalizados adaptados aos seus interesses e ritmo.",
    answerEn: "Tours can vary from 2 to 6 hours, depending on the chosen itinerary. We offer customized tours adapted to your interests and pace.",
    keywords: "duração,tempo,horas,tour,passeio,ilha",
    displayOrder: 51,
    isActive: true
  },
  {
    id: 52,
    service: "tours",
    questionPt: "Quais são os principais pontos de interesse do tour?",
    questionEn: "What are the main points of interest on the tour?",
    answerPt: "Visitamos a Caldeira, Vulcão dos Capelinhos, Porto Pim, Marina da Horta, miradouros panorâmicos e muito mais. O itinerário pode ser personalizado.",
    answerEn: "We visit the Caldeira, Capelinhos Volcano, Porto Pim, Marina da Horta, panoramic viewpoints and much more. The itinerary can be customized.",
    keywords: "caldeira,capelinhos,vulcão,porto pim,marina,pontos,interesse,visitar",
    displayOrder: 52,
    isActive: true
  },
  {
    id: 53,
    service: "tours",
    questionPt: "A carrinha de tours é mesmo elétrica?",
    questionEn: "Is the tour van really electric?",
    answerPt: "Sim! Usamos uma carrinha 100% elétrica de 9 lugares, contribuindo para um turismo sustentável e ecológico nos Açores.",
    answerEn: "Yes! We use a 100% electric 9-seater van, contributing to sustainable and ecological tourism in the Azores.",
    keywords: "elétrica,sustentável,carrinha,van,ecológico,9 lugares,tour",
    displayOrder: 53,
    isActive: true
  },
  {
    id: 54,
    service: "tours",
    questionPt: "Posso personalizar o meu tour?",
    questionEn: "Can I customize my tour?",
    answerPt: "Absolutamente! Oferecemos tours personalizados adaptados aos seus interesses, ritmo e tempo disponível. Contacte-nos para planear o seu tour ideal.",
    answerEn: "Absolutely! We offer customized tours adapted to your interests, pace and available time. Contact us to plan your ideal tour.",
    keywords: "personalizado,customizado,itinerário,tour,interesses",
    displayOrder: 54,
    isActive: true
  },
  {
    id: 55,
    service: "tours",
    questionPt: "Os tours incluem guia?",
    questionEn: "Do tours include a guide?",
    answerPt: "Sim! Todos os tours incluem um guia local experiente que conhece a ilha, a sua história e os melhores locais para visitar.",
    answerEn: "Yes! All tours include an experienced local guide who knows the island, its history and the best places to visit.",
    keywords: "guia,local,experiente,história,tour",
    displayOrder: 55,
    isActive: true
  },
  {
    id: 56,
    service: "tours",
    questionPt: "O tour inclui recolha no alojamento?",
    questionEn: "Does the tour include pickup from accommodation?",
    answerPt: "Sim! Para clientes do nosso alojamento, oferecemos recolha e entrega gratuita. Para outros clientes, podemos combinar um ponto de encontro.",
    answerEn: "Yes! For guests of our accommodation, we offer free pickup and drop-off. For other clients, we can arrange a meeting point.",
    keywords: "recolha,pickup,alojamento,transfer,buscar,hotel",
    displayOrder: 56,
    isActive: true
  },
  {
    id: 57,
    service: "accommodation",
    questionPt: "Onde ficam localizados os apartamentos?",
    questionEn: "Where are the apartments located?",
    answerPt: "Os nossos 3 apartamentos ficam no centro da cidade da Horta, na Ilha do Faial, com fácil acesso a restaurantes, marina e principais atrações turísticas.",
    answerEn: "Our 3 apartments are located in the center of Horta city, on Faial Island, with easy access to restaurants, marina and main tourist attractions.",
    keywords: "onde,localização,apartamento,horta,centro,faial",
    displayOrder: 57,
    isActive: true
  },
  {
    id: 58,
    service: "accommodation",
    questionPt: "Quantas pessoas os apartamentos acomodam?",
    questionEn: "How many people do the apartments accommodate?",
    answerPt: "Os apartamentos podem acomodar entre 2 a 6 pessoas, dependendo da unidade. Contacte-nos para saber a disponibilidade de cada apartamento.",
    answerEn: "The apartments can accommodate between 2 to 6 people, depending on the unit. Contact us to check availability for each apartment.",
    keywords: "pessoas,capacidade,quartos,acomodar,hóspedes,apartamento",
    displayOrder: 58,
    isActive: true
  },
  {
    id: 59,
    service: "accommodation",
    questionPt: "Os apartamentos estão totalmente equipados?",
    questionEn: "Are the apartments fully equipped?",
    answerPt: "Sim! Os apartamentos têm cozinha totalmente equipada com fogão, forno, frigorífico e utensílios. Incluem também Wi-Fi, TV, ar condicionado e roupa de cama.",
    answerEn: "Yes! The apartments have a fully equipped kitchen with stove, oven, refrigerator and utensils. They also include Wi-Fi, TV, air conditioning and bed linen.",
    keywords: "cozinha,equipada,fogão,frigorífico,wifi,tv,ar condicionado",
    displayOrder: 59,
    isActive: true
  },
  {
    id: 60,
    service: "accommodation",
    questionPt: "Qual é o horário de check-in e check-out?",
    questionEn: "What are the check-in and check-out times?",
    answerPt: "O check-in é a partir das 15h e o check-out até às 11h. Horários flexíveis podem ser combinados conforme disponibilidade.",
    answerEn: "Check-in is from 3pm and check-out by 11am. Flexible times can be arranged subject to availability.",
    keywords: "check-in,check-out,horário,entrada,saída,hora",
    displayOrder: 60,
    isActive: true
  },
  {
    id: 61,
    service: "accommodation",
    questionPt: "Há estacionamento disponível?",
    questionEn: "Is parking available?",
    answerPt: "Sim, há estacionamento gratuito disponível perto dos apartamentos. Podemos fornecer indicações específicas na altura da reserva.",
    answerEn: "Yes, free parking is available near the apartments. We can provide specific directions at the time of booking.",
    keywords: "estacionamento,parque,carro,gratuito,parking",
    displayOrder: 61,
    isActive: true
  },
  {
    id: 62,
    service: "accommodation",
    questionPt: "Qual é a estadia mínima nos apartamentos?",
    questionEn: "What is the minimum stay in the apartments?",
    answerPt: "A estadia mínima é geralmente de 2 noites, mas pode variar conforme a época do ano. Contacte-nos para mais informações.",
    answerEn: "The minimum stay is generally 2 nights, but may vary depending on the season. Contact us for more information.",
    keywords: "mínimo,noites,estadia,duração,reserva",
    displayOrder: 62,
    isActive: true
  },
  {
    id: 63,
    service: "accommodation",
    questionPt: "Aceitam animais de estimação?",
    questionEn: "Do you accept pets?",
    answerPt: "Alguns apartamentos aceitam animais de estimação mediante consulta prévia. Contacte-nos para verificar disponibilidade e condições.",
    answerEn: "Some apartments accept pets upon prior consultation. Contact us to check availability and conditions.",
    keywords: "animais,estimação,pets,cão,gato,permitido",
    displayOrder: 63,
    isActive: true
  },
  {
    id: 64,
    service: "tattoo",
    questionPt: "Quem é a tatuadora da Azores4fun?",
    questionEn: "Who is the Azores4fun tattoo artist?",
    answerPt: "A nossa tatuadora é a Catarina Gomes, uma artista experiente e talentosa que trabalha em diversos estilos de tatuagem.",
    answerEn: "Our tattoo artist is Catarina Gomes, an experienced and talented artist who works in various tattoo styles.",
    keywords: "tatuadora,artista,catarina,gomes,quem",
    displayOrder: 64,
    isActive: true
  },
  {
    id: 65,
    service: "tattoo",
    questionPt: "Preciso de marcar consulta para tatuagem?",
    questionEn: "Do I need to book an appointment for a tattoo?",
    answerPt: "Sim, as tatuagens são feitas apenas com marcação prévia. Pode contactar-nos por telefone, WhatsApp ou através do formulário no site.",
    answerEn: "Yes, tattoos are done by appointment only. You can contact us by phone, WhatsApp or through the form on our website.",
    keywords: "marcar,consulta,marcação,agendar,tatuagem,appointment",
    displayOrder: 65,
    isActive: true
  },
  {
    id: 66,
    service: "tattoo",
    questionPt: "Fazem piercings também?",
    questionEn: "Do you also do piercings?",
    answerPt: "Sim! Oferecemos serviços de piercing profissional, incluindo orelhas, nariz, sobrancelha e outros locais. Usamos material esterilizado e de qualidade.",
    answerEn: "Yes! We offer professional piercing services, including ears, nose, eyebrow and other locations. We use sterilized, quality materials.",
    keywords: "piercing,orelha,nariz,sobrancelha,furar",
    displayOrder: 66,
    isActive: true
  },
  {
    id: 67,
    service: "tattoo",
    questionPt: "Qual é a idade mínima para fazer tatuagem?",
    questionEn: "What is the minimum age for a tattoo?",
    answerPt: "A idade mínima é 18 anos. Menores de 18 anos podem fazer tatuagem apenas com autorização escrita e presença dos pais ou responsáveis legais.",
    answerEn: "The minimum age is 18 years. Minors under 18 can get a tattoo only with written authorization and presence of parents or legal guardians.",
    keywords: "idade,mínima,anos,menor,autorização,tatuagem",
    displayOrder: 67,
    isActive: true
  },
  {
    id: 68,
    service: "tattoo",
    questionPt: "Quanto custa uma tatuagem?",
    questionEn: "How much does a tattoo cost?",
    answerPt: "O preço varia conforme o tamanho, complexidade e tempo de trabalho. Contacte-nos com a sua ideia para um orçamento personalizado.",
    answerEn: "The price varies according to size, complexity and work time. Contact us with your idea for a personalized quote.",
    keywords: "preço,custo,quanto,valor,orçamento,tatuagem",
    displayOrder: 68,
    isActive: true
  },
  {
    id: 69,
    service: "tattoo",
    questionPt: "Onde fica o estúdio de tatuagem?",
    questionEn: "Where is the tattoo studio located?",
    answerPt: "O nosso estúdio fica na Rua Vasco da Gama, no centro da Horta, junto à Loja Azores4fun. Fácil acesso e ambiente acolhedor.",
    answerEn: "Our studio is located on Rua Vasco da Gama, in the center of Horta, next to the Azores4fun Shop. Easy access and welcoming environment.",
    keywords: "onde,localização,estúdio,horta,morada,endereço",
    displayOrder: 69,
    isActive: true
  },
  {
    id: 70,
    service: "events",
    questionPt: "Que tipo de eventos organizam?",
    questionEn: "What type of events do you organize?",
    answerPt: "Organizamos festas de aniversário, despedidas de solteiro/a, team building empresarial, eventos escolares e celebrações especiais com atividades como Paintball, LaserTag e muito mais.",
    answerEn: "We organize birthday parties, bachelor/bachelorette parties, corporate team building, school events and special celebrations with activities like Paintball, LaserTag and much more.",
    keywords: "eventos,festas,aniversário,despedida,team building,organizar",
    displayOrder: 70,
    isActive: true
  },
  {
    id: 71,
    service: "events",
    questionPt: "Podem organizar eventos para empresas?",
    questionEn: "Can you organize events for companies?",
    answerPt: "Sim! Especializamo-nos em team building empresarial com atividades que promovem trabalho em equipa, comunicação e espírito de grupo.",
    answerEn: "Yes! We specialize in corporate team building with activities that promote teamwork, communication and team spirit.",
    keywords: "empresas,corporativo,team building,trabalho,equipa,empresa",
    displayOrder: 71,
    isActive: true
  },
  {
    id: 72,
    service: "events",
    questionPt: "Qual o número mínimo de participantes para eventos?",
    questionEn: "What is the minimum number of participants for events?",
    answerPt: "O mínimo varia conforme a atividade, geralmente a partir de 6 pessoas. Para grupos maiores, oferecemos preços especiais.",
    answerEn: "The minimum varies according to the activity, usually from 6 people. For larger groups, we offer special prices.",
    keywords: "mínimo,participantes,pessoas,grupo,evento,quantos",
    displayOrder: 72,
    isActive: true
  },
  {
    id: 73,
    service: "events",
    questionPt: "Os eventos podem ser realizados em qualquer local?",
    questionEn: "Can events be held at any location?",
    answerPt: "Sim! Podemos organizar atividades no nosso campo ou deslocar-nos ao seu local preferido. Adaptamo-nos às suas necessidades.",
    answerEn: "Yes! We can organize activities at our field or travel to your preferred location. We adapt to your needs.",
    keywords: "local,onde,deslocação,evento,campo,lugar",
    displayOrder: 73,
    isActive: true
  },
  {
    id: 74,
    service: "shop",
    questionPt: "Onde fica a Loja Azores4fun?",
    questionEn: "Where is the Azores4fun Shop located?",
    answerPt: "A nossa loja fica na Rua Vasco da Gama, no centro da Horta. É também o ponto de receção para clientes de atividades e alojamento.",
    answerEn: "Our shop is located on Rua Vasco da Gama, in the center of Horta. It's also the reception point for activity and accommodation clients.",
    keywords: "loja,onde,localização,horta,morada,shop",
    displayOrder: 74,
    isActive: true
  },
  {
    id: 75,
    service: "shop",
    questionPt: "Que produtos vendem na loja?",
    questionEn: "What products do you sell in the shop?",
    answerPt: "Vendemos merchandising Azores4fun, produtos regionais açorianos, artesanato local e lembranças únicas da ilha do Faial.",
    answerEn: "We sell Azores4fun merchandise, Azorean regional products, local handicrafts and unique souvenirs from Faial island.",
    keywords: "produtos,merchandising,regional,artesanato,lembranças,souvenirs",
    displayOrder: 75,
    isActive: true
  },
  {
    id: 76,
    service: "shop",
    questionPt: "Qual é o horário de funcionamento da loja?",
    questionEn: "What are the shop opening hours?",
    answerPt: "A loja está aberta de segunda a sábado. Os horários podem variar conforme a época do ano. Contacte-nos para confirmar.",
    answerEn: "The shop is open Monday to Saturday. Hours may vary depending on the season. Contact us to confirm.",
    keywords: "horário,funcionamento,aberto,horas,loja",
    displayOrder: 76,
    isActive: true
  },
  {
    id: 77,
    service: "general",
    questionPt: "Como posso contactar a Azores4fun?",
    questionEn: "How can I contact Azores4fun?",
    answerPt: "Pode contactar-nos por telefone (+351 934 993 770), WhatsApp (+351 969 519 950), email (info@azores4fun.com) ou através do formulário no nosso website.",
    answerEn: "You can contact us by phone (+351 934 993 770), WhatsApp (+351 969 519 950), email (info@azores4fun.com) or through the form on our website.",
    keywords: "contacto,telefone,whatsapp,email,falar,contactar",
    displayOrder: 77,
    isActive: true
  },
  {
    id: 78,
    service: "general",
    questionPt: "Qual é a morada da Azores4fun?",
    questionEn: "What is the Azores4fun address?",
    answerPt: "Estamos localizados na Rua Vasco da Gama, no centro da cidade da Horta, Ilha do Faial, Açores, Portugal.",
    answerEn: "We are located on Rua Vasco da Gama, in the center of Horta city, Faial Island, Azores, Portugal.",
    keywords: "morada,endereço,localização,onde,horta,faial",
    displayOrder: 78,
    isActive: true
  },
  {
    id: 79,
    service: "general",
    questionPt: "Quais os métodos de pagamento aceites?",
    questionEn: "What payment methods are accepted?",
    answerPt: "Aceitamos pagamento em dinheiro, cartão de crédito/débito, MB Way e transferência bancária. Para reservas online, também aceitamos PayPal.",
    answerEn: "We accept cash, credit/debit card, MB Way and bank transfer. For online bookings, we also accept PayPal.",
    keywords: "pagamento,métodos,cartão,mbway,dinheiro,pagar",
    displayOrder: 79,
    isActive: true
  },
  {
    id: 80,
    service: "general",
    questionPt: "A Azores4fun funciona o ano todo?",
    questionEn: "Is Azores4fun open all year round?",
    answerPt: "Sim! Funcionamos durante todo o ano. Alguns serviços podem ter disponibilidade sazonal, mas estamos sempre prontos para receber os nossos clientes.",
    answerEn: "Yes! We operate all year round. Some services may have seasonal availability, but we are always ready to welcome our clients.",
    keywords: "ano,todo,sempre,aberto,funciona,sazonal",
    displayOrder: 80,
    isActive: true
  },
  {
    id: 81,
    service: "property",
    questionPt: "Que serviços de gestão imobiliária oferecem?",
    questionEn: "What property management services do you offer?",
    answerPt: "Oferecemos gestão de alojamento turístico, arrendamento de longa duração e serviços de manutenção para proprietários na ilha do Faial.",
    answerEn: "We offer tourist accommodation management, long-term rental and maintenance services for property owners on Faial island.",
    keywords: "gestão,imobiliária,propriedade,alojamento,arrendamento,serviços",
    displayOrder: 81,
    isActive: true
  },
  {
    id: 82,
    service: "property",
    questionPt: "Gerem propriedades para alojamento local?",
    questionEn: "Do you manage properties for local accommodation?",
    answerPt: "Sim! Gerimos propriedades em regime de alojamento local, incluindo reservas, check-in/out, limpeza e manutenção.",
    answerEn: "Yes! We manage properties under local accommodation regime, including bookings, check-in/out, cleaning and maintenance.",
    keywords: "alojamento,local,gestão,reservas,airbnb,booking",
    displayOrder: 82,
    isActive: true
  },
  {
    id: 83,
    service: "property",
    questionPt: "Fazem manutenção de propriedades?",
    questionEn: "Do you do property maintenance?",
    answerPt: "Sim! Oferecemos serviços de manutenção geral, pequenas reparações e coordenação com profissionais especializados quando necessário.",
    answerEn: "Yes! We offer general maintenance services, small repairs and coordination with specialized professionals when needed.",
    keywords: "manutenção,reparação,obras,propriedade,casa",
    displayOrder: 83,
    isActive: true
  }
];

export function getFaqsByService(service: string): FAQ[] {
  return staticFaqs.filter(faq => faq.service === service && faq.isActive);
}

export function getAllFaqs(): FAQ[] {
  return staticFaqs.filter(faq => faq.isActive);
}

export function getFaqsForChatbot(language: 'pt' | 'en'): string {
  return staticFaqs
    .filter(faq => faq.isActive)
    .map(faq => {
      const question = language === 'pt' ? faq.questionPt : faq.questionEn;
      const answer = language === 'pt' ? faq.answerPt : faq.answerEn;
      return `Serviço: ${faq.service}\nPergunta: ${question}\nResposta: ${answer}\nPalavras-chave: ${faq.keywords}`;
    })
    .join('\n\n');
}
