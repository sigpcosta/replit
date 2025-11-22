import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home as HomeIcon, Wrench, Hammer, Key, Check } from "lucide-react";
import propertyImage from "@assets/generated_images/Azorean_property_exterior_4bd4f6fb.png";

export default function ImobiliariaPage() {
  const services = [
    {
      icon: Key,
      title: "Arrendamento Longa Duração",
      description: "Gestão completa de propriedades para arrendamento",
      features: ["Seleção de inquilinos", "Contratos profissionais", "Gestão de pagamentos", "Suporte jurídico"]
    },
    {
      icon: HomeIcon,
      title: "Gestão de Alojamento Turístico",
      description: "Maximize o retorno do seu investimento",
      features: ["Gestão de reservas", "Limpeza profissional", "Manutenção regular", "Marketing digital"]
    },
    {
      icon: Wrench,
      title: "Manutenção e Reparações",
      description: "Mantenha a sua propriedade em perfeito estado",
      features: ["Manutenção preventiva", "Reparações rápidas", "Equipas especializadas", "Materiais de qualidade"]
    },
    {
      icon: Hammer,
      title: "Construção e Renovação",
      description: "Transforme e valorize o seu imóvel",
      features: ["Projetos completos", "Renovações parciais", "Design e execução", "Licenciamentos incluídos"]
    }
  ];

  const highlights = [
    "Experiência no mercado dos Açores",
    "Equipas de manutenção próprias",
    "Orçamentos transparentes e detalhados",
    "Materiais de qualidade certificada",
    "Licenças e seguros em dia",
    "Resposta rápida a emergências",
    "Gestão profissional de propriedades",
    "Conhecimento local profundo"
  ];

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

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Cuide da Sua Propriedade com Profissionais
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                A Azores4fun oferece serviços completos de gestão imobiliária, desde arrendamento de longa duração até construção e renovação. Cuidamos da sua propriedade como se fosse nossa.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Com equipas especializadas, conhecimento profundo do mercado local e compromisso com a qualidade, garantimos que o seu investimento está em boas mãos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-request-quote">
                  Pedir Orçamento
                </Button>
                <Button size="lg" variant="outline" data-testid="button-schedule-visit">
                  Agendar Visita
                </Button>
              </div>
            </div>
            <div>
              <img
                src={propertyImage}
                alt="Propriedade nos Açores"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              Os Nossos Serviços
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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
              Porque Nos Escolher
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
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Gestão Completa
              </h3>
              <p className="text-muted-foreground">
                Desde a seleção de inquilinos até à manutenção regular
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Manutenção Rápida
              </h3>
              <p className="text-muted-foreground">
                Equipas próprias para resposta imediata a problemas
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                Renovações
              </h3>
              <p className="text-muted-foreground">
                Valorizamos o seu imóvel com obras de qualidade
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
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
