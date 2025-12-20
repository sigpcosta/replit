import { db } from "./db";
import { blogPosts } from "@shared/schema";

const seedArticles = [
  {
    slug: "beneficios-paintball-faial",
    titlePt: "Os Benefícios do Paintball: Diversão e Trabalho em Equipa no Faial",
    titleEn: "The Benefits of Paintball: Fun and Teamwork in Faial",
    contentPt: `<p>O paintball é muito mais do que uma simples atividade recreativa - é uma experiência que combina diversão, exercício físico e desenvolvimento de competências essenciais. Na Azores4fun, oferecemos esta emocionante atividade no coração da ilha do Faial, proporcionando uma experiência única para grupos de amigos, famílias e equipas empresariais.</p>

<h2>Benefícios Físicos</h2>
<p>Uma partida de paintball é um treino completo que envolve corrida, agachamentos, movimentos laterais e muito mais. É uma forma divertida de se manter ativo enquanto se diverte com os amigos. Os participantes queimam calorias sem sequer perceberem, tornando-o uma excelente alternativa aos exercícios tradicionais.</p>

<h2>Trabalho em Equipa</h2>
<p>O paintball exige comunicação constante e estratégia de grupo. Os jogadores aprendem a trabalhar juntos, a planear táticas e a confiar uns nos outros. Estas competências são transferíveis para o ambiente de trabalho, tornando o paintball uma excelente atividade de teambuilding.</p>

<h2>Redução do Stress</h2>
<p>Não há melhor forma de libertar tensões do que uma boa partida de paintball. A adrenalina libertada durante o jogo ajuda a reduzir o stress e proporciona uma sensação de bem-estar. É uma pausa perfeita da rotina diária.</p>

<h2>A Nossa Experiência no Faial</h2>
<p>A Azores4fun dispõe de um campo próprio com cenários desafiantes e equipamento de qualidade. Proporcionamos toda a segurança necessária e instruções claras para que todos possam desfrutar da experiência, independentemente do nível de experiência.</p>

<p>Marque já a sua sessão e descubra porque o paintball é uma das atividades mais populares nos Açores!</p>`,
    contentEn: `<p>Paintball is much more than just a recreational activity - it's an experience that combines fun, physical exercise and development of essential skills. At Azores4fun, we offer this exciting activity in the heart of Faial island, providing a unique experience for groups of friends, families and corporate teams.</p>

<h2>Physical Benefits</h2>
<p>A paintball match is a complete workout involving running, squatting, lateral movements and much more. It's a fun way to stay active while having fun with friends. Participants burn calories without even realizing it, making it an excellent alternative to traditional exercises.</p>

<h2>Teamwork</h2>
<p>Paintball requires constant communication and group strategy. Players learn to work together, plan tactics and trust each other. These skills are transferable to the workplace, making paintball an excellent teambuilding activity.</p>

<h2>Stress Reduction</h2>
<p>There's no better way to release tension than a good game of paintball. The adrenaline released during the game helps reduce stress and provides a sense of well-being. It's a perfect break from the daily routine.</p>

<h2>Our Experience in Faial</h2>
<p>Azores4fun has its own field with challenging scenarios and quality equipment. We provide all necessary safety measures and clear instructions so everyone can enjoy the experience, regardless of experience level.</p>

<p>Book your session now and discover why paintball is one of the most popular activities in the Azores!</p>`,
    excerptPt: "Descubra os benefícios físicos e mentais do paintball, uma atividade que combina diversão, exercício e trabalho em equipa na ilha do Faial.",
    excerptEn: "Discover the physical and mental benefits of paintball, an activity that combines fun, exercise and teamwork on Faial island.",
    author: "Ricardo Faustino",
    featuredImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    category: "activities",
    publishedAt: new Date("2023-07-07T10:00:00Z"),
  },
  {
    slug: "melhores-locais-sup-faial",
    titlePt: "Os Melhores Locais para Praticar SUP no Faial",
    titleEn: "The Best Spots for SUP in Faial",
    contentPt: `<p>O Stand Up Paddle (SUP) é uma das formas mais relaxantes e versáteis de explorar as águas cristalinas dos Açores. A ilha do Faial oferece cenários deslumbrantes e condições ideais para esta prática, seja você iniciante ou experiente.</p>

<h2>Marina da Horta</h2>
<p>A Marina da Horta é um dos locais mais emblemáticos para iniciar a sua aventura de SUP. As águas calmas e protegidas são perfeitas para iniciantes, enquanto a vista para o famoso muralhão pintado oferece uma experiência cultural única. É possível remar ao longo da baía e apreciar a cidade da Horta de uma perspetiva diferente.</p>

<h2>Porto Pim</h2>
<p>Esta baía histórica oferece águas tranquilas e uma paisagem de tirar o fôlego. O Monte da Guia serve como pano de fundo enquanto rema pelas águas azul-turquesa. É um local excelente para observação de vida marinha, incluindo peixes coloridos e ocasionalmente tartarugas.</p>

<h2>Praia do Almoxarife</h2>
<p>Uma das praias mais extensas do Faial, oferece excelentes condições para SUP. Em dias de mar calmo, pode-se remar ao longo da costa e explorar pequenas enseadas. A vista para a ilha do Pico é simplesmente espetacular.</p>

<h2>Varadouro</h2>
<p>Para os mais aventureiros, as piscinas naturais do Varadouro oferecem um cenário único. As formações vulcânicas criam um ambiente dramático para a prática de SUP, com águas cristalinas e uma paisagem diferente de qualquer outro lugar.</p>

<h2>Dicas de Segurança</h2>
<p>Recomendamos sempre verificar as condições meteorológicas antes de sair, usar colete salva-vidas e informar alguém sobre o seu percurso. A Azores4fun disponibiliza equipamento de qualidade e pode fornecer informações sobre as melhores condições para cada local.</p>

<p>Venha descobrir os Açores de uma forma única - sobre uma prancha de SUP!</p>`,
    contentEn: `<p>Stand Up Paddle (SUP) is one of the most relaxing and versatile ways to explore the crystal-clear waters of the Azores. Faial island offers stunning scenery and ideal conditions for this practice, whether you're a beginner or experienced.</p>

<h2>Horta Marina</h2>
<p>Horta Marina is one of the most iconic places to start your SUP adventure. The calm, protected waters are perfect for beginners, while the view of the famous painted wall offers a unique cultural experience. It's possible to paddle along the bay and appreciate the city of Horta from a different perspective.</p>

<h2>Porto Pim</h2>
<p>This historic bay offers tranquil waters and breathtaking scenery. Monte da Guia serves as a backdrop while paddling through the turquoise waters. It's an excellent spot for marine life observation, including colorful fish and occasionally turtles.</p>

<h2>Almoxarife Beach</h2>
<p>One of Faial's most extensive beaches, it offers excellent conditions for SUP. On calm sea days, you can paddle along the coast and explore small coves. The view of Pico island is simply spectacular.</p>

<h2>Varadouro</h2>
<p>For the more adventurous, Varadouro's natural pools offer a unique setting. The volcanic formations create a dramatic environment for SUP practice, with crystal-clear waters and a landscape unlike anywhere else.</p>

<h2>Safety Tips</h2>
<p>We always recommend checking weather conditions before going out, wearing a life jacket, and informing someone about your route. Azores4fun provides quality equipment and can provide information about the best conditions for each location.</p>

<p>Come discover the Azores in a unique way - on a SUP board!</p>`,
    excerptPt: "Explore os melhores locais para praticar Stand Up Paddle na ilha do Faial, desde a Marina da Horta até às piscinas naturais do Varadouro.",
    excerptEn: "Explore the best spots for Stand Up Paddle on Faial island, from Horta Marina to the natural pools of Varadouro.",
    author: "Ricardo Faustino",
    featuredImage: "https://images.unsplash.com/photo-1499971856191-1a420a42d498?w=800",
    category: "watersports",
    publishedAt: new Date("2023-06-27T10:00:00Z"),
  },
  {
    slug: "beneficios-kayak-acores",
    titlePt: "Benefícios do Kayak: Exercício e Natureza nos Açores",
    titleEn: "Benefits of Kayaking: Exercise and Nature in the Azores",
    contentPt: `<p>O kayak é uma atividade que combina exercício físico com a exploração da natureza de uma forma única. Nos Açores, e particularmente na ilha do Faial, esta atividade ganha uma dimensão especial graças à biodiversidade marinha e às paisagens vulcânicas impressionantes.</p>

<h2>Benefícios para a Saúde</h2>
<p>Remar um kayak é um excelente exercício cardiovascular que trabalha principalmente os braços, ombros, costas e core. Ao contrário de muitos exercícios de ginásio, o kayak oferece um treino de baixo impacto que é gentil para as articulações. Uma hora de kayak pode queimar entre 300 a 500 calorias, dependendo da intensidade.</p>

<h2>Benefícios Mentais</h2>
<p>Estar na água, rodeado pela natureza, tem efeitos comprovados na redução do stress e ansiedade. O ritmo repetitivo do remo tem um efeito quase meditativo, ajudando a limpar a mente e a relaxar. Muitos praticantes descrevem uma sensação de paz e liberdade que é difícil de encontrar noutras atividades.</p>

<h2>Conexão com a Natureza</h2>
<p>O kayak permite uma aproximação à natureza que outros meios não conseguem. Nas águas dos Açores, é comum avistar golfinhos, tartarugas e uma variedade impressionante de peixes. As grutas marinhas e formações rochosas vulcânicas são acessíveis apenas por água, oferecendo perspetivas únicas das ilhas.</p>

<h2>Atividade para Todos</h2>
<p>Uma das grandes vantagens do kayak é a sua acessibilidade. Existem kayaks individuais e duplos, permitindo que famílias e amigos partilhem a experiência. Não é necessária experiência prévia - após uma breve introdução, qualquer pessoa pode começar a remar.</p>

<h2>A Experiência Azores4fun</h2>
<p>A Azores4fun oferece aluguer de kayaks de qualidade, com todo o equipamento de segurança incluído. Podemos sugerir os melhores percursos de acordo com as condições do dia e o seu nível de experiência. Os nossos kayaks estão disponíveis na zona da Horta, com fácil acesso à água.</p>

<p>Venha descobrir os benefícios do kayak e explore as maravilhas naturais do Faial!</p>`,
    contentEn: `<p>Kayaking is an activity that combines physical exercise with exploring nature in a unique way. In the Azores, and particularly on Faial island, this activity takes on a special dimension thanks to the marine biodiversity and impressive volcanic landscapes.</p>

<h2>Health Benefits</h2>
<p>Paddling a kayak is an excellent cardiovascular exercise that primarily works the arms, shoulders, back and core. Unlike many gym exercises, kayaking offers a low-impact workout that's gentle on the joints. An hour of kayaking can burn between 300 to 500 calories, depending on intensity.</p>

<h2>Mental Benefits</h2>
<p>Being on the water, surrounded by nature, has proven effects on reducing stress and anxiety. The repetitive rhythm of paddling has an almost meditative effect, helping to clear the mind and relax. Many practitioners describe a sense of peace and freedom that's hard to find in other activities.</p>

<h2>Connection with Nature</h2>
<p>Kayaking allows an approach to nature that other means cannot achieve. In Azorean waters, it's common to spot dolphins, turtles and an impressive variety of fish. Marine caves and volcanic rock formations are accessible only by water, offering unique perspectives of the islands.</p>

<h2>Activity for Everyone</h2>
<p>One of the great advantages of kayaking is its accessibility. There are single and double kayaks, allowing families and friends to share the experience. No prior experience is necessary - after a brief introduction, anyone can start paddling.</p>

<h2>The Azores4fun Experience</h2>
<p>Azores4fun offers quality kayak rentals, with all safety equipment included. We can suggest the best routes according to the day's conditions and your experience level. Our kayaks are available in the Horta area, with easy access to the water.</p>

<p>Come discover the benefits of kayaking and explore the natural wonders of Faial!</p>`,
    excerptPt: "Conheça os benefícios físicos e mentais do kayak, uma atividade perfeita para explorar as águas cristalinas e a vida marinha dos Açores.",
    excerptEn: "Learn about the physical and mental benefits of kayaking, a perfect activity to explore the crystal-clear waters and marine life of the Azores.",
    author: "Ricardo Faustino",
    featuredImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    category: "watersports",
    publishedAt: new Date("2023-06-13T10:00:00Z"),
  },
  {
    slug: "desportos-nauticos-faial-guia-completo",
    titlePt: "Desportos Náuticos no Faial: Um Guia Completo",
    titleEn: "Water Sports in Faial: A Complete Guide",
    contentPt: `<p>A ilha do Faial é um verdadeiro paraíso para os amantes de desportos náuticos. Com as suas águas cristalinas, clima ameno e paisagens vulcânicas impressionantes, oferece condições ideais para uma variedade de atividades aquáticas ao longo de todo o ano.</p>

<h2>Stand Up Paddle (SUP)</h2>
<p>O SUP é uma das atividades mais populares no Faial. Ideal para águas calmas como a Marina da Horta ou Porto Pim, permite explorar a costa de uma forma relaxante. É acessível a todas as idades e níveis de condição física, tornando-o perfeito para famílias.</p>

<h2>Kayak</h2>
<p>O kayak oferece uma forma mais ativa de explorar as águas açorianas. Perfeito para descobrir grutas marinhas, praias escondidas e observar a vida marinha de perto. Disponível em versões individuais e duplas, é uma atividade excelente para casais e amigos.</p>

<h2>Snorkeling</h2>
<p>As águas dos Açores estão entre as mais limpas do Atlântico, oferecendo excelente visibilidade para snorkeling. Na zona de Porto Pim e nas piscinas naturais do Varadouro, é possível observar uma rica biodiversidade marinha, incluindo diversas espécies de peixes, ouriços e ocasionalmente tartarugas.</p>

<h2>Mergulho</h2>
<p>Para os mais aventureiros, o mergulho nos Açores oferece experiências únicas. A ilha do Faial possui vários pontos de mergulho, incluindo recifes vulcânicos e naufrágios. A visibilidade pode atingir os 30 metros, revelando um mundo subaquático fascinante.</p>

<h2>Quando Praticar</h2>
<p>A melhor época para desportos náuticos no Faial é entre maio e outubro, quando as águas estão mais calmas e a temperatura mais agradável. No entanto, com o equipamento adequado, é possível praticar durante todo o ano.</p>

<h2>Segurança em Primeiro Lugar</h2>
<p>Independentemente da atividade escolhida, a segurança deve ser sempre prioritária. Recomendamos sempre verificar as condições meteorológicas, usar equipamento de segurança adequado e, para iniciantes, optar por zonas protegidas ou atividades guiadas.</p>

<p>A Azores4fun oferece aluguer de equipamento de qualidade para SUP e kayak, com todo o material de segurança incluído. Entre em contacto para planear a sua aventura náutica!</p>`,
    contentEn: `<p>Faial island is a true paradise for water sports lovers. With its crystal-clear waters, mild climate and impressive volcanic landscapes, it offers ideal conditions for a variety of water activities throughout the year.</p>

<h2>Stand Up Paddle (SUP)</h2>
<p>SUP is one of the most popular activities in Faial. Ideal for calm waters like Horta Marina or Porto Pim, it allows exploring the coast in a relaxing way. It's accessible to all ages and fitness levels, making it perfect for families.</p>

<h2>Kayak</h2>
<p>Kayaking offers a more active way to explore Azorean waters. Perfect for discovering marine caves, hidden beaches and observing marine life up close. Available in single and double versions, it's an excellent activity for couples and friends.</p>

<h2>Snorkeling</h2>
<p>Azorean waters are among the cleanest in the Atlantic, offering excellent visibility for snorkeling. In the Porto Pim area and the natural pools of Varadouro, it's possible to observe a rich marine biodiversity, including various species of fish, sea urchins and occasionally turtles.</p>

<h2>Diving</h2>
<p>For the more adventurous, diving in the Azores offers unique experiences. Faial island has several diving spots, including volcanic reefs and shipwrecks. Visibility can reach 30 meters, revealing a fascinating underwater world.</p>

<h2>When to Practice</h2>
<p>The best time for water sports in Faial is between May and October, when the waters are calmer and the temperature more pleasant. However, with proper equipment, it's possible to practice year-round.</p>

<h2>Safety First</h2>
<p>Regardless of the chosen activity, safety should always be a priority. We always recommend checking weather conditions, using appropriate safety equipment and, for beginners, opting for protected areas or guided activities.</p>

<p>Azores4fun offers quality equipment rental for SUP and kayak, with all safety gear included. Get in touch to plan your nautical adventure!</p>`,
    excerptPt: "Guia completo sobre desportos náuticos no Faial: SUP, kayak, snorkeling e mergulho. Descubra as melhores atividades aquáticas nos Açores.",
    excerptEn: "Complete guide to water sports in Faial: SUP, kayak, snorkeling and diving. Discover the best water activities in the Azores.",
    author: "Ricardo Faustino",
    featuredImage: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800",
    category: "watersports",
    publishedAt: new Date("2022-09-26T10:00:00Z"),
  },
  {
    slug: "aluguer-equipamento-desportos-nauticos",
    titlePt: "Aluguer de Equipamento para Desportos Náuticos no Faial",
    titleEn: "Water Sports Equipment Rental in Faial",
    contentPt: `<p>Está a planear umas férias nos Açores e quer explorar as águas cristalinas do Faial? A Azores4fun oferece aluguer de equipamento de qualidade para que possa desfrutar das melhores experiências náuticas sem preocupações.</p>

<h2>O Nosso Equipamento</h2>

<h3>Stand Up Paddle (SUP)</h3>
<p>Disponibilizamos pranchas de SUP de diversos tamanhos, adequadas tanto para iniciantes como para praticantes experientes. Todas as pranchas são infláveis de alta qualidade, fáceis de transportar e extremamente estáveis. O aluguer inclui prancha, remo, leash e colete salva-vidas.</p>

<h3>Kayaks</h3>
<p>Os nossos kayaks estão disponíveis em versões individuais e duplas. São estáveis, confortáveis e ideais para explorar a costa do Faial. Cada aluguer inclui kayak, remos, coletes salva-vidas e um mapa com sugestões de percursos.</p>

<h3>Equipamento de Snorkeling</h3>
<p>Para quem quer explorar o mundo subaquático, disponibilizamos kits de snorkeling completos, incluindo máscara, tubo e barbatanas. Todo o equipamento é regularmente desinfetado e verificado.</p>

<h2>Como Funciona</h2>
<p>O processo é simples: contacte-nos com antecedência para reservar o equipamento desejado, dirija-se ao nosso local de recolha na Horta e receba uma breve introdução sobre o uso seguro do equipamento. Depois, é só desfrutar!</p>

<h2>Tarifas Flexíveis</h2>
<p>Oferecemos tarifas horárias, de meio dia e dia inteiro, adaptando-se às suas necessidades. Descontos especiais estão disponíveis para alugueres de vários dias ou grupos.</p>

<h2>Onde Praticar</h2>
<p>Podemos aconselhá-lo sobre os melhores locais para praticar de acordo com as condições do dia. Desde as águas calmas da Marina da Horta até às praias de areia do Almoxarife, há opções para todos os gostos e níveis de experiência.</p>

<h2>Segurança Garantida</h2>
<p>Todo o nosso equipamento é regularmente inspecionado e mantido. Fornecemos sempre equipamento de segurança obrigatório e informações sobre condições locais. A sua segurança é a nossa prioridade.</p>

<p>Reserve já o seu equipamento e prepare-se para uma aventura inesquecível nas águas do Faial!</p>`,
    contentEn: `<p>Are you planning a holiday in the Azores and want to explore the crystal-clear waters of Faial? Azores4fun offers quality equipment rental so you can enjoy the best nautical experiences worry-free.</p>

<h2>Our Equipment</h2>

<h3>Stand Up Paddle (SUP)</h3>
<p>We provide SUP boards of various sizes, suitable for both beginners and experienced practitioners. All boards are high-quality inflatables, easy to transport and extremely stable. Rental includes board, paddle, leash and life jacket.</p>

<h3>Kayaks</h3>
<p>Our kayaks are available in single and double versions. They are stable, comfortable and ideal for exploring Faial's coast. Each rental includes kayak, paddles, life jackets and a map with route suggestions.</p>

<h3>Snorkeling Equipment</h3>
<p>For those who want to explore the underwater world, we provide complete snorkeling kits, including mask, snorkel and fins. All equipment is regularly disinfected and checked.</p>

<h2>How It Works</h2>
<p>The process is simple: contact us in advance to book the desired equipment, come to our pickup location in Horta and receive a brief introduction on safe use of the equipment. Then, just enjoy!</p>

<h2>Flexible Rates</h2>
<p>We offer hourly, half-day and full-day rates, adapting to your needs. Special discounts are available for multi-day rentals or groups.</p>

<h2>Where to Practice</h2>
<p>We can advise you on the best places to practice according to the day's conditions. From the calm waters of Horta Marina to the sandy beaches of Almoxarife, there are options for all tastes and experience levels.</p>

<h2>Guaranteed Safety</h2>
<p>All our equipment is regularly inspected and maintained. We always provide mandatory safety equipment and information about local conditions. Your safety is our priority.</p>

<p>Book your equipment now and get ready for an unforgettable adventure in Faial's waters!</p>`,
    excerptPt: "Alugue equipamento de qualidade para SUP, kayak e snorkeling no Faial. A Azores4fun oferece tudo o que precisa para a sua aventura náutica.",
    excerptEn: "Rent quality equipment for SUP, kayak and snorkeling in Faial. Azores4fun offers everything you need for your nautical adventure.",
    author: "Ricardo Faustino",
    featuredImage: "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?w=800",
    category: "watersports",
    publishedAt: new Date("2022-06-16T10:00:00Z"),
  },
];

export async function seedBlogIfEmpty() {
  try {
    const existing = await db.select().from(blogPosts).limit(1);
    
    if (existing.length > 0) {
      console.log("Blog already has articles, skipping seed.");
      return;
    }

    console.log("Blog is empty, seeding articles...");
    
    for (const article of seedArticles) {
      try {
        await db.insert(blogPosts).values(article).onConflictDoNothing();
        console.log(`Inserted: ${article.slug}`);
      } catch (error) {
        console.error(`Error inserting ${article.slug}:`, error);
      }
    }
    
    console.log("Blog seeding complete!");
  } catch (error) {
    console.error("Error checking/seeding blog:", error);
  }
}
