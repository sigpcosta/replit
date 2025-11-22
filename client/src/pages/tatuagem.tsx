import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Sparkles, Shield, Palette, Check, Star, Droplet, Sun, Clock } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import tattooImage from "@assets/generated_images/Tattoo_studio_workspace_bfc3187a.png";

export default function TatuagemPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/booking", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "A sua solicitação foi enviada. Entraremos em contacto em breve.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: error.message || "Erro ao enviar solicitação. Por favor, tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.description) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(formData);
  };
  const tattooStyles = [
    {
      title: "Fineline",
      description: "Traços finos e delicados, perfeitos para designs minimalistas e detalhados."
    },
    {
      title: "Minimalista",
      description: "Designs simples e elegantes com poucos elementos, mas grande impacto visual."
    },
    {
      title: "Aquarela",
      description: "Estilo artístico com cores vibrantes que simulam pinceladas de aquarela."
    },
    {
      title: "Realismo",
      description: "Reprodução fiel de imagens, retratos e elementos com alto nível de detalhe."
    },
    {
      title: "Geométrico",
      description: "Formas geométricas precisas criando padrões e mandalas harmoniosas."
    },
    {
      title: "Tradicional",
      description: "Estilo clássico com linhas marcadas e cores sólidas."
    }
  ];

  const piercingTypes = [
    {
      title: "Orelha",
      healing: "Cicatrização: 6-12 semanas",
      description: "Lóbulo, hélix, tragus, conch, daith, rook e industrial. Variedade de joias disponíveis."
    },
    {
      title: "Nariz",
      healing: "Cicatrização: 2-4 meses",
      description: "Nostril e septum com joias delicadas ou statement pieces."
    },
    {
      title: "Facial",
      healing: "Cicatrização: 6-8 semanas",
      description: "Sobrancelha, labret, monroe, medusa e bridge com técnicas modernas."
    },
    {
      title: "Oral",
      healing: "Cicatrização: 4-6 semanas",
      description: "Língua, smiley e frenulum com materiais hipoalergénicos."
    },
    {
      title: "Corpo",
      healing: "Cicatrização: 6-9 meses",
      description: "Umbigo, mamilo e superfícies com joias de qualidade premium."
    },
    {
      title: "Microdermal",
      healing: "Cicatrização: 3-6 meses",
      description: "Implantes dérmicos para áreas únicas do corpo."
    }
  ];

  const tattooProcessSteps = [
    "Consulta inicial e discussão da ideia",
    "Desenvolvimento do design personalizado",
    "Aprovação do desenho e orçamento",
    "Agendamento da sessão",
    "Preparação da pele e aplicação",
    "Instruções de cuidados pós-tatuagem"
  ];

  const piercingProcessSteps = [
    "Consulta e escolha do local e joia",
    "Verificação de anatomia e viabilidade",
    "Seleção do material hipoalergénico",
    "Marcação e preparação da área",
    "Realização do piercing com técnica profissional",
    "Instruções detalhadas de cuidados e limpeza"
  ];

  const tattooHighlights = [
    "Trabalhamos apenas com materiais descartáveis e esterilizados",
    "Todas as tintas são veganas e de alta qualidade",
    "Ambiente climatizado e confortável",
    "Sessões de retoque gratuito após cicatrização (se necessário)"
  ];

  const piercingHighlights = [
    "Joias de titânio ASTM F136 e aço cirúrgico 316L",
    "Técnicas modernas de perfuração com agulhas",
    "Material esterilizado em autoclave",
    "Ambiente higiénico e controlado",
    "Profissionais certificados e experientes",
    "Variedade de estilos e materiais premium",
    "Aftercare detalhado e acompanhamento",
    "Troca de joias disponível"
  ];

  const aftercareSteps = [
    {
      icon: Clock,
      title: "Primeiras 24h",
      description: "Mantenha o curativo por 2-4 horas. Lave suavemente com sabão neutro e água morna. Seque com papel toalha."
    },
    {
      icon: Droplet,
      title: "Hidratação",
      description: "Aplique pomada específica 2-3 vezes ao dia. Use apenas produtos recomendados pelo tatuador."
    },
    {
      icon: Sun,
      title: "Proteção Solar",
      description: "Evite exposição solar direta por 30 dias. Use protetor solar FPS 50+ após cicatrização completa."
    },
    {
      icon: Shield,
      title: "Cicatrização",
      description: "Não coce nem remova as casquinhas. A cicatrização completa leva 2-4 semanas."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Experiência incrível! O profissionalismo e atenção aos detalhes são impecáveis. Minha tatuagem ficou perfeita!"
    },
    {
      name: "João Santos",
      text: "Ambiente limpo, equipamentos esterilizados e artistas muito talentosos. Recomendo de olhos fechados!"
    },
    {
      name: "Ana Costa",
      text: "Fiz meu piercing aqui e adorei o resultado. Equipa super atenciosa e tudo muito higiénico."
    },
    {
      name: "Pedro Oliveira",
      text: "Melhor estúdio da região! O tatuador entendeu exatamente o que eu queria e superou as minhas expectativas."
    }
  ];

  const faqs = [
    {
      question: "Dói muito fazer uma tatuagem?",
      answer: "A dor varia conforme a região do corpo e a sensibilidade individual. Geralmente é descrita como um desconforto tolerável. Áreas com mais gordura ou músculo são menos sensíveis do que áreas ósseas."
    },
    {
      question: "Quanto tempo demora uma sessão?",
      answer: "Depende do tamanho e complexidade do desenho. Tatuagens pequenas podem demorar 30-60 minutos, enquanto peças maiores podem requerer várias sessões de 3-4 horas cada."
    },
    {
      question: "Posso doar sangue depois de fazer uma tatuagem?",
      answer: "Em Portugal, é necessário aguardar 4 meses após fazer uma tatuagem para poder doar sangue. Este período de segurança serve para garantir a saúde do doador e do receptor."
    },
    {
      question: "Qual o valor de uma tatuagem?",
      answer: "O valor varia conforme o tamanho, complexidade, tempo de execução e estilo. Oferecemos orçamentos gratuitos e personalizados. Entre em contacto connosco com a sua ideia para recebermos um orçamento."
    },
    {
      question: "Preciso levar o desenho pronto?",
      answer: "Não é necessário! Pode trazer referências, ideias ou simplesmente descrever o que pretende. Os nossos artistas trabalham consigo para criar um design personalizado que represente a sua visão."
    },
    {
      question: "Como cuidar do piercing?",
      answer: "Limpe 2x ao dia com solução salina, não toque com as mãos sujas, evite piscinas e mar nas primeiras semanas, não remova a joia durante a cicatrização. Fornecemos instruções detalhadas após o procedimento."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${tattooImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="text-page-title">
              Arte na Pele
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transforme as suas ideias em arte permanente. Tatuagens e piercings profissionais em ambiente seguro.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white" 
                data-testid="button-book-appointment"
                onClick={() => {
                  document.getElementById('agendar-sessao')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Agendar Sessão
              </Button>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-view-portfolio">
                  Ver Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              Nosso Portfolio
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Cada tatuagem é única. Confira alguns dos nossos trabalhos recentes.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={tattooImage}
                  alt="Trabalho de tatuagem 1"
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-1"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={tattooImage}
                  alt="Trabalho de tatuagem 2"
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-2"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={tattooImage}
                  alt="Trabalho de tatuagem 3"
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-3"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={tattooImage}
                  alt="Trabalho de tatuagem 4"
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-4"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={tattooImage}
                  alt="Trabalho de tatuagem 5"
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-5"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={tattooImage}
                  alt="Trabalho de tatuagem 6"
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-6"
                />
              </div>
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              Nossos Serviços
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Conheça em detalhe os serviços que oferecemos
            </p>
            
            <Tabs defaultValue="tatuagens" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12" data-testid="tabs-services">
                <TabsTrigger value="tatuagens" data-testid="tab-tatuagens">
                  Tatuagens
                </TabsTrigger>
                <TabsTrigger value="piercings" data-testid="tab-piercings">
                  Piercings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="tatuagens">
                <div className="space-y-16">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      Estilos de Tatuagem
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Trabalhamos com diversos estilos para transformar a sua ideia em arte
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {tattooStyles.map((style, index) => (
                        <Card key={index} className="p-6 hover-elevate transition-all border-l-4 border-l-[#F59E0B]">
                          <h4 className="font-heading text-xl font-bold mb-3">
                            {style.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {style.description}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      Processo de Tatuagem
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Como funciona do primeiro contacto até à tatuagem finalizada
                    </p>
                    <div className="max-w-3xl mx-auto space-y-3">
                      {tattooProcessSteps.map((step, index) => (
                        <Card key={index} className="p-4 hover-elevate transition-all">
                          <div className="flex items-start gap-3">
                            <div className="bg-[#F59E0B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                              {index + 1}
                            </div>
                            <p className="text-foreground pt-1 text-sm">{step}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-8 md:p-12">
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      Informações Importantes
                    </h3>
                    <div className="space-y-4 max-w-2xl mx-auto">
                      {tattooHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="piercings">
                <div className="space-y-16">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      Tipos de Piercings
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Todos os tipos de piercings com material de alta qualidade
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {piercingTypes.map((type, index) => (
                        <Card key={index} className="p-6 hover-elevate transition-all border-l-4 border-l-[#F59E0B]">
                          <h4 className="font-heading text-xl font-bold mb-2">
                            {type.title}
                          </h4>
                          <p className="text-[#F59E0B] text-sm font-medium mb-3">
                            {type.healing}
                          </p>
                          <p className="text-muted-foreground">
                            {type.description}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      Processo de Piercing
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Como funciona do primeiro contacto até ao piercing finalizado
                    </p>
                    <div className="max-w-3xl mx-auto space-y-3">
                      {piercingProcessSteps.map((step, index) => (
                        <Card key={index} className="p-4 hover-elevate transition-all">
                          <div className="flex items-start gap-3">
                            <div className="bg-[#F59E0B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                              {index + 1}
                            </div>
                            <p className="text-foreground pt-1 text-sm">{step}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-8 md:p-12">
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      Informações Importantes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {piercingHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div id="agendar-sessao" className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              Agende a Sua Sessão
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Preencha o formulário e entraremos em contacto para orçamento e agendamento
            </p>
            <Card className="p-8 max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name" 
                    placeholder="O seu nome" 
                    data-testid="input-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    data-testid="input-email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+351 123 456 789" 
                    data-testid="input-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger id="service" data-testid="select-service">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tatuagem">Tatuagem</SelectItem>
                      <SelectItem value="Piercing">Piercing</SelectItem>
                      <SelectItem value="Cover-up">Cover-up</SelectItem>
                      <SelectItem value="Retoque">Retoque</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Descreva a sua ideia</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-nos sobre o desenho que imagina, estilo preferido, tamanho, localização no corpo, etc."
                    rows={5}
                    data-testid="textarea-message"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  data-testid="button-submit-form"
                  disabled={bookingMutation.isPending}
                >
                  {bookingMutation.isPending ? "A enviar..." : "Enviar Pedido"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              Cuidados Pós-Procedimento
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Seguir os cuidados corretos garante melhor cicatrização e resultado final impecável
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aftercareSteps.map((step, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Avaliações reais dos nossos clientes
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
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
