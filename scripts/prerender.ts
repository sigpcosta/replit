import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

interface PrerenderRoute {
  path: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  service?: string;
}

const routes: PrerenderRoute[] = [
  {
    path: "/",
    title: "Azores4fun - Turismo, Alojamento e Eventos nos Açores | Faial",
    titleEn: "Azores4fun - Tourism, Accommodation and Events in the Azores | Faial",
    description: "Azores4fun oferece alojamento, animação turística, paintball, tatuagens, eventos e gestão imobiliária na Horta, Faial, Açores.",
    descriptionEn: "Azores4fun offers accommodation, tourist activities, paintball, tattoos, events and property management in Horta, Faial, Azores.",
  },
  {
    path: "/alojamento",
    title: "Alojamento na Horta - Casa da Travessa | Azores4fun",
    titleEn: "Accommodation in Horta - Casa da Travessa | Azores4fun",
    description: "Apartamentos com espírito náutico no centro da Horta, Faial. Vista para o mar e marina.",
    descriptionEn: "Apartments with nautical spirit in the center of Horta, Faial. Sea and marina views.",
    service: "accommodation",
  },
  {
    path: "/animacao",
    title: "Animação Turística - Atividades nos Açores | Azores4fun",
    titleEn: "Tourist Activities - Things to Do in the Azores | Azores4fun",
    description: "Paintball, LaserTag, Kayak, SUP, Tours de Carrinha Elétrica. Experiências únicas no Faial.",
    descriptionEn: "Paintball, LaserTag, Kayak, SUP, Electric Van Tours. Unique experiences in Faial.",
    service: "tourism",
  },
  {
    path: "/paintball",
    title: "Paintball e LaserTag no Faial | Azores4fun",
    titleEn: "Paintball and LaserTag in Faial | Azores4fun",
    description: "Jogos de paintball e lasertag para grupos, festas e eventos. Equipamento profissional.",
    descriptionEn: "Paintball and lasertag games for groups, parties and events. Professional equipment.",
    service: "paintball",
  },
  {
    path: "/tatuagem",
    title: "Tatuagens e Piercings na Horta - Catarina Gomes | Azores4fun",
    titleEn: "Tattoos and Piercings in Horta - Catarina Gomes | Azores4fun",
    description: "Estúdio de tatuagem profissional com a artista Catarina Gomes. Trabalhos personalizados.",
    descriptionEn: "Professional tattoo studio with artist Catarina Gomes. Custom work.",
    service: "tattoo",
  },
  {
    path: "/eventos",
    title: "Eventos e Festas no Faial | Azores4fun",
    titleEn: "Events and Parties in Faial | Azores4fun",
    description: "Festas de aniversário, despedidas de solteiro, team building. Organização completa.",
    descriptionEn: "Birthday parties, bachelor parties, team building. Complete organization.",
    service: "events",
  },
  {
    path: "/imobiliaria",
    title: "Gestão Imobiliária no Faial | Azores4fun",
    titleEn: "Property Management in Faial | Azores4fun",
    description: "Gestão de propriedades e imóveis na ilha do Faial. Aluguer de longa e curta duração.",
    descriptionEn: "Property management on Faial island. Long and short term rentals.",
    service: "property",
  },
  {
    path: "/loja",
    title: "Loja Azores4fun na Horta | Merchandising e Produtos Locais",
    titleEn: "Azores4fun Shop in Horta | Merchandise and Local Products",
    description: "Loja física no centro da Horta. Merchandising Azores4fun e produtos locais açorianos.",
    descriptionEn: "Physical store in the center of Horta. Azores4fun merchandise and local Azorean products.",
    service: "shop",
  },
  {
    path: "/sobre",
    title: "Sobre Nós - Azores4fun | A Nossa História",
    titleEn: "About Us - Azores4fun | Our Story",
    description: "Conheça a equipa Azores4fun e a nossa missão de proporcionar experiências únicas no Faial.",
    descriptionEn: "Meet the Azores4fun team and our mission to provide unique experiences in Faial.",
  },
  {
    path: "/portfolio",
    title: "Portfolio de Tatuagens - Catarina Gomes | Azores4fun",
    titleEn: "Tattoo Portfolio - Catarina Gomes | Azores4fun",
    description: "Galeria de trabalhos de tatuagem realizados pela artista Catarina Gomes.",
    descriptionEn: "Gallery of tattoo work by artist Catarina Gomes.",
    service: "tattoo",
  },
  {
    path: "/blog",
    title: "Blog Azores4fun - Dicas e Novidades dos Açores",
    titleEn: "Azores4fun Blog - Tips and News from the Azores",
    description: "Artigos sobre turismo, cultura, gastronomia e atividades nos Açores.",
    descriptionEn: "Articles about tourism, culture, gastronomy and activities in the Azores.",
  },
  {
    path: "/contact",
    title: "Contacto - Azores4fun | Fale Connosco",
    titleEn: "Contact - Azores4fun | Get in Touch",
    description: "Entre em contacto connosco. Telefone, WhatsApp, email e morada na Horta, Faial.",
    descriptionEn: "Get in touch with us. Phone, WhatsApp, email and address in Horta, Faial.",
  },
];

function generateFAQSchema(faqs: any[], language: string = "pt") {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: language === "pt" ? faq.questionPt : faq.questionEn,
      acceptedAnswer: {
        "@type": "Answer",
        text: language === "pt" ? faq.answerPt : faq.answerEn,
      },
    })),
  };
}

