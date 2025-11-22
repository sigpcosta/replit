import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function ImobiliariaPage() {
  const faqs = [
    {
      question: "Que serviços de gestão imobiliária oferecem?",
      answer: "Oferecemos arrendamento de longa duração, gestão completa de propriedades, serviços de manutenção, pequenas reparações, construção e renovações para empreendimentos turísticos e particulares."
    },
    {
      question: "Fazem gestão de propriedades para alojamento turístico?",
      answer: "Sim, gerimos propriedades destinadas a alojamento turístico, incluindo manutenção, limpeza, comunicação com hóspedes e gestão de reservas."
    },
    {
      question: "Oferecem serviços de manutenção preventiva?",
      answer: "Sim, criamos planos de manutenção preventiva personalizados para garantir que a sua propriedade se mantém em excelente estado e evitar problemas maiores no futuro."
    },
    {
      question: "Têm equipa própria de construção?",
      answer: "Sim, temos equipa especializada em construção e renovação. Realizamos desde pequenas reparações até projetos de renovação completa."
    },
    {
      question: "Trabalham apenas na ilha do Faial?",
      answer: "Atualmente os nossos serviços concentram-se principalmente na ilha do Faial, especialmente na zona da Horta. Para projetos noutras ilhas, por favor contacte-nos."
    },
    {
      question: "Como funcionam os contratos de arrendamento?",
      answer: "Oferecemos contratos de arrendamento de longa duração flexíveis, adaptados às necessidades de proprietários e inquilinos. Tratamos de toda a documentação e gestão contratual."
    },
    {
      question: "Fazem orçamentos gratuitos?",
      answer: "Sim, fazemos orçamentos gratuitos e sem compromisso para todos os nossos serviços de manutenção, construção e gestão de propriedades."
    },
    {
      question: "Quanto tempo demoram os trabalhos de renovação?",
      answer: "Depende da escala do projeto. Pequenas renovações podem demorar 1-2 semanas, enquanto renovações completas podem levar 2-3 meses. Fornecemos sempre um cronograma detalhado no orçamento."
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
                <Building2 className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                Gestão Imobiliária
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Serviços completos de gestão, manutenção e construção para a sua propriedade nos Açores.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            Perguntas Frequentes - Gestão Imobiliária
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
