import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Store } from "lucide-react";

export default function LojaPage() {
  const faqs = [
    {
      question: "Onde fica localizada a loja?",
      answer: "A nossa loja está localizada no centro da Horta, Faial, de fácil acesso. É aqui que recebemos clientes e vendemos produtos e serviços de turismo local."
    },
    {
      question: "Que produtos vendem na loja?",
      answer: "Vendemos produtos regionais dos Açores, merchandising da Azores4fun, equipamento para atividades ao ar livre, artigos de turismo e presentes locais únicos."
    },
    {
      question: "Posso reservar atividades diretamente na loja?",
      answer: "Sim! A loja é o ponto central para reservar todas as nossas atividades: alojamento, animação turística, eventos, tours e muito mais. A nossa equipa está pronta para ajudar."
    },
    {
      question: "Qual é o horário de funcionamento?",
      answer: "Estamos abertos de Segunda a Sexta das 9h às 19h, Sábado das 10h às 18h, e Domingo das 10h às 14h. Em época alta, podemos ter horário alargado."
    },
    {
      question: "Têm wi-fi disponível para clientes?",
      answer: "Sim, oferecemos wi-fi gratuito para todos os clientes que visitam a nossa loja."
    },
    {
      question: "Posso comprar bilhetes para outras atrações da ilha?",
      answer: "Sim, trabalhamos com diversos parceiros locais e podemos ajudá-lo a organizar toda a sua experiência nos Açores, incluindo bilhetes para outras atrações."
    },
    {
      question: "Fazem entregas de produtos?",
      answer: "Para compras de maior valor ou para hóspedes do nosso alojamento, podemos arranjar entrega. Contacte-nos para mais detalhes."
    },
    {
      question: "Aceitam cartões de pagamento?",
      answer: "Sim, aceitamos dinheiro, cartões de débito e crédito, e pagamentos por Multibanco."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <Store className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                Loja
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              O seu ponto de encontro na Horta. Produtos locais, merchandising e receção para todos os nossos serviços.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            Perguntas Frequentes - Loja
          </h2>
          
          <Card className="p-6">
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <a
              href="#"
              className="text-primary font-semibold hover:underline"
              data-testid="link-contact-us"
            >
              Entre em contacto connosco
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
