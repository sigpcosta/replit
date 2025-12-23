import { renderToString } from "react-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Home from "@/pages/home";
import AlojamentoPage from "@/pages/alojamento";
import AnimacaoPage from "@/pages/animacao";
import PaintballPage from "@/pages/paintball";
import EventosPage from "@/pages/eventos";
import TatuagemPage from "@/pages/tatuagem";
import ImobiliariaPage from "@/pages/imobiliaria";
import LojaPage from "@/pages/loja";
import SobrePage from "@/pages/sobre";
import PortfolioPage from "@/pages/portfolio";
import BlogPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog-post";
import TermosSitePage from "@/pages/termos-site";
import TermosVendingPage from "@/pages/termos-vending";
import PrivacidadePage from "@/pages/privacidade";
import CookiesPage from "@/pages/cookies";
import GaleriaApartamentoPage from "@/pages/galeria-apartamento";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

export interface SSRData {
  faqs: any[];
  blogPosts: any[];
  url: string;
}

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/alojamento" component={AlojamentoPage} />
      <Route path="/animacao" component={AnimacaoPage} />
      <Route path="/paintball" component={PaintballPage} />
      <Route path="/eventos" component={EventosPage} />
      <Route path="/tatuagem" component={TatuagemPage} />
      <Route path="/imobiliaria" component={ImobiliariaPage} />
      <Route path="/loja" component={LojaPage} />
      <Route path="/sobre" component={SobrePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      <Route path="/termos-site" component={TermosSitePage} />
      <Route path="/termos-vending" component={TermosVendingPage} />
      <Route path="/privacidade" component={PrivacidadePage} />
      <Route path="/cookies" component={CookiesPage} />
      <Route path="/galeria-apartamento/:slug" component={GaleriaApartamentoPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export function render(url: string, ssrData: SSRData): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: false,
      },
    },
  });

  if (ssrData.faqs && ssrData.faqs.length > 0) {
    queryClient.setQueryData(['/api/faqs'], ssrData.faqs);
  }
  if (ssrData.blogPosts && ssrData.blogPosts.length > 0) {
    queryClient.setQueryData(['/api/blog'], ssrData.blogPosts);
  }

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Router ssrPath={url}>
              <AppRoutes />
            </Router>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return { 
    html, 
    helmet: helmetContext.helmet! 
  };
}

export function generateFAQSchema(faqs: any[], language: string = 'pt') {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": language === 'pt' ? faq.questionPt : faq.questionEn,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": language === 'pt' ? faq.answerPt : faq.answerEn
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
