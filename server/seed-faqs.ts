import { db } from "./db";
import { faqs } from "@shared/schema";

const faqSeedData = [
  // Paintball FAQs
  {
    service: "paintball",
    questionPt: "Qual é a idade mínima para jogar paintball?",
    questionEn: "What is the minimum age to play paintball?",
    answerPt: "A idade mínima é 10 anos. Menores devem estar acompanhados por um adulto responsável.",
    answerEn: "The minimum age is 10 years old. Minors must be accompanied by a responsible adult.",
    keywords: "idade,mínima,anos,criança,menor,paintball,jogar",
    isActive: "true",
  },
  {
    service: "paintball",
    questionPt: "O equipamento está incluído no preço?",
    questionEn: "Is equipment included in the price?",
    answerPt: "Sim! O preço inclui máscara de proteção, marcador (arma), colete e bolas de tinta.",
    answerEn: "Yes! The price includes protective mask, marker (gun), vest and paintballs.",
    keywords: "equipamento,incluído,preço,máscara,marcador,colete,bolas",
    isActive: "true",
  },
  {
    service: "paintball",
    questionPt: "Preciso de reservar com antecedência?",
    questionEn: "Do I need to book in advance?",
    answerPt: "Sim, recomendamos reservar pelo menos 24 horas antes para garantir disponibilidade.",
    answerEn: "Yes, we recommend booking at least 24 hours in advance to ensure availability.",
    keywords: "reservar,antecedência,marcação,agendar,disponibilidade",
    isActive: "true",
  },
  {
    service: "paintball",
    questionPt: "Onde fica o campo de paintball?",
    questionEn: "Where is the paintball field located?",
    answerPt: "Temos campos preparados na Ilha do Faial, Açores. O local exato é comunicado após a reserva.",
    answerEn: "We have prepared fields on Faial Island, Azores. The exact location is communicated after booking.",
    keywords: "onde,localização,campo,faial,açores,local",
    isActive: "true",
  },

  // LaserTag FAQs
  {
    service: "lasertag",
    questionPt: "O LaserTag dói como o paintball?",
    questionEn: "Does LaserTag hurt like paintball?",
    answerPt: "Não! O LaserTag usa sensores infravermelhos, sem qualquer impacto físico. É perfeito para todas as idades.",
    answerEn: "No! LaserTag uses infrared sensors, with no physical impact. It's perfect for all ages.",
    keywords: "dói,dor,impacto,seguro,lasertag,laser",
    isActive: "true",
  },
  {
    service: "lasertag",
    questionPt: "Qual a idade mínima para LaserTag?",
    questionEn: "What is the minimum age for LaserTag?",
    answerPt: "Não há idade mínima rígida. É adequado para crianças a partir dos 6 anos.",
    answerEn: "There is no strict minimum age. It is suitable for children from 6 years old.",
    keywords: "idade,mínima,criança,lasertag,anos",
    isActive: "true",
  },

  // Kayak & SUP FAQs
  {
    service: "kayak",
    questionPt: "Preciso de experiência prévia para alugar kayak ou SUP?",
    questionEn: "Do I need prior experience to rent kayak or SUP?",
    answerPt: "Não é necessário. Damos um briefing de segurança e instruções básicas antes de cada aluguer.",
    answerEn: "No experience needed. We provide a safety briefing and basic instructions before each rental.",
    keywords: "experiência,iniciante,principiante,kayak,sup,alugar,aluguer",
    isActive: "true",
  },
  {
    service: "kayak",
    questionPt: "Onde posso usar o kayak ou SUP?",
    questionEn: "Where can I use the kayak or SUP?",
    answerPt: "Disponível na Marina da Horta e Porto Pim, duas das zonas mais bonitas da ilha.",
    answerEn: "Available at Marina da Horta and Porto Pim, two of the most beautiful areas of the island.",
    keywords: "onde,local,marina,horta,porto pim,kayak,sup",
    isActive: "true",
  },
  {
    service: "kayak",
    questionPt: "O equipamento de segurança está incluído?",
    questionEn: "Is safety equipment included?",
    answerPt: "Sim, fornecemos colete salva-vidas e todo o equipamento necessário.",
    answerEn: "Yes, we provide life jacket and all necessary equipment.",
    keywords: "segurança,colete,salva-vidas,equipamento,incluído",
    isActive: "true",
  },

  // Tours FAQs
  {
    service: "tours",
    questionPt: "Quanto tempo dura o tour da ilha?",
    questionEn: "How long does the island tour take?",
    answerPt: "Os tours podem variar de 2 a 6 horas, dependendo do itinerário escolhido.",
    answerEn: "Tours can vary from 2 to 6 hours, depending on the chosen itinerary.",
    keywords: "duração,tempo,horas,tour,passeio",
    isActive: "true",
  },
  {
    service: "tours",
    questionPt: "Quais são os principais pontos de interesse?",
    questionEn: "What are the main points of interest?",
    answerPt: "Visitamos a Caldeira, Vulcão dos Capelinhos, Porto Pim, Marina da Horta e muito mais.",
    answerEn: "We visit the Caldeira, Capelinhos Volcano, Porto Pim, Marina da Horta and much more.",
    keywords: "caldeira,capelinhos,vulcão,porto pim,marina,pontos,interesse",
    isActive: "true",
  },
  {
    service: "tours",
    questionPt: "A carrinha é mesmo elétrica?",
    questionEn: "Is the van really electric?",
    answerPt: "Sim! Usamos uma carrinha 100% elétrica, contribuindo para um turismo sustentável.",
    answerEn: "Yes! We use a 100% electric van, contributing to sustainable tourism.",
    keywords: "elétrica,sustentável,carrinha,van,ecológico",
    isActive: "true",
  },

  // Accommodation FAQs
  {
    service: "accommodation",
    questionPt: "Onde fica a Casa da Travessa?",
    questionEn: "Where is Casa da Travessa located?",
    answerPt: "A Casa da Travessa fica no centro da Horta, com fácil acesso a restaurantes, marina e principais atrações.",
    answerEn: "Casa da Travessa is located in the center of Horta, with easy access to restaurants, marina and main attractions.",
    keywords: "onde,localização,casa,travessa,horta,centro",
    isActive: "true",
  },
  {
    service: "accommodation",
    questionPt: "Quantas pessoas a casa acomoda?",
    questionEn: "How many people does the house accommodate?",
    answerPt: "A Casa da Travessa pode acomodar até 6 pessoas confortavelmente.",
    answerEn: "Casa da Travessa can accommodate up to 6 people comfortably.",
    keywords: "pessoas,capacidade,quartos,acomodar,hóspedes",
    isActive: "true",
  },
  {
    service: "accommodation",
    questionPt: "A casa tem cozinha equipada?",
    questionEn: "Does the house have an equipped kitchen?",
    answerPt: "Sim, a cozinha está totalmente equipada com fogão, forno, frigorífico e todos os utensílios necessários.",
    answerEn: "Yes, the kitchen is fully equipped with stove, oven, refrigerator and all necessary utensils.",
    keywords: "cozinha,equipada,fogão,frigorífico,utensílios",
    isActive: "true",
  },

  // Tattoo FAQs
  {
    service: "tattoo",
    questionPt: "Quem é a artista do estúdio?",
    questionEn: "Who is the studio artist?",
    answerPt: "A nossa artista é a Catarina Gomes, com anos de experiência em diversos estilos. Siga o trabalho dela no Instagram @catarinagomestattoo.",
    answerEn: "Our artist is Catarina Gomes, with years of experience in various styles. Follow her work on Instagram @catarinagomestattoo.",
    keywords: "artista,catarina,gomes,quem,estúdio,instagram",
    isActive: "true",
  },
  {
    service: "tattoo",
    questionPt: "Preciso de marcar consulta prévia?",
    questionEn: "Do I need to book a prior consultation?",
    answerPt: "Sim, recomendamos uma consulta prévia para discutir o design, tamanho e orçamento da tatuagem.",
    answerEn: "Yes, we recommend a prior consultation to discuss the design, size and budget of the tattoo.",
    keywords: "consulta,marcação,agendar,prévia,reservar",
    isActive: "true",
  },
  {
    service: "tattoo",
    questionPt: "Fazem piercings também?",
    questionEn: "Do you also do piercings?",
    answerPt: "Sim! Oferecemos vários tipos de piercings: lóbulo, hélix, tragus, nostril, septo e muito mais.",
    answerEn: "Yes! We offer various types of piercings: lobe, helix, tragus, nostril, septum and more.",
    keywords: "piercing,piercings,lóbulo,hélix,tragus,nostril,septo",
    isActive: "true",
  },
  {
    service: "tattoo",
    questionPt: "O estúdio é higiénico e seguro?",
    questionEn: "Is the studio hygienic and safe?",
    answerPt: "Absolutamente! Seguimos todos os protocolos de higiene e usamos materiais esterilizados e descartáveis.",
    answerEn: "Absolutely! We follow all hygiene protocols and use sterilized and disposable materials.",
    keywords: "higiene,segurança,esterilizado,descartável,limpo,protocolos",
    isActive: "true",
  },

  // Events FAQs
  {
    service: "events",
    questionPt: "Que tipo de eventos organizam?",
    questionEn: "What type of events do you organize?",
    answerPt: "Organizamos festas de aniversário, despedidas de solteiro(a), eventos corporativos, team building e muito mais.",
    answerEn: "We organize birthday parties, bachelor/bachelorette parties, corporate events, team building and much more.",
    keywords: "eventos,festas,aniversário,despedida,corporativo,team building",
    isActive: "true",
  },
  {
    service: "events",
    questionPt: "Podem organizar eventos para grupos grandes?",
    questionEn: "Can you organize events for large groups?",
    answerPt: "Sim! Temos experiência com grupos de todas as dimensões. Contacte-nos para um orçamento personalizado.",
    answerEn: "Yes! We have experience with groups of all sizes. Contact us for a personalized quote.",
    keywords: "grupos,grandes,muitas pessoas,dimensões,orçamento",
    isActive: "true",
  },

  // Transfers FAQs
  {
    service: "transfers",
    questionPt: "Fazem transfer do aeroporto?",
    questionEn: "Do you do airport transfers?",
    answerPt: "Sim! Oferecemos transfer do aeroporto da Horta para qualquer ponto da ilha.",
    answerEn: "Yes! We offer transfer from Horta airport to any point on the island.",
    keywords: "aeroporto,transfer,transporte,chegada,partida",
    isActive: "true",
  },
  {
    service: "transfers",
    questionPt: "A carrinha de transfer é elétrica?",
    questionEn: "Is the transfer van electric?",
    answerPt: "Sim! Usamos uma carrinha 100% elétrica para todos os nossos transfers e tours.",
    answerEn: "Yes! We use a 100% electric van for all our transfers and tours.",
    keywords: "elétrica,carrinha,sustentável,ecológico,van",
    isActive: "true",
  },

  // Real Estate FAQs
  {
    service: "realestate",
    questionPt: "Que serviços de gestão imobiliária oferecem?",
    questionEn: "What property management services do you offer?",
    answerPt: "Oferecemos gestão completa de propriedades: manutenção, limpeza, check-in/check-out de hóspedes e marketing.",
    answerEn: "We offer complete property management: maintenance, cleaning, guest check-in/check-out and marketing.",
    keywords: "gestão,imobiliária,propriedade,manutenção,aluguer,arrendamento",
    isActive: "true",
  },
  {
    service: "realestate",
    questionPt: "Gerem propriedades para aluguer de férias?",
    questionEn: "Do you manage vacation rental properties?",
    answerPt: "Sim! Especializamo-nos em gestão de propriedades para aluguer de curta duração e alojamento local.",
    answerEn: "Yes! We specialize in managing properties for short-term rental and local accommodation.",
    keywords: "férias,aluguer,curta duração,airbnb,alojamento local,booking",
    isActive: "true",
  },

  // Shop FAQs
  {
    service: "shop",
    questionPt: "Que produtos vendem na loja?",
    questionEn: "What products do you sell in the shop?",
    answerPt: "Vendemos merchandising Azores4Fun (t-shirts, bonés, etc.) e produtos locais dos Açores.",
    answerEn: "We sell Azores4Fun merchandise (t-shirts, caps, etc.) and local Azorean products.",
    keywords: "loja,produtos,merchandising,t-shirts,bonés,açores,local",
    isActive: "true",
  },
  {
    service: "shop",
    questionPt: "Fazem envios para fora da ilha?",
    questionEn: "Do you ship outside the island?",
    answerPt: "Sim, fazemos envios para Portugal continental e outros destinos. Contacte-nos para mais informações.",
    answerEn: "Yes, we ship to mainland Portugal and other destinations. Contact us for more information.",
    keywords: "envio,entrega,enviar,correio,porte,expedição",
    isActive: "true",
  },

  // General FAQs
  {
    service: "general",
    questionPt: "Qual é o horário de funcionamento?",
    questionEn: "What are your opening hours?",
    answerPt: "Estamos disponíveis todos os dias das 9h às 19h. Para urgências, contacte-nos por WhatsApp.",
    answerEn: "We are available every day from 9am to 7pm. For emergencies, contact us via WhatsApp.",
    keywords: "horário,funcionamento,aberto,fechado,horas",
    isActive: "true",
  },
  {
    service: "general",
    questionPt: "Como posso contactar a Azores4Fun?",
    questionEn: "How can I contact Azores4Fun?",
    answerPt: "Pode contactar-nos por telefone (+351 934 993 770), WhatsApp (+351 969 519 950) ou email (info@azores4fun.com).",
    answerEn: "You can contact us by phone (+351 934 993 770), WhatsApp (+351 969 519 950) or email (info@azores4fun.com).",
    keywords: "contacto,telefone,whatsapp,email,falar,ligar",
    isActive: "true",
  },
  {
    service: "general",
    questionPt: "Onde ficam localizados?",
    questionEn: "Where are you located?",
    answerPt: "Estamos localizados na Rua Vasco da Gama, Horta, Ilha do Faial, Açores, Portugal.",
    answerEn: "We are located at Rua Vasco da Gama, Horta, Faial Island, Azores, Portugal.",
    keywords: "onde,localização,morada,endereço,local,horta,faial",
    isActive: "true",
  },
  {
    service: "general",
    questionPt: "Aceitam cartão de crédito?",
    questionEn: "Do you accept credit cards?",
    answerPt: "Sim, aceitamos cartões de crédito/débito, MB Way e dinheiro.",
    answerEn: "Yes, we accept credit/debit cards, MB Way and cash.",
    keywords: "pagamento,cartão,crédito,débito,mbway,dinheiro,pagar",
    isActive: "true",
  },
  {
    service: "general",
    questionPt: "Têm descontos para grupos?",
    questionEn: "Do you have group discounts?",
    answerPt: "Sim! Oferecemos descontos especiais para grupos. Contacte-nos para um orçamento personalizado.",
    answerEn: "Yes! We offer special discounts for groups. Contact us for a personalized quote.",
    keywords: "desconto,grupo,promoção,oferta,preço especial",
    isActive: "true",
  },
];

export async function seedFaqsIfEmpty() {
  try {
    const existingFaqs = await db.select().from(faqs);
    
    if (existingFaqs.length === 0) {
      console.log("Seeding FAQs database...");
      
      for (const faq of faqSeedData) {
        await db.insert(faqs).values(faq);
      }
      
      console.log(`Successfully seeded ${faqSeedData.length} FAQs`);
    } else {
      console.log(`FAQs database already has ${existingFaqs.length} entries, skipping seed`);
    }
  } catch (error) {
    console.error("Error seeding FAQs:", error);
  }
}
