import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Scissors } from "lucide-react";

export default function TatuagemPage() {
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

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
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
