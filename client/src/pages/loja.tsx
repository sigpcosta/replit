import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, MapPin, ShoppingBag, Ticket, Gift, Check } from "lucide-react";
import shopImage from "@assets/generated_images/Azores4fun_retail_shop_8204420f.png";

export default function LojaPage() {
  const offerings = [
    {
      icon: ShoppingBag,
      title: "Produtos Regionais",
      description: "O melhor dos Açores numa só loja",
      features: ["Artesanato local", "Produtos gourmet", "Vinhos e licores", "Souvenirs únicos"]
    },
    {
      icon: Ticket,
      title: "Serviços de Turismo",
      description: "Tudo para a sua visita aos Açores",
      features: ["Reservas de atividades", "Informações turísticas", "Bilhetes e passes", "Pacotes personalizados"]
    },
    {
      icon: Gift,
      title: "Merchandising Azores4fun",
      description: "Leve uma lembrança connosco",
      features: ["T-shirts e bonés", "Acessórios outdoor", "Material desportivo", "Presentes originais"]
    },
    {
      icon: MapPin,
      title: "Ponto de Encontro",
      description: "Receção e apoio a clientes",
      features: ["Check-in de alojamento", "Informações locais", "Wi-Fi gratuito", "Zona de espera confortável"]
    }
  ];

  const highlights = [
    "Localização central na Horta",
    "Horário alargado em época alta",
    "Produtos certificados e autênticos",
    "Aceitamos cartões de pagamento",
    "Wi-Fi gratuito para clientes",
    "Equipa multilingue",
    "Reservas de última hora aceites",
    "Estacionamento próximo"
  ];

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

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                O Coração da Azores4fun
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                A nossa loja no centro da Horta é muito mais do que um simples ponto de venda. É o hub central para todos os serviços Azores4fun, onde pode reservar atividades, fazer check-in no alojamento e descobrir produtos únicos dos Açores.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Com uma equipa acolhedora e conhecedora, estamos prontos para tornar a sua experiência nos Açores inesquecível.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-visit-us">
                  Visite-nos
                </Button>
                <Button size="lg" variant="outline" data-testid="button-get-directions">
                  Como Chegar
                </Button>
              </div>
            </div>
            <div>
              <img
                src={shopImage}
                alt="Loja Azores4fun"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              O Que Oferecemos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {offerings.map((offering, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <offering.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {offering.description}
                  </p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, idx) => (
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
              Vantagens da Nossa Loja
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

          <Card className="p-8 md:p-12 mb-16 md:mb-24">
            <div className="text-center max-w-3xl mx-auto">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold mb-4">
                Visite-nos no Centro da Horta
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Rua da Horta, 123 · 9900-000 Horta, Faial
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-semibold mb-2">Segunda - Sexta</p>
                  <p className="text-muted-foreground">9h - 19h</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Sábado</p>
                  <p className="text-muted-foreground">10h - 18h</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Domingo</p>
                  <p className="text-muted-foreground">10h - 14h</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
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
