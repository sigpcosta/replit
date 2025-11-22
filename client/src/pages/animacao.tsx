import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, Waves, Car, Camera, Tent, Check } from "lucide-react";
import lasertagImage from "@assets/generated_images/Laser_tag_action_shot_63a174d9.png";
import supImage from "@assets/generated_images/SUP_paddleboarding_Azores_ocean_960e2ee9.png";
import paintballImage from "@assets/generated_images/Paintball_action_gameplay_8c01711a.png";
import vanImage from "@assets/generated_images/Electric_van_island_tour_9d32feea.png";

export default function AnimacaoPage() {
  const activities = [
    {
      icon: Target,
      title: "Lasertag & Paintball",
      description: "Jogos de estratégia emocionantes no nosso campo próprio",
      features: ["Campo dedicado", "Equipamento profissional", "Gelblaster e Nerfs disponíveis", "Ideal para grupos"]
    },
    {
      icon: Waves,
      title: "Desportos Aquáticos",
      description: "Explore as águas cristalinas dos Açores",
      features: ["Aluguer de SUPs e Kayaks", "Material de snorkeling", "Equipamento de qualidade", "Todos os níveis"]
    },
    {
      icon: Car,
      title: "Tours Personalizados",
      description: "Descubra o Faial na nossa carrinha elétrica",
      features: ["Carrinha elétrica 9 lugares", "Itinerários flexíveis", "Guias experientes", "Transferências incluídas"]
    },
    {
      icon: Camera,
      title: "Pacotes Multi-atividades",
      description: "Combine várias experiências numa só reserva",
      features: ["Descontos em pacotes", "Planeamento personalizado", "Tendas de campismo", "Experiências únicas"]
    }
  ];

  const highlights = [
    "Campo próprio para jogos de estratégia",
    "Equipamento moderno e bem mantido",
    "Instrutores certificados e experientes",
    "Seguros de atividades incluídos",
    "Carrinha elétrica ecológica",
    "Material de qualidade premium",
    "Flexibilidade de horários",
    "Pacotes para grupos"
  ];

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

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1">
              <h2 className="font-heading text-3xl font-bold mb-6">
                Aventura e Emoção nos Açores
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                A Azores4fun oferece uma ampla variedade de atividades de animação turística para tornar a sua visita aos Açores verdadeiramente inesquecível. Desde jogos de estratégia emocionantes até experiências aquáticas relaxantes.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Com equipamento de qualidade, instrutores experientes e um compromisso com a segurança, garantimos que cada atividade seja uma experiência memorável.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-book-activity">
                  Reservar Atividade
                </Button>
                <Button size="lg" variant="outline" data-testid="button-view-packages">
                  Ver Pacotes
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <img
                src={lasertagImage}
                alt="Lasertag em ação"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={paintballImage}
                alt="Paintball"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={supImage}
                alt="SUP paddleboarding"
                className="rounded-lg w-full h-48 object-cover col-span-2"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              As Nossas Atividades
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <activity.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {activity.description}
                  </p>
                  <ul className="space-y-2">
                    {activity.features.map((feature, idx) => (
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
              Porque Escolher as Nossas Atividades
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Tours Personalizados
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  Explore a ilha do Faial ao seu próprio ritmo na nossa carrinha elétrica ecológica. Criamos itinerários personalizados baseados nos seus interesses.
                </p>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  Planear o Meu Tour
                </Button>
              </div>
              <img
                src={vanImage}
                alt="Tour em carrinha elétrica"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
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
