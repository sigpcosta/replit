import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AlojamentoPage from "@/pages/alojamento";
import AnimacaoPage from "@/pages/animacao";
import EventosPage from "@/pages/eventos";
import TatuagemPage from "@/pages/tatuagem";
import ImobiliariaPage from "@/pages/imobiliaria";
import LojaPage from "@/pages/loja";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/alojamento" component={AlojamentoPage} />
      <Route path="/animacao" component={AnimacaoPage} />
      <Route path="/eventos" component={EventosPage} />
      <Route path="/tatuagem" component={TatuagemPage} />
      <Route path="/imobiliaria" component={ImobiliariaPage} />
      <Route path="/loja" component={LojaPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
