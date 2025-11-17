import { MapPin, Sparkles, Award, LucideIcon } from "lucide-react";

interface WhyChooseItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function WhyChooseItem({ icon: Icon, title, description }: WhyChooseItemProps) {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-primary/10 p-4 rounded-xl">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
      <h3 className="font-heading text-xl font-bold" data-testid="text-why-title">
        {title}
      </h3>
      <p className="text-muted-foreground" data-testid="text-why-desc">
        {description}
      </p>
    </div>
  );
}

export default function WhyChoose() {
  const reasons = [
    {
      icon: MapPin,
      title: "Localização Central",
      description: "No centro da Horta, Faial, com fácil acesso a todas as atrações da ilha.",
    },
    {
      icon: Sparkles,
      title: "Experiências Únicas",
      description: "Diversidade de atividades para todos os gostos, das mais aventureiras às mais relaxantes.",
    },
    {
      icon: Award,
      title: "Equipamento Moderno",
      description: "Material de qualidade e infraestruturas bem mantidas para garantir a sua segurança e conforto.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-heading">
            Porquê Escolher a Azores4fun?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A sua escolha número um para experiências inesquecíveis nos Açores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <WhyChooseItem key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
