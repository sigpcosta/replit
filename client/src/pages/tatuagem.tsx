import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Shield, Palette, Check } from "lucide-react";
import tattooImage from "@assets/generated_images/Tattoo_studio_workspace_bfc3187a.png";

export default function TatuagemPage() {
  const services = [
    {
      icon: Palette,
      title: "Tatuagens Personalizadas",
      description: "Desenhos únicos criados especialmente para si",
      features: ["Consulta de design gratuita", "Artistas experientes", "Todos os estilos", "Retoques gratuitos"]
    },
    {
      icon: Sparkles,
      title: "Piercings Profissionais",
      description: "Todos os tipos de piercings com material premium",
      features: ["Joias de alta qualidade", "Técnicas modernas", "Cuidados pós-piercing", "Variedade de estilos"]
    },
    {
      icon: Shield,
      title: "Higiene e Segurança",
      description: "Protocolos rigorosos para sua proteção",
      features: ["Material esterilizado", "Agulhas descartáveis", "Licenças atualizadas", "Ambiente impecável"]
    },
    {
      icon: Scissors,
      title: "Coberturas e Remoções",
      description: "Renovação de tatuagens antigas",
      features: ["Cover-ups especializados", "Laser disponível (parceiros)", "Consultas gratuitas", "Orçamentos transparentes"]
    }
  ];

  const highlights = [
    "Artistas certificados e experientes",
    "Estúdio licenciado e inspecionado",
    "Material de uso único e esterilizado",
    "Ambiente limpo e confortável",
    "Desenhos personalizados incluídos",
    "Instruções de cuidados detalhadas",
    "Marcações flexíveis",
    "Localização central na Horta"
  ];

  const faqs = [
    {
      question: "Onde fica localizado o estúdio?",
      answer: "O nosso estúdio de tatuagem e piercings está localizado dentro da loja Azores4fun, no centro da Horta, Faial, com fácil acesso e estacionamento próximo."
    },
    {
      question: "É necessário marcar consulta?",
      answer: "Sim, trabalhamos exclusivamente por marcação para garantir que cada cliente recebe a atenção e tempo necessários. Pode marcar por telefone, email ou pessoalmente na loja."
    },
    {
      question: "Fazem desenhos personalizados?",
      answer: "Absolutamente! Os nossos artistas trabalham consigo para criar desenhos únicos e personalizados. Pode trazer as suas ideias ou trabalhar do zero com os nossos artistas."
    },
    {
      question: "Qual é a idade mínima para fazer tatuagens?",
      answer: "A idade mínima é 18 anos. Para menores de 18 anos, é necessária autorização dos pais/tutores legais por escrito e presença física dos mesmos durante o procedimento."
    },
    {
      question: "O estúdio é higiénico e seguro?",
      answer: "Sim, seguimos rigorosamente todos os protocolos de higiene e segurança. Utilizamos material esterilizado descartável, agulhas de uso único e mantemos o estúdio impecavelmente limpo."
    },
    {
      question: "Que tipos de piercings fazem?",
      answer: "Fazemos todos os tipos de piercings: orelha, nariz, sobrancelha, lábio, língua, umbigo e outros. Todos realizados com material de alta qualidade e técnicas profissionais."
    },
    {
      question: "Fornecem instruções de cuidados pós-tatuagem?",
      answer: "Sim, fornecemos instruções detalhadas por escrito e verbalmente sobre como cuidar da sua tatuagem. Também estamos disponíveis para esclarecer dúvidas durante o processo de cicatrização."
    },
    {
      question: "Quanto tempo demora uma tatuagem?",
      answer: "Depende do tamanho e complexidade do desenho. Tatuagens pequenas podem demorar 30-60 minutos, enquanto peças maiores podem requerer várias sessões de 3-4 horas cada."
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
                <Scissors className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                Tatuagem & Piercings
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Arte corporal profissional num ambiente seguro e higiénico. Artistas experientes para dar vida às suas ideias.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Arte, Segurança e Profissionalismo
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                No estúdio Azores4fun, transformamos as suas ideias em arte corporal única. Os nossos artistas experientes trabalham consigo para criar desenhos personalizados que contam a sua história.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Seguimos os mais rigorosos protocolos de higiene e segurança, utilizando apenas material esterilizado e agulhas de uso único. O seu bem-estar é a nossa prioridade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-book-appointment">
                  Marcar Consulta
                </Button>
                <Button size="lg" variant="outline" data-testid="button-view-portfolio">
                  Ver Portfolio
                </Button>
              </div>
            </div>
            <div>
              <img
                src={tattooImage}
                alt="Estúdio de tatuagem profissional"
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
              Compromisso com a Qualidade
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

          <Card className="p-8 md:p-12 mb-16 md:mb-24 bg-primary text-primary-foreground">
            <div className="text-center max-w-3xl mx-auto">
              <Shield className="h-16 w-16 mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold mb-4">
                Segurança em Primeiro Lugar
              </h2>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                Cumprimos rigorosamente todas as normas de saúde e segurança. Material esterilizado, ambiente impecável e profissionais certificados garantem uma experiência segura do início ao fim.
              </p>
              <p className="text-primary-foreground/80">
                Todas as agulhas são de uso único · Material autoclavado · Licenças atualizadas · Inspecionado regularmente
              </p>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            Perguntas Frequentes - Tatuagem & Piercings
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
