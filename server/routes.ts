import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import path from "path";
import fs from "fs";
import { insertBlogPostSchema, insertFaqSchema } from "@shared/schema";
import OpenAI from "openai";

function isSearchBot(userAgent: string): boolean {
  const bots = [
    'googlebot', 'bingbot', 'yandexbot', 'duckduckbot', 'slurp',
    'baiduspider', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
    'whatsapp', 'telegrambot', 'applebot', 'semrushbot', 'ahrefsbot',
    'mj12bot', 'dotbot', 'rogerbot', 'seznambot', 'ia_archiver',
    'curl', 'wget', 'python-requests', 'chatgpt', 'claude', 'anthropic'
  ];
  const ua = userAgent.toLowerCase();
  return bots.some(bot => ua.includes(bot));
}

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const bookingSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  service: z.string().min(1, "Serviço é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  const publicPath = path.resolve(import.meta.dirname, "..", "public");
  const prerenderPath = path.resolve(publicPath, "prerender");
  const attachedAssetsPath = path.resolve(import.meta.dirname, "..", "attached_assets");

  interface RouteConfig {
    title: string;
    titleEn: string;
    desc: string;
    descEn: string;
    service?: string;
    serviceType?: string;
  }

  const routeConfig: Record<string, RouteConfig> = {
    '/': { title: 'Azores4fun - Turismo, Alojamento e Eventos nos Açores', titleEn: 'Azores4fun - Tourism, Accommodation and Events in the Azores', desc: 'Experiências únicas na ilha do Faial: alojamento, paintball, tatuagem, eventos e mais.', descEn: 'Unique experiences on Faial island: accommodation, paintball, tattoos, events and more.' },
    '/alojamento': { title: 'Alojamento na Horta - Casa da Travessa', titleEn: 'Accommodation in Horta - Casa da Travessa', desc: 'Apartamentos com espírito náutico no centro da Horta, Faial.', descEn: 'Apartments with nautical spirit in the center of Horta, Faial.', service: 'accommodation', serviceType: 'LodgingBusiness' },
    '/animacao': { title: 'Animação Turística - Atividades nos Açores', titleEn: 'Tourist Activities in the Azores', desc: 'Paintball, LaserTag, GelBlaster, Nerfs, Kayak, SUP, Tours de Carrinha.', descEn: 'Paintball, LaserTag, GelBlaster, Nerfs, Kayak, SUP, Van Tours.', service: 'tourism', serviceType: 'TouristAttraction' },
    '/tatuagem': { title: 'Tatuagens e Piercings na Horta - Catarina Gomes', titleEn: 'Tattoos and Piercings in Horta - Catarina Gomes', desc: 'Estúdio profissional de tatuagem e piercing com a artista Catarina Gomes.', descEn: 'Professional tattoo and piercing studio with artist Catarina Gomes.', service: 'tattoo', serviceType: 'TattooParlor' },
    '/eventos': { title: 'Eventos e Festas no Faial', titleEn: 'Events and Parties in Faial', desc: 'Festas de aniversário, despedidas de solteiro, team building, organização completa.', descEn: 'Birthday parties, bachelor parties, team building, complete organization.', service: 'events', serviceType: 'EventVenue' },
    '/paintball': { title: 'Paintball e LaserTag no Faial', titleEn: 'Paintball and LaserTag in Faial', desc: 'Jogos de paintball e lasertag para grupos, festas e eventos corporativos.', descEn: 'Paintball and lasertag games for groups, parties and corporate events.', service: 'paintball', serviceType: 'SportsActivityLocation' },
    '/imobiliaria': { title: 'Gestão Imobiliária no Faial', titleEn: 'Property Management in Faial', desc: 'Gestão de propriedades, aluguer de longa e curta duração na ilha do Faial.', descEn: 'Property management, long and short term rentals on Faial island.', service: 'property', serviceType: 'RealEstateAgent' },
    '/loja': { title: 'Loja Azores4fun na Horta', titleEn: 'Azores4fun Shop in Horta', desc: 'Loja física com merchandising Azores4fun e produtos regionais açorianos.', descEn: 'Physical store with Azores4fun merchandise and Azorean regional products.', service: 'shop', serviceType: 'Store' },
    '/sobre': { title: 'Sobre Nós - A Nossa História', titleEn: 'About Us - Our Story', desc: 'Conheça a equipa Azores4fun e a nossa missão de proporcionar experiências únicas.', descEn: 'Meet the Azores4fun team and our mission to provide unique experiences.' },
    '/portfolio': { title: 'Portfolio de Tatuagens - Catarina Gomes', titleEn: 'Tattoo Portfolio - Catarina Gomes', desc: 'Galeria de trabalhos de tatuagem realizados pela artista Catarina Gomes.', descEn: 'Gallery of tattoo work by artist Catarina Gomes.', service: 'tattoo' },
    '/blog': { title: 'Blog Azores4fun - Dicas e Novidades', titleEn: 'Azores4fun Blog - Tips and News', desc: 'Artigos sobre turismo, cultura, gastronomia e atividades nos Açores.', descEn: 'Articles about tourism, culture, gastronomy and activities in the Azores.' },
    '/contact': { title: 'Contacto - Fale Connosco', titleEn: 'Contact - Get in Touch', desc: 'Entre em contacto: telefone, WhatsApp, email. Rua Conselheiro Medeiros 27, Horta.', descEn: 'Get in touch: phone, WhatsApp, email. Rua Conselheiro Medeiros 27, Horta.' },
  };

  async function generateDynamicPrerenderHTML(routePath: string, language: string = 'pt'): Promise<string | null> {
    try {
      const faqs = await storage.getAllFaqs();
      let config = routeConfig[routePath];
      let blogPost = null;

      if (!config && routePath.startsWith('/blog/')) {
        const slug = routePath.replace('/blog/', '');
        const posts = await storage.getAllBlogPosts();
        blogPost = posts.find(p => p.slug === slug);
        if (blogPost) {
          config = {
            title: blogPost.titlePt || blogPost.title,
            titleEn: blogPost.titleEn || blogPost.title,
            desc: blogPost.excerptPt || blogPost.excerpt || '',
            descEn: blogPost.excerptEn || blogPost.excerpt || '',
          };
        }
      }

      if (!config) return null;

      const title = language === 'pt' ? config.title : config.titleEn;
      const desc = language === 'pt' ? config.desc : config.descEn;
      const serviceFaqs = config.service ? faqs.filter(f => f.service === config.service) : (routePath === '/' ? faqs.slice(0, 20) : []);
      const canonicalUrl = `https://azores4fun.com${routePath}`;

      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Azores4fun",
        "description": language === 'pt' ? "Empresa de turismo multi-serviços na Horta, Faial, Açores." : "Multi-service tourism company in Horta, Faial, Azores.",
        "url": "https://azores4fun.com",
        "telephone": "+351 934 993 770",
        "email": "info@azores4fun.com",
        "address": { "@type": "PostalAddress", "streetAddress": "Rua Conselheiro Medeiros, 27", "addressLocality": "Horta", "postalCode": "9900-144", "addressCountry": "PT" },
        "geo": { "@type": "GeoCoordinates", "latitude": 38.5333, "longitude": -28.6333 }
      };

      const serviceSchema = config.serviceType ? {
        "@context": "https://schema.org",
        "@type": config.serviceType,
        "name": title,
        "description": desc,
        "url": canonicalUrl,
        "provider": { "@type": "LocalBusiness", "name": "Azores4fun", "url": "https://azores4fun.com" }
      } : null;

      const faqSchema = serviceFaqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": serviceFaqs.map(faq => ({
          "@type": "Question",
          "name": language === 'pt' ? faq.questionPt : faq.questionEn,
          "acceptedAnswer": { "@type": "Answer", "text": language === 'pt' ? faq.answerPt : faq.answerEn }
        }))
      } : null;

      const blogPostSchema = blogPost ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": desc,
        "url": canonicalUrl,
        "author": { "@type": "Organization", "name": "Azores4fun" },
        "publisher": { "@type": "Organization", "name": "Azores4fun", "url": "https://azores4fun.com" }
      } : null;

      const faqsHtml = serviceFaqs.length > 0 ? serviceFaqs.map(faq => `
        <article itemscope itemtype="https://schema.org/Question">
          <h3 itemprop="name">${language === 'pt' ? faq.questionPt : faq.questionEn}</h3>
          <div itemscope itemtype="https://schema.org/Answer" itemprop="acceptedAnswer">
            <p itemprop="text">${language === 'pt' ? faq.answerPt : faq.answerEn}</p>
          </div>
        </article>
      `).join('') : '';

      const blogContentHtml = blogPost ? `<article>${language === 'pt' ? (blogPost.contentPt || blogPost.content) : (blogPost.contentEn || blogPost.content)}</article>` : '';

      return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Azores4fun</title>
  <meta name="description" content="${desc}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="alternate" hreflang="pt" href="${canonicalUrl}">
  <link rel="alternate" hreflang="en" href="${canonicalUrl}?lang=en">
  <link rel="alternate" hreflang="x-default" href="${canonicalUrl}">
  <meta property="og:type" content="${blogPost ? 'article' : 'website'}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="Azores4fun">
  <meta property="og:locale" content="${language === 'pt' ? 'pt_PT' : 'en_US'}">
  <script type="application/ld+json">${JSON.stringify(orgSchema)}</script>
  ${serviceSchema ? `<script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>` : ''}
  ${faqSchema ? `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>` : ''}
  ${blogPostSchema ? `<script type="application/ld+json">${JSON.stringify(blogPostSchema)}</script>` : ''}
