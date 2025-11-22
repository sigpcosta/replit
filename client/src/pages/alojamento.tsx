import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Wifi, Utensils, MapPin, Check } from "lucide-react";
import apartmentImage from "@assets/generated_images/Modern_Horta_apartment_interior_ec6f658d.png";

export default function AlojamentoPage() {
  const features = [
    "Localização central na Horta",
    "Wi-Fi gratuito de alta velocidade",
    "Cozinha totalmente equipada",
    "Roupa de cama e banho incluída",
    "Aquecimento central",
    "Vista para a cidade ou marina",
    "Check-in flexível",
    "Limpeza profissional"
  ];

  const apartments = [
    {
      name: "Apartamento T1 - Marina View",
      capacity: "2 pessoas",
      description: "Apartamento acolhedor com vista para a marina, perfeito para casais.",
      features: ["1 quarto", "1 casa de banho", "Cozinha equipada", "Varanda"]
    },
    {
      name: "Apartamento T2 - Centro Histórico",
      capacity: "4 pessoas",
      description: "Espaçoso apartamento no coração da Horta, ideal para famílias.",
      features: ["2 quartos", "1 casa de banho", "Sala ampla", "Totalmente renovado"]
    },
    {
      name: "Apartamento T2 - Vista Pico",
      capacity: "4-5 pessoas",
      description: "Apartamento moderno com vista para o Monte Pico, máximo conforto.",
      features: ["2 quartos", "2 casas de banho", "Varanda panorâmica", "Equipamento premium"]
    }
  ];

  const faqs = [
    {
      question: "Onde ficam localizados os apartamentos?",
      answer: "Os nossos 3 apartamentos estão localizados no centro da cidade da Horta, Faial, com fácil acesso a restaurantes, supermercados, marina e todas as principais atrações da cidade."
    },
    {
      question: "Os apartamentos estão totalmente equipados?",
      answer: "Sim, todos os apartamentos dispõem de cozinha totalmente equipada, Wi-Fi gratuito, roupa de cama e banho, aquecimento, e todos os utensílios necessários para uma estadia confortável."
    },
    {
      question: "Qual é o horário de check-in e check-out?",
      answer: "O check-in é a partir das 15:00 e o check-out até às 11:00. Horários flexíveis podem ser acordados mediante disponibilidade."
    },
    {
      question: "Aceitam animais de estimação?",
      answer: "Por favor, contacte-nos previamente para discutir a possibilidade de hospedar animais de estimação. Analisamos cada situação caso a caso."
    },
    {
      question: "Há estacionamento disponível?",
      answer: "Existe estacionamento público gratuito nas proximidades dos apartamentos. Podemos fornecer informações detalhadas sobre as melhores opções quando fizer a reserva."
    },
    {
      question: "Oferecem serviço de limpeza durante a estadia?",
      answer: "Para estadias de longa duração, oferecemos serviço de limpeza semanal. Para estadias mais curtas, a limpeza está incluída no final da estadia."
    },
    {
      question: "Como posso fazer uma reserva?",
      answer: "Pode fazer reservas através do nosso formulário online, por telefone +351 123 456 789, ou por email info@azores4fun.com. Respondemos rapidamente a todos os pedidos."
    },
    {
      question: "Qual é a política de cancelamento?",
      answer: "Oferecemos cancelamento gratuito até 7 dias antes da data de chegada. Para cancelamentos mais tardios, aplicam-se taxas conforme descrito nos nossos termos e condições."
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
                <HomeIcon className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                Alojamento Local
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              3 apartamentos modernos no centro da Horta. Conforto, localização privilegiada e tudo o que precisa para uma estadia perfeita nos Açores.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                O Seu Lar nos Açores
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Os nossos apartamentos estão estrategicamente localizados no centro da cidade da Horta, proporcionando acesso fácil a restaurantes, supermercados, a marina e todas as principais atrações da ilha do Faial.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Cada apartamento foi cuidadosamente equipado para garantir o máximo conforto durante a sua estadia, seja para uma escapadela de fim de semana ou para uma estadia prolongada.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-book-now">
                  Reservar Agora
                </Button>
                <Button size="lg" variant="outline" data-testid="button-view-availability">
                  Ver Disponibilidade
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={apartmentImage}
                alt="Interior moderno do apartamento"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              Os Nossos Apartamentos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {apartments.map((apt, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <h3 className="font-heading text-xl font-bold mb-2" data-testid={`text-apt-name-${index}`}>
                    {apt.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Capacidade: {apt.capacity}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {apt.description}
                  </p>
                  <ul className="space-y-2">
                    {apt.features.map((feature, idx) => (
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
              Comodidades Incluídas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Localização Premium
              </h3>
              <p className="text-muted-foreground">
                Centro da Horta, a poucos minutos a pé de restaurantes, lojas e marina
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Wi-Fi Grátis
              </h3>
              <p className="text-muted-foreground">
                Internet de alta velocidade em todos os apartamentos
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Cozinha Equipada
              </h3>
              <p className="text-muted-foreground">
                Tudo o que precisa para preparar as suas refeições
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            Perguntas Frequentes - Alojamento Local
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
