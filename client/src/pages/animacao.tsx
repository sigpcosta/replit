import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

export default function AnimacaoPage() {
  const faqs = [
    {
      question: "Que atividades de animação turística oferecem?",
      answer: "Oferecemos Lasertag, Paintball, Gelblaster, Nerfs em campo próprio, aluguer de SUPs e Kayaks, material de snorkeling, tours personalizados pela ilha com carrinha elétrica de 9 lugares, e muito mais."
    },
    {
      question: "É necessário fazer reserva prévia?",
      answer: "Sim, recomendamos fortemente a reserva prévia para garantir disponibilidade, especialmente para grupos e durante a época alta. Pode reservar por telefone, email ou através do nosso site."
    },
    {
      question: "Qual é a idade mínima para as atividades?",
      answer: "Para Lasertag e Paintball, a idade mínima é 10 anos. Gelblaster e Nerfs podem ser praticados a partir dos 8 anos. Para desportos aquáticos, depende da atividade e condições, mas geralmente a partir dos 12 anos com supervisão."
    },
    {
      question: "Fornecem todo o equipamento necessário?",
      answer: "Sim, fornecemos todo o equipamento de segurança e material necessário para todas as atividades. Apenas precisa de trazer roupa confortável e protetor solar."
    },
    {
      question: "Os tours são personalizáveis?",
      answer: "Absolutamente! Os nossos tours com a carrinha elétrica são totalmente personalizados de acordo com os seus interesses, tempo disponível e locais que deseja visitar na ilha do Faial."
    },
    {
      question: "Quanto tempo duram as atividades?",
      answer: "As sessões de Lasertag/Paintball duram tipicamente 2-3 horas. O aluguer de SUPs/Kayaks é por períodos de 2, 4 ou 8 horas. Os tours são personalizados, geralmente entre 3-8 horas."
    },
    {
      question: "Fazem atividades em grupo?",
      answer: "Sim! Somos especialistas em eventos de grupo, festas de aniversário e teambuilding. Oferecemos pacotes especiais para grupos de 10 ou mais pessoas."
    },
    {
      question: "As atividades realizam-se com mau tempo?",
      answer: "Atividades de campo (Lasertag, Paintball) realizam-se com chuva ligeira. Atividades aquáticas dependem das condições do mar. Em caso de cancelamento por mau tempo, oferecemos remarcação ou reembolso total."
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
                <Zap className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                Animação Turística
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Aventuras emocionantes e experiências únicas nos Açores. Lasertag, Paintball, desportos aquáticos e tours personalizados.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            Perguntas Frequentes - Animação Turística
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