</head>
<body>
  <header><h1>${title}</h1><p>${desc}</p></header>
  <nav>
    <a href="/">Início</a> | <a href="/alojamento">Alojamento</a> | <a href="/animacao">Atividades</a> | <a href="/tatuagem">Tatuagem</a> | <a href="/eventos">Eventos</a> | <a href="/imobiliaria">Imobiliária</a> | <a href="/loja">Loja</a> | <a href="/blog">Blog</a> | <a href="/contact">Contacto</a>
  </nav>
  <main>
    ${blogContentHtml}
    ${faqsHtml ? `<section><h2>${language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}</h2>${faqsHtml}</section>` : ''}
  </main>
  <footer>
    <p>Azores4fun - Horta, Faial, Açores</p>
    <p>Tel: +351 934 993 770 | Email: info@azores4fun.com</p>
    <p>Rua Conselheiro Medeiros, 27, 9900-144 Horta</p>
  </footer>
</body>
</html>`;
    } catch (error) {
      console.error('Error generating prerender HTML:', error);
      return null;
    }
  }

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    const userAgent = req.headers['user-agent'] || '';
    const url = req.path;

    if (!isSearchBot(userAgent) || url.startsWith('/api/') || url.includes('.')) {
      return next();
    }

    const language = (req.query.lang === 'en' || req.headers['accept-language']?.includes('en')) ? 'en' : 'pt';

    const prerenderHtml = await generateDynamicPrerenderHTML(url, language);
    if (prerenderHtml) {
      console.log(`[SEO] Serving prerendered content for ${url} to ${userAgent.substring(0, 30)}...`);
      return res.type('html').send(prerenderHtml);
    }

    next();
  });
  
  // Serve attached assets as static files
  app.get("/attached_assets/:filename", (req, res) => {
    const filePath = path.join(attachedAssetsPath, req.params.filename);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send("File not found");
    }
  });
  
  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const { generateSitemap } = await import("./generate-sitemap");
      const sitemap = await generateSitemap();
      res.type("application/xml").send(sitemap);
    } catch (error) {
      console.error("Error generating sitemap:", error);
      const sitemapPath = path.join(publicPath, "sitemap.xml");
      if (fs.existsSync(sitemapPath)) {
        res.type("application/xml").sendFile(sitemapPath);
      } else {
        res.status(500).send("Error generating sitemap");
      }
    }
  });
  
  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.join(publicPath, "robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.type("text/plain").sendFile(robotsPath);
    } else {
      res.status(404).send("Robots.txt not found");
    }
  });
  
  app.get("/logo.gif", (_req, res) => {
    const logoPath = path.join(publicPath, "logo.gif");
    if (fs.existsSync(logoPath)) {
      res.type("image/gif").sendFile(logoPath);
    } else {
      res.status(404).send("Logo not found");
    }
  });
  
  app.get("/og-home.jpg", (_req, res) => {
    const imagePath = path.join(publicPath, "og-home.jpg");
    if (fs.existsSync(imagePath)) {
      res.type("image/jpeg").sendFile(imagePath);
    } else {
      res.status(404).send("OG image not found");
    }
  });
  
  app.get("/og-default.jpg", (_req, res) => {
    const imagePath = path.join(publicPath, "og-default.jpg");
    if (fs.existsSync(imagePath)) {
      res.type("image/jpeg").sendFile(imagePath);
    } else {
      res.status(404).send("OG image not found");
    }
  });

  app.post("/api/booking", async (req, res) => {
    try {
      const data = bookingSchema.parse(req.body);
      
      // Enviar email usando Resend
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        console.error("RESEND_API_KEY não configurada");
        return res.status(500).json({ 
          error: "Configuração de email não encontrada. Por favor, contacte o administrador." 
        });
      }

      const emailContent = `
        Nova Solicitação de Agendamento - Azores4fun Tattoo
        
        Nome: ${data.name}
        Email: ${data.email}
        Telefone: ${data.phone}
        Serviço: ${data.service}
        
        Descrição:
        ${data.description}
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Azores4fun <onboarding@resend.dev>",
          to: ["catarinagomestattoo00@gmail.com"],
          subject: `Nova Solicitação de Agendamento - ${data.service}`,
          text: emailContent,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Erro ao enviar email:", error);
        return res.status(500).json({ 
          error: "Erro ao enviar solicitação. Por favor, tente novamente." 
        });
      }

      res.json({ 
        success: true, 
        message: "Solicitação enviada com sucesso! Entraremos em contacto em breve." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: error.errors 
        });
      }
      console.error("Erro ao processar agendamento:", error);
      res.status(500).json({ 
        error: "Erro ao processar solicitação. Por favor, tente novamente." 
      });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        console.error("RESEND_API_KEY não configurada");
        return res.status(500).json({ 
          error: "Configuração de email não encontrada. Por favor, contacte o administrador." 
        });
      }

      const emailContent = `
        Nova Mensagem de Contacto - Azores4fun
        
        Nome: ${data.name}
        Email: ${data.email}
        Telefone: ${data.phone || "Não fornecido"}
        
        Mensagem:
        ${data.message}
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Azores4fun <onboarding@resend.dev>",
          to: ["info@azores4fun.com"],
          subject: `Nova Mensagem de Contacto - ${data.name}`,
          text: emailContent,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Erro ao enviar email:", error);
        return res.status(500).json({ 
          error: "Erro ao enviar mensagem. Por favor, tente novamente." 
        });
      }

      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Entraremos em contacto em breve." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: error.errors 
        });
      }
      console.error("Erro ao processar mensagem:", error);
      res.status(500).json({ 
        error: "Erro ao processar mensagem. Por favor, tente novamente." 
      });
    }
  });

  app.get("/api/blog", async (_req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Erro ao obter artigos:", error);
      res.status(500).json({ error: "Erro ao obter artigos" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Artigo não encontrado" });
      }
      res.json(post);
    } catch (error) {
      console.error("Erro ao obter artigo:", error);
      res.status(500).json({ error: "Erro ao obter artigo" });
    }
  });

  // Blog creation endpoint disabled for security - use seed script instead
  // Uncomment and add authentication middleware if admin functionality is needed
  // app.post("/api/blog", async (req, res) => {
  //   try {
  //     const data = insertBlogPostSchema.parse(req.body);
  //     const post = await storage.createBlogPost(data);
  //     res.status(201).json(post);
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       return res.status(400).json({ error: "Dados inválidos", details: error.errors });
  //     }
  //     console.error("Erro ao criar artigo:", error);
  //     res.status(500).json({ error: "Erro ao criar artigo" });
  //   }
  // });

  // Admin Authentication
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  
  // Simple token-based auth for admin
  const adminTokens = new Set<string>();
  
  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    if (!ADMIN_PASSWORD) {
      return res.status(503).json({ error: "Painel de administração não configurado. Configure a variável ADMIN_PASSWORD." });
    }
    if (password === ADMIN_PASSWORD) {
      const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
      adminTokens.add(token);
      res.json({ success: true, token });
    } else {
      res.status(401).json({ error: "Password incorreta" });
    }
  });

  app.post("/api/admin/logout", (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (token) adminTokens.delete(token);
    res.json({ success: true });
  });

  app.get("/api/admin/verify", (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (token && adminTokens.has(token)) {
      res.json({ valid: true });
    } else {
      res.status(401).json({ valid: false });
    }
  });

  const requireAdmin = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (token && adminTokens.has(token)) {
      next();
    } else {
      res.status(401).json({ error: "Não autorizado" });
    }
  };

  // Admin FAQ CRUD
  app.post("/api/admin/faqs", requireAdmin, async (req, res) => {
    try {
      const data = insertFaqSchema.parse(req.body);
      const faq = await storage.createFaq(data);
      res.status(201).json(faq);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Dados inválidos", details: error.errors });
      }
      console.error("Erro ao criar FAQ:", error);
      res.status(500).json({ error: "Erro ao criar FAQ" });
    }
  });

  app.put("/api/admin/faqs/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = insertFaqSchema.partial().parse(req.body);
      const faq = await storage.updateFaq(id, data);
      if (!faq) {
        return res.status(404).json({ error: "FAQ não encontrada" });
      }
      res.json(faq);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Dados inválidos", details: error.errors });
      }
      console.error("Erro ao atualizar FAQ:", error);
      res.status(500).json({ error: "Erro ao atualizar FAQ" });
    }
  });

  app.delete("/api/admin/faqs/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteFaq(id);
      if (!success) {
        return res.status(404).json({ error: "FAQ não encontrada" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Erro ao eliminar FAQ:", error);
      res.status(500).json({ error: "Erro ao eliminar FAQ" });
    }
  });

  // Admin Reseed FAQs
  app.post("/api/admin/faqs/reseed", requireAdmin, async (_req, res) => {
    try {
      const { reseedFaqs } = await import("./seed-faqs");
      const count = await reseedFaqs();
      res.json({ success: true, message: `FAQs atualizadas com sucesso. Total: ${count}` });
    } catch (error) {
      console.error("Erro ao atualizar FAQs:", error);
      res.status(500).json({ error: "Erro ao atualizar FAQs" });
    }
  });

  // Admin Blog CRUD
  app.post("/api/admin/blog", requireAdmin, async (req, res) => {
    try {
      const data = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(data);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Dados inválidos", details: error.errors });
      }
      console.error("Erro ao criar artigo:", error);
      res.status(500).json({ error: "Erro ao criar artigo" });
    }
  });

  app.put("/api/admin/blog/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(id, data);
      if (!post) {
        return res.status(404).json({ error: "Artigo não encontrado" });
      }
      res.json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Dados inválidos", details: error.errors });
      }
      console.error("Erro ao atualizar artigo:", error);
      res.status(500).json({ error: "Erro ao atualizar artigo" });
    }
  });

  app.delete("/api/admin/blog/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteBlogPost(id);
      if (!success) {
        return res.status(404).json({ error: "Artigo não encontrado" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Erro ao eliminar artigo:", error);
      res.status(500).json({ error: "Erro ao eliminar artigo" });
    }
  });

  // FAQ Routes
  app.get("/api/faqs", async (_req, res) => {
    try {
      let allFaqs = await storage.getAllFaqs();
      
      // Auto-seed if database is empty (production safety net)
      if (allFaqs.length === 0) {
        console.log("[API] FAQs empty, triggering auto-seed...");
        const { seedFaqsIfEmpty } = await import("./seed-faqs");
        await seedFaqsIfEmpty();
        allFaqs = await storage.getAllFaqs();
        console.log(`[API] Auto-seeded, now have ${allFaqs.length} FAQs`);
      }
      
      res.json(allFaqs);
    } catch (error) {
      console.error("Erro ao obter FAQs:", error);
      res.status(500).json({ error: "Erro ao obter FAQs" });
    }
  });

  app.get("/api/faqs/:service", async (req, res) => {
    try {
      const serviceFaqs = await storage.getFaqsByService(req.params.service);
      res.json(serviceFaqs);
    } catch (error) {
      console.error("Erro ao obter FAQs do serviço:", error);
      res.status(500).json({ error: "Erro ao obter FAQs do serviço" });
    }
  });

  // Chatbot AI endpoint
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message, language = "pt", currentPage = "/" } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Mensagem é obrigatória" });
      }

      // Get all FAQs to provide context
      const allFaqs = await storage.getAllFaqs();
      
      // Build context from FAQs
      const faqContext = allFaqs.map(faq => {
        const question = language === "pt" ? faq.questionPt : faq.questionEn;
        const answer = language === "pt" ? faq.answerPt : faq.answerEn;
        return `Serviço: ${faq.service}\nPergunta: ${question}\nResposta: ${answer}\nPalavras-chave: ${faq.keywords || ""}`;
      }).join("\n\n");

      const systemPrompt = language === "pt" 
        ? `És o assistente virtual da Azores4Fun, uma empresa de turismo e serviços nos Açores, Ilha do Faial, Horta.

