import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Home as HomeIcon } from "lucide-react";

export default function AlojamentoPage() {
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

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
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
