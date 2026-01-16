// Blog summaries for chatbot context - optimized for AI responses
// These are concise summaries of blog articles for the chatbot to reference

export interface BlogSummary {
  slug: string;
  titlePt: string;
  titleEn: string;
  summaryPt: string;
  summaryEn: string;
  keywords: string[];
}

export const blogSummaries: BlogSummary[] = [
  {
    slug: "certificacao-marca-acores-amigo-natureza",
    titlePt: "Certificação Marca Açores e Amigo da Natureza",
    titleEn: "Marca Açores and Friend of Nature Certification",
    summaryPt: "A Azores4fun é certificada pela Marca Açores (qualidade e origem açoriana) e distinguida como Amigo da Natureza (Portaria n.º 118/2023). Usamos carrinha elétrica, plantamos árvores anualmente na Mata Azores4fun, usamos energia solar e materiais biodegradáveis.",
    summaryEn: "Azores4fun is certified by Marca Açores (quality and Azorean origin) and distinguished as Friend of Nature (Decree n.º 118/2023). We use an electric van, plant trees annually in Azores4fun Forest, use solar energy and biodegradable materials.",
    keywords: ["marca açores", "amigo natureza", "sustentabilidade", "certificação", "ecológico", "verde"]
  },
  {
    slug: "pegada-carbono-floresta",
    titlePt: "Pegada de Carbono e Mata Azores4fun",
    titleEn: "Carbon Footprint and Azores4fun Forest",
    summaryPt: "Plantamos Criptomérias anualmente para compensar emissões de CO2 das viagens dos hóspedes. A Mata Azores4fun cresce cada ano, tornando-se habitat para espécies locais. Não usamos herbicidas e promovemos a biodiversidade.",
    summaryEn: "We plant Cryptomeria trees annually to offset CO2 emissions from guest travel. The Azores4fun Forest grows each year, becoming habitat for local species. We don't use herbicides and promote biodiversity.",
    keywords: ["carbono", "floresta", "árvores", "compensação", "ecologia", "plantação"]
  },
  {
    slug: "jogos-estrategia-azores4fun",
    titlePt: "Jogos de Estratégia: Paintball, LaserTag, GelBlaster",
    titleEn: "Strategy Games: Paintball, LaserTag, GelBlaster",
    summaryPt: "Oferecemos Paintball (campo próprio na Horta), LaserTag (tecnologia moderna, sem dor), GelBlaster e Nerf. Ideais para festas, team building e grupos. Incluem equipamento, instrutor e seguro. Mínimo 6 jogadores para paintball.",
    summaryEn: "We offer Paintball (own field in Horta), LaserTag (modern tech, pain-free), GelBlaster and Nerf. Ideal for parties, team building and groups. Equipment, instructor and insurance included. Minimum 6 players for paintball.",
    keywords: ["paintball", "lasertag", "gelblaster", "nerf", "jogos", "equipa", "festa"]
  },
  {
    slug: "tours-carrinha-ilha-faial",
    titlePt: "Tours de Carrinha na Ilha do Faial",
    titleEn: "Van Tours on Faial Island",
    summaryPt: "Tours em carrinha elétrica para 9 pessoas. Visitamos Caldeira, Capelinhos, miradouros e praias. Guia local com conhecimento da história e natureza. Tours personalizados disponíveis. Duração típica 3-4 horas.",
    summaryEn: "Tours in electric van for 9 people. We visit Caldeira, Capelinhos, viewpoints and beaches. Local guide with knowledge of history and nature. Customized tours available. Typical duration 3-4 hours.",
    keywords: ["tour", "carrinha", "faial", "caldeira", "capelinhos", "ilha", "passeio"]
  },
  {
    slug: "lasertag-azores4fun-tecnologia-estrategia",
    titlePt: "LaserTag: Tecnologia e Estratégia",
    titleEn: "LaserTag: Technology and Strategy",
    summaryPt: "LaserTag com equipamento moderno, sem dor ou sujidade. Perfeito para todas as idades (a partir de 6 anos). Vários modos de jogo: equipa vs equipa, cada um por si, captura de base. Indoor e outdoor disponível.",
    summaryEn: "LaserTag with modern equipment, no pain or mess. Perfect for all ages (from 6 years). Various game modes: team vs team, free-for-all, base capture. Indoor and outdoor available.",
    keywords: ["lasertag", "laser", "crianças", "família", "indoor", "tecnologia"]
  },
  {
    slug: "transfers-azores4fun",
    titlePt: "Transfers Aeroporto e Porto",
    titleEn: "Airport and Port Transfers",
    summaryPt: "Transfers do aeroporto da Horta e porto de chegada de ferries. Carrinha elétrica confortável para até 9 pessoas. Pontualidade garantida, monitorizamos horários de voos e barcos. Também fazemos transfers para tours.",
    summaryEn: "Transfers from Horta airport and ferry port. Comfortable electric van for up to 9 people. Punctuality guaranteed, we monitor flight and boat schedules. We also do transfers for tours.",
    keywords: ["transfer", "aeroporto", "porto", "ferry", "transporte", "chegada"]
  },
  {
    slug: "multiatividades-formula-perfeita",
    titlePt: "Multiatividades: Fórmula Perfeita",
    titleEn: "Multi-activities: Perfect Formula",
    summaryPt: "Combinamos várias atividades num só dia: paintball + caiaque, tour + lasertag, etc. Perfeito para grupos e eventos. Descontos em pacotes combinados. Personalizamos conforme preferências.",
    summaryEn: "We combine multiple activities in one day: paintball + kayak, tour + lasertag, etc. Perfect for groups and events. Discounts on combined packages. We customize according to preferences.",
    keywords: ["multiatividades", "pacote", "combinado", "grupo", "desconto"]
  },
  {
    slug: "festas-aniversario-azores4fun",
    titlePt: "Festas de Aniversário",
    titleEn: "Birthday Parties",
    summaryPt: "Festas de aniversário para crianças e adultos com paintball, lasertag ou outras atividades. Incluímos espaço para lanche, organização de jogos e supervisão. Bolo e decoração opcionais. Grupos a partir de 8 pessoas.",
    summaryEn: "Birthday parties for children and adults with paintball, lasertag or other activities. We include snack area, game organization and supervision. Cake and decoration optional. Groups from 8 people.",
    keywords: ["aniversário", "festa", "crianças", "bolo", "celebração"]
  },
  {
    slug: "despedidas-solteiro-azores4fun",
    titlePt: "Despedidas de Solteiro(a)",
    titleEn: "Bachelor/Bachelorette Parties",
    summaryPt: "Despedidas de solteiro(a) com atividades radicais: paintball, caiaque, tours. Podemos organizar surpresas e jogos especiais. Pacotes personalizados para grupos. Confidencialidade garantida.",
    summaryEn: "Bachelor/bachelorette parties with radical activities: paintball, kayak, tours. We can organize surprises and special games. Customized packages for groups. Confidentiality guaranteed.",
    keywords: ["despedida", "solteiro", "solteira", "casamento", "grupo", "radical"]
  },
  {
    slug: "bem-vindo-estudio-tatuagens-piercings",
    titlePt: "Estúdio de Tatuagens e Piercings",
    titleEn: "Tattoo and Piercing Studio",
    summaryPt: "Estúdio de tatuagens com a artista Catarina Gomes. Trabalho personalizado, estilos variados (realismo, minimalista, geométrico). Piercings com materiais hipoalergénicos. Marcação prévia obrigatória. Higiene e esterilização rigorosa.",
    summaryEn: "Tattoo studio with artist Catarina Gomes. Custom work, various styles (realism, minimalist, geometric). Piercings with hypoallergenic materials. Advance booking required. Strict hygiene and sterilization.",
    keywords: ["tatuagem", "tattoo", "piercing", "estúdio", "arte", "catarina"]
  }
];

export function getBlogSummariesForChatbot(lang: 'pt' | 'en'): string {
  return blogSummaries.map(blog => {
    const title = lang === 'pt' ? blog.titlePt : blog.titleEn;
    const summary = lang === 'pt' ? blog.summaryPt : blog.summaryEn;
    return `- ${title}: ${summary}`;
  }).join('\n');
}