INFORMAÇÕES DA EMPRESA:
- Localização: Rua Vasco da Gama, Horta, Faial, Açores
- Telefone: +351 934 993 770
- WhatsApp: +351 969 519 950
- Email: info@azores4fun.com
- Website: azores4fun.com

SERVIÇOS OFERECIDOS:
1. Paintball - Jogos emocionantes com equipamento profissional
2. LaserTag - Jogos para todas as idades, sem tinta
3. Caiaque & SUP - Aluguer na Marina da Horta e Porto Pim
4. Tours de Carrinha Elétrica - Passeios pela ilha (Caldeira, Capelinhos, etc.)
5. Alojamento - Casa da Travessa com espírito náutico
6. Tatuagens & Piercings - Estúdio profissional com artista experiente (Catarina Gomes)
7. Eventos & Festas - Aniversários, despedidas, team building
8. Transfers - Transporte em carrinha 100% elétrica
9. Gestão Imobiliária - Gestão de propriedades na ilha
10. Loja - Merchandising Azores4Fun e produtos locais

PERGUNTAS FREQUENTES:
${faqContext}

REGRAS:
- Responde SEMPRE em português de Portugal
- Sê simpático, profissional e útil
- Se não souberes a resposta, sugere contactar por WhatsApp (+351 969 519 950) ou telefone (+351 934 993 770)
- Mantém respostas concisas (máximo 3-4 frases)
- Se o utilizador quiser falar com uma pessoa, fornece os contactos
- A página atual do utilizador é: ${currentPage}`
        : `You are the virtual assistant for Azores4Fun, a tourism and services company in the Azores, Faial Island, Horta.

