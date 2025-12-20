import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Chatbot from "@/components/Chatbot";
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

function Router() {
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

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <Chatbot />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
