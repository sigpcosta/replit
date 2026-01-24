import { useLanguage } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Database, FileText, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";

const translations = {
  pt: {
    title: "Documentação da API",
    subtitle: "API REST pública para acesso aos conteúdos da base de dados Azores4fun",
    intro: "A API Azores4fun permite aceder aos conteúdos do blog e FAQs em formato JSON. Todos os endpoints são públicos e não requerem autenticação.",
    baseUrl: "URL Base",
    endpoints: "Endpoints Disponíveis",
    blogs: "Blog",
    blogsDesc: "Acesso aos artigos do blog em português e inglês",
    faqs: "FAQs",
    faqsDesc: "Perguntas frequentes organizadas por serviço",
    method: "Método",
    endpoint: "Endpoint",
    description: "Descrição",
    response: "Resposta",
    example: "Exemplo",
    allBlogs: "Lista todos os artigos do blog",
    singleBlog: "Obtém um artigo específico pelo slug",
    blogById: "Obtém um artigo específico pelo ID",
    allFaqs: "Lista todas as FAQs",
    faqById: "Obtém uma FAQ específica pelo ID",
    faqsByService: "FAQs filtradas por serviço",
    services: "Serviços Disponíveis",
    servicesDesc: "Use estes valores no parâmetro :service",
    accommodation: "Alojamento",
    tourism: "Animação Turística", 
    tattoo: "Tatuagem & Piercing",
    events: "Eventos",
    paintball: "Paintball & LaserTag",
    property: "Gestão Imobiliária",
    shop: "Loja",
    general: "Geral",
    dataStructure: "Estrutura dos Dados",
    blogFields: "Campos do Blog",
    faqFields: "Campos das FAQs",
    copied: "Copiado!",
    copyUrl: "Copiar URL",
    tryIt: "Testar",
    notes: "Notas",
    note1: "Todos os conteúdos estão disponíveis em português (Pt) e inglês (En)",
    note2: "Os dados são retornados em formato JSON",
    note3: "Não é necessária autenticação para endpoints públicos",
    note4: "A API suporta CORS para chamadas de outros domínios",
    rateLimit: "Limite de pedidos: 100 por minuto por IP",
  },
  en: {
    title: "API Documentation",
    subtitle: "Public REST API for accessing Azores4fun database content",
    intro: "The Azores4fun API provides access to blog and FAQ content in JSON format. All endpoints are public and do not require authentication.",
    baseUrl: "Base URL",
    endpoints: "Available Endpoints",
    blogs: "Blog",
    blogsDesc: "Access to blog articles in Portuguese and English",
    faqs: "FAQs",
    faqsDesc: "Frequently asked questions organized by service",
    method: "Method",
    endpoint: "Endpoint",
    description: "Description",
    response: "Response",
    example: "Example",
    allBlogs: "List all blog articles",
    singleBlog: "Get a specific article by slug",
    blogById: "Get a specific article by ID",
    allFaqs: "List all FAQs",
    faqById: "Get a specific FAQ by ID",
    faqsByService: "FAQs filtered by service",
    services: "Available Services",
    servicesDesc: "Use these values in the :service parameter",
    accommodation: "Accommodation",
    tourism: "Tourist Activities",
    tattoo: "Tattoo & Piercing",
    events: "Events",
    paintball: "Paintball & LaserTag",
    property: "Property Management",
    shop: "Shop",
    general: "General",
    dataStructure: "Data Structure",
    blogFields: "Blog Fields",
    faqFields: "FAQ Fields",
    copied: "Copied!",
    copyUrl: "Copy URL",
    tryIt: "Try it",
    notes: "Notes",
    note1: "All content is available in Portuguese (Pt) and English (En)",
    note2: "Data is returned in JSON format",
    note3: "No authentication required for public endpoints",
    note4: "API supports CORS for cross-domain requests",
    rateLimit: "Rate limit: 100 requests per minute per IP",
  }
};