function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Azores4fun",
    description: "Multi-service tourism company in Horta, Faial, Azores.",
    url: "https://azores4fun.com",
    telephone: "+351 934 993 770",
    email: "info@azores4fun.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Conselheiro Medeiros, 27",
      addressLocality: "Horta",
      addressRegion: "Açores",
      postalCode: "9900-144",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5333,
      longitude: -28.6333,
    },
  };
}

function generateServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Azores4fun",
      url: "https://azores4fun.com",
    },
  };
}

async function fetchFaqs(): Promise<any[]> {
  try {
    const response = await fetch("http://localhost:5000/api/faqs");
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Could not fetch FAQs, using empty array");
  }
  return [];
}

async function fetchBlogPosts(): Promise<any[]> {
  try {
    const response = await fetch("http://localhost:5000/api/blog");
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Could not fetch blog posts, using empty array");
  }
  return [];
}

function generatePageHTML(
  route: PrerenderRoute,
  faqs: any[],
  language: string = "pt"
): string {
  const title = language === "pt" ? route.title : route.titleEn;
  const description = language === "pt" ? route.description : route.descriptionEn;
  const canonicalUrl = `https://azores4fun.com${route.path}`;

  const serviceFaqs = route.service
    ? faqs.filter((f) => f.service === route.service)
    : faqs.slice(0, 20);

  const schemas = [
    generateOrganizationSchema(),
    route.service ? generateServiceSchema(title, description, canonicalUrl) : null,
    serviceFaqs.length > 0 ? generateFAQSchema(serviceFaqs, language) : null,
  ].filter(Boolean);

  const schemaScripts = schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s, null, 2)}</script>`)
    .join("\n    ");

  const faqsHtml = serviceFaqs.length > 0
    ? `
        <section class="prerender-faqs">
          <h2>${language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}</h2>
          <dl>
            ${serviceFaqs
              .map(
                (faq) => `
              <dt>${language === "pt" ? faq.questionPt : faq.questionEn}</dt>
              <dd>${language === "pt" ? faq.answerPt : faq.answerEn}</dd>
            `
              )
              .join("")}
          </dl>
        </section>
      `
    : "";

  return `<!DOCTYPE html>
<html lang="${language}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="pt" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="en" href="${canonicalUrl}?lang=en" />
    
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="Azores4fun" />
    
    ${schemaScripts}
  </head>
  <body>
    <div id="prerender-content" style="display:none;">
      <header>
        <h1>${title}</h1>
        <p>${description}</p>
      </header>
      
      <nav>
        <a href="/">Início</a>
        <a href="/alojamento">Alojamento</a>
        <a href="/animacao">Atividades</a>
        <a href="/tatuagem">Tatuagem</a>
        <a href="/eventos">Eventos</a>
        <a href="/loja">Loja</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contacto</a>
      </nav>
      
      ${faqsHtml}
      
      <footer>
        <p>Azores4fun - Horta, Faial, Açores</p>
        <p>Tel: +351 934 993 770 | Email: info@azores4fun.com</p>
      </footer>
    </div>
    
    <div id="root"></div>
    <script>window.__PRERENDER_DATA__ = ${JSON.stringify({ faqs: serviceFaqs })};</script>
  </body>
</html>`;
}

async function prerender() {
  console.log("Starting prerender process...");

  const prerenderDir = path.join(rootDir, "public", "prerender");
  if (!fs.existsSync(prerenderDir)) {
    fs.mkdirSync(prerenderDir, { recursive: true });
  }

  const faqs = await fetchFaqs();
  const blogPosts = await fetchBlogPosts();

  console.log(`Fetched ${faqs.length} FAQs and ${blogPosts.length} blog posts`);

  for (const route of routes) {
    const filename = route.path === "/" ? "index" : route.path.replace(/^\//, "").replace(/\//g, "-");

    const htmlPt = generatePageHTML(route, faqs, "pt");
    fs.writeFileSync(path.join(prerenderDir, `${filename}.html`), htmlPt);
    console.log(`Generated: ${filename}.html`);

    const htmlEn = generatePageHTML(route, faqs, "en");
    fs.writeFileSync(path.join(prerenderDir, `${filename}.en.html`), htmlEn);
    console.log(`Generated: ${filename}.en.html`);
  }

  for (const post of blogPosts) {
    const blogRoute: PrerenderRoute = {
      path: `/blog/${post.slug}`,
      title: post.titlePt || post.title,
      titleEn: post.titleEn || post.title,
      description: post.excerptPt || post.excerpt || "",
      descriptionEn: post.excerptEn || post.excerpt || "",
    };

    const filename = `blog-${post.slug}`;
    const htmlPt = generatePageHTML(blogRoute, [], "pt");
    fs.writeFileSync(path.join(prerenderDir, `${filename}.html`), htmlPt);
    console.log(`Generated: ${filename}.html`);
  }

  const dataFile = {
    generatedAt: new Date().toISOString(),
    routes: routes.map((r) => r.path),
    blogPosts: blogPosts.map((p) => `/blog/${p.slug}`),
    faqCount: faqs.length,
  };
  fs.writeFileSync(
    path.join(prerenderDir, "manifest.json"),
    JSON.stringify(dataFile, null, 2)
  );

  console.log("Prerender complete!");
}

prerender().catch(console.error);
