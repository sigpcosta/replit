import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper, Tent as TentIcon, Users, Trophy, Music, Check } from "lucide-react";
import eventsImage from "@assets/generated_images/Event_tent_celebration_fca04953.png";
import teambuildingImage from "@assets/generated_images/Teambuilding_outdoor_activity_99e77711.png";

export default function EventosPage() {
  const eventTypes = [
    {
      icon: PartyPopper,
      title: "Festas de Aniversário",
      description: "Celebrações memoráveis para todas as idades",
      features: ["Insufláveis divertidos", "Decoração festiva", "Espaço amplo", "Personalização completa"]
    },
    {
      icon: Users,
      title: "Teambuilding",
      description: "Fortalece a tua equipa com atividades envolventes",
      features: ["Jogos de estratégia", "Atividades cooperativas", "Facilitadores experientes", "Eventos corporativos"]
    },
    {
      icon: TentIcon,
      title: "Eventos ao Ar Livre",
      description: "Tendas e infraestrutura para qualquer ocasião",
      features: ["3 tendas disponíveis", "Montagem incluída", "Capacidade até 100 pessoas", "Localizações flexíveis"]
    },
    {
      icon: Trophy,
      title: "Competições e Jogos",
      description: "Desafios emocionantes para grupos",
      features: ["Torneios organizados", "Prémios personalizados", "Equipamento fornecido", "Árbitros profissionais"]
    }
  ];

  const highlights = [
    "Tendas de grandes dimensões",
    "Insufláveis seguros e divertidos",
    "Decoração personalizada",
    "Pacotes completos disponíveis",
    "Equipamento de som e música",
    "Catering através de parceiros",
    "Montagem e desmontagem incluídas",
    "Seguros de responsabilidade civil"
  ];

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

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                O Seu Evento Perfeito
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Seja uma festa de aniversário inesquecível, um evento corporativo de teambuilding, ou uma celebração especial, a Azores4fun tem tudo o que precisa para criar momentos memoráveis.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Com tendas espaçosas, insufláveis divertidos e atividades personalizadas, garantimos que o seu evento seja um sucesso absoluto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-plan-event">
                  Planear Evento
                </Button>
                <Button size="lg" variant="outline" data-testid="button-request-quote">
                  Pedir Orçamento
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={eventsImage}
                alt="Evento com tendas"
                className="rounded-lg w-full h-48 object-cover col-span-2"
              />
              <img
                src={teambuildingImage}
                alt="Teambuilding"
                className="rounded-lg w-full h-48 object-cover col-span-2"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              Tipos de Eventos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((type, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <type.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              O Que Oferecemos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            <Card className="p-6 text-center">
              <TentIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Tendas de Grandes Dimensões
              </h3>
              <p className="text-muted-foreground">
                Até 100 pessoas sentadas, perfeitas para qualquer clima
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Music className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Entretenimento
              </h3>
              <p className="text-muted-foreground">
                Insufláveis, jogos e atividades para todas as idades
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Eventos Corporativos
              </h3>
              <p className="text-muted-foreground">
                Teambuilding profissional e dinâmicas de grupo
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
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