export default function ApiDocsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://azores4fun.com';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: t.copied, duration: 2000 });
  };

  const services = [
    { key: "accommodation", label: t.accommodation },
    { key: "tourism", label: t.tourism },
    { key: "tattoo", label: t.tattoo },
    { key: "events", label: t.events },
    { key: "paintball", label: t.paintball },
    { key: "property", label: t.property },
    { key: "shop", label: t.shop },
    { key: "general", label: t.general },
  ];

  const blogFields = [
    { field: "id", type: "number", desc: language === 'pt' ? "ID único do artigo" : "Unique article ID" },
    { field: "slug", type: "string", desc: language === 'pt' ? "URL amigável do artigo" : "URL-friendly article slug" },
    { field: "titlePt", type: "string", desc: language === 'pt' ? "Título em português" : "Portuguese title" },
    { field: "titleEn", type: "string", desc: language === 'pt' ? "Título em inglês" : "English title" },
    { field: "contentPt", type: "string", desc: language === 'pt' ? "Conteúdo em português (HTML)" : "Portuguese content (HTML)" },
    { field: "contentEn", type: "string", desc: language === 'pt' ? "Conteúdo em inglês (HTML)" : "English content (HTML)" },
    { field: "excerptPt", type: "string", desc: language === 'pt' ? "Resumo em português" : "Portuguese excerpt" },
    { field: "excerptEn", type: "string", desc: language === 'pt' ? "Resumo em inglês" : "English excerpt" },
    { field: "author", type: "string", desc: language === 'pt' ? "Nome do autor" : "Author name" },
    { field: "category", type: "string", desc: language === 'pt' ? "Categoria do artigo" : "Article category" },
    { field: "tags", type: "string", desc: language === 'pt' ? "Tags separadas por vírgula" : "Comma-separated tags" },
    { field: "featuredImage", type: "string", desc: language === 'pt' ? "URL da imagem principal" : "Featured image URL" },
    { field: "publishedAt", type: "datetime", desc: language === 'pt' ? "Data de publicação" : "Publication date" },
  ];

  const faqFields = [
    { field: "id", type: "number", desc: language === 'pt' ? "ID único da FAQ" : "Unique FAQ ID" },
    { field: "service", type: "string", desc: language === 'pt' ? "Serviço associado" : "Associated service" },
    { field: "questionPt", type: "string", desc: language === 'pt' ? "Pergunta em português" : "Portuguese question" },
    { field: "questionEn", type: "string", desc: language === 'pt' ? "Pergunta em inglês" : "English question" },
    { field: "answerPt", type: "string", desc: language === 'pt' ? "Resposta em português" : "Portuguese answer" },
    { field: "answerEn", type: "string", desc: language === 'pt' ? "Resposta em inglês" : "English answer" },
    { field: "keywords", type: "string", desc: language === 'pt' ? "Palavras-chave para pesquisa" : "Keywords for search" },
  ];

  return (
    <>
      <SEOHead
        title={language === 'pt' ? "Documentação da API | Azores4fun" : "API Documentation | Azores4fun"}
        description={language === 'pt' ? "Documentação da API REST pública da Azores4fun para acesso a blogs e FAQs" : "Azores4fun public REST API documentation for accessing blogs and FAQs"}
        canonicalPath="/api-docs"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 pb-16">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4">
                <Database className="w-3 h-3 mr-1" />
                REST API
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-api-title">
                {t.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">{t.intro}</p>
                <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                  <span className="font-mono text-sm font-medium">{t.baseUrl}:</span>
                  <code className="flex-1 font-mono text-sm text-primary">{baseUrl}</code>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => copyToClipboard(baseUrl)}
                    data-testid="button-copy-base-url"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {t.blogs}
            </h2>
            <p className="text-muted-foreground mb-4">{t.blogsDesc}</p>
            
            <div className="space-y-4 mb-12">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-green-600">GET</Badge>
                    <code className="font-mono text-sm">/api/blog</code>
                  </div>
                  <CardDescription>{t.allBlogs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(`${baseUrl}/api/blog`)}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {t.copyUrl}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href="/api/blog" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t.tryIt}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-green-600">GET</Badge>
                    <code className="font-mono text-sm">/api/blog/:slug</code>
                  </div>
                  <CardDescription>{t.singleBlog}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(`${baseUrl}/api/blog/bem-vindo-estudio-tatuagens-piercings`)}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {t.copyUrl}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href="/api/blog/bem-vindo-estudio-tatuagens-piercings" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t.tryIt}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-green-600">GET</Badge>
                    <code className="font-mono text-sm">/api/blog/id/:id</code>
                  </div>
                  <CardDescription>{t.blogById}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(`${baseUrl}/api/blog/id/16`)}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {t.copyUrl}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href="/api/blog/id/16" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t.tryIt}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6" />
              {t.faqs}
            </h2>
            <p className="text-muted-foreground mb-4">{t.faqsDesc}</p>

            <div className="space-y-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-green-600">GET</Badge>
                    <code className="font-mono text-sm">/api/faqs</code>
                  </div>
                  <CardDescription>{t.allFaqs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(`${baseUrl}/api/faqs`)}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {t.copyUrl}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href="/api/faqs" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t.tryIt}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-green-600">GET</Badge>
                    <code className="font-mono text-sm">/api/faqs/id/:id</code>
                  </div>
                  <CardDescription>{t.faqById}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(`${baseUrl}/api/faqs/id/57`)}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {t.copyUrl}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href="/api/faqs/id/57" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t.tryIt}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-green-600">GET</Badge>
                    <code className="font-mono text-sm">/api/faqs/:service</code>
                  </div>
                  <CardDescription>{t.faqsByService}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(`${baseUrl}/api/faqs/accommodation`)}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      {t.copyUrl}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href="/api/faqs/accommodation" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {t.tryIt}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>{t.services}</CardTitle>
                <CardDescription>{t.servicesDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <Badge 
                      key={service.key} 
                      variant="secondary"
                      className="cursor-pointer hover-elevate"
                      onClick={() => copyToClipboard(service.key)}
                    >
                      <code>{service.key}</code>
                      <span className="ml-1 text-muted-foreground">({service.label})</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-6">{t.dataStructure}</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.blogFields}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {blogFields.map((field) => (
                      <div key={field.field} className="flex items-start gap-2 py-1 border-b border-border/50 last:border-0">
                        <code className="font-mono text-primary whitespace-nowrap">{field.field}</code>
                        <Badge variant="outline" className="text-xs">{field.type}</Badge>
                        <span className="text-muted-foreground text-xs">{field.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.faqFields}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {faqFields.map((field) => (
                      <div key={field.field} className="flex items-start gap-2 py-1 border-b border-border/50 last:border-0">
                        <code className="font-mono text-primary whitespace-nowrap">{field.field}</code>
                        <Badge variant="outline" className="text-xs">{field.type}</Badge>
                        <span className="text-muted-foreground text-xs">{field.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{t.notes}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {t.note1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {t.note2}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {t.note3}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {t.note4}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {t.rateLimit}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
