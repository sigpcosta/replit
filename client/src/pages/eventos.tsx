import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { PartyPopper } from "lucide-react";

export default function EventosPage() {
  const faqs = [
    {
      question: "Que tipos de eventos organizam?",
      answer: "Organizamos festas de aniversário, eventos de teambuilding, jogos de estratégia, festas corporativas, celebrações familiares e qualquer tipo de evento personalizado que necessite."
    },
    {
      question: "Disponibilizam tendas para eventos?",
      answer: "Sim, temos três tendas disponíveis, incluindo uma de grandes dimensões, perfeitas para eventos ao ar livre. As tendas podem ser alugadas com ou sem montagem incluída."
    },
    {
      question: "Têm insufláveis para festas de aniversário?",
      answer: "Sim, temos diversos insufláveis disponíveis para alugar, ideais para festas de aniversário de crianças. Incluem entrega, montagem e desmontagem."
    },
    {
      question: "Podem deslocar-se a outros locais?",
      answer: "Sim! As nossas atividades são móveis. Podemos deslocar-nos para o local da sua escolha na ilha do Faial com as tendas, insufláveis e equipamentos necessários."
    },
    {
      question: "Oferecem pacotes completos para eventos?",
      answer: "Sim, criamos pacotes personalizados que podem incluir espaço (tendas), atividades, equipamento, catering (através de parceiros) e tudo o que precisar para o seu evento."
    },
    {
      question: "Qual é a capacidade máxima das tendas?",
      answer: "A nossa tenda de grandes dimensões acomoda até 100 pessoas sentadas ou 150 em pé. As tendas mais pequenas acomodam 30-40 pessoas cada."
    },
    {
      question: "Com quanto tempo de antecedência devo reservar?",
      answer: "Para eventos de grande dimensão, recomendamos reservar com pelo menos 4 semanas de antecedência. Para eventos mais pequenos, 2 semanas é geralmente suficiente."
    },
    {
      question: "Fazem decoração para eventos?",
      answer: "Podemos ajudar com decoração básica ou trabalhar com parceiros especializados em decoração de eventos. Conte-nos a sua visão e nós tornamo-la realidade!"
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
                <PartyPopper className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                Eventos
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Eventos memoráveis e celebrações únicas. Tendas, insufláveis, teambuilding e muito mais para tornar o seu evento especial.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            Perguntas Frequentes - Eventos
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