COMPANY INFORMATION:
- Location: Rua Vasco da Gama, Horta, Faial, Azores
- Phone: +351 934 993 770
- WhatsApp: +351 969 519 950
- Email: info@azores4fun.com
- Website: azores4fun.com

SERVICES OFFERED:
1. Paintball - Exciting games with professional equipment
2. LaserTag - Games for all ages, no paint
3. Kayak & SUP - Rental at Marina da Horta and Porto Pim
4. Electric Van Tours - Island tours (Caldeira, Capelinhos, etc.)
5. Accommodation - Casa da Travessa with nautical spirit
6. Tattoos & Piercings - Professional studio with experienced artist (Catarina Gomes)
7. Events & Parties - Birthdays, bachelor parties, team building
8. Transfers - Transport in 100% electric van
9. Property Management - Property management on the island
10. Shop - Azores4Fun merchandise and local products

FREQUENTLY ASKED QUESTIONS:
${faqContext}

RULES:
- ALWAYS respond in English
- Be friendly, professional and helpful
- If you don't know the answer, suggest contacting via WhatsApp (+351 969 519 950) or phone (+351 934 993 770)
- Keep responses concise (maximum 3-4 sentences)
- If the user wants to talk to a person, provide contact details
- The user's current page is: ${currentPage}`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_completion_tokens: 500,
      });

      const aiResponse = response.choices[0]?.message?.content || (language === "pt" 
        ? "Desculpe, não consegui processar a sua mensagem. Por favor, tente novamente." 
        : "Sorry, I couldn't process your message. Please try again.");

      res.json({ response: aiResponse });
    } catch (error) {
      console.error("Erro no chatbot:", error);
      const errorMessage = req.body.language === "pt"
        ? "Desculpe, ocorreu um erro. Por favor, contacte-nos por WhatsApp (+351 969 519 950) ou telefone (+351 934 993 770)."
        : "Sorry, an error occurred. Please contact us via WhatsApp (+351 969 519 950) or phone (+351 934 993 770).";
      res.status(500).json({ response: errorMessage });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
