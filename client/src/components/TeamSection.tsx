import { Card } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface TeamSectionProps {
  members?: ("miguel" | "emanuel")[];
}

export default function TeamSection({ members = ["miguel", "emanuel"] }: TeamSectionProps) {
  const { language } = useLanguage();

  const teamData: Record<string, { pt: TeamMember; en: TeamMember }> = {
    miguel: {
      pt: {
        name: "Miguel Moniz",
        role: "Coordenador de Atividades",
        bio: "Técnico Especialista em Turismo de Natureza e Aventura. Organiza tours personalizados, jogos de estratégia e todas as nossas atividades e eventos."
      },
      en: {
        name: "Miguel Moniz",
        role: "Activities Coordinator",
        bio: "Specialist Technician in Nature and Adventure Tourism. Organizes personalized tours, strategy games and all our activities and events."
      }
    },
    emanuel: {
      pt: {
        name: "Emanuel Rosa",
        role: "Técnico de Apoio e Manutenção",
        bio: "Responsável pela manutenção das infraestruturas e apoia nas Atividades Turísticas e Eventos."
      },
      en: {
        name: "Emanuel Rosa",
        role: "Support and Maintenance Technician",
        bio: "Responsible for infrastructure maintenance and supports Tourism Activities and Events."
      }
    }
  };

  const translations = {
    pt: {
      title: "A Nossa Equipa",
      subtitle: "Profissionais dedicados a criar experiências memoráveis"
    },
    en: {
      title: "Our Team",
      subtitle: "Professionals dedicated to creating memorable experiences"
    }
  };

  const t = translations[language];
  const displayMembers = members.map(m => teamData[m][language]);

  return (
    <div className="mb-16 md:mb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className={`grid gap-8 max-w-4xl mx-auto ${displayMembers.length === 1 ? 'md:grid-cols-1 max-w-md' : 'md:grid-cols-2'}`}>
        {displayMembers.map((member, index) => (
          <Card key={index} className="p-6 text-center hover-elevate transition-all">
            <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold mb-1">
              {member.name}
            </h3>
            <p className="text-primary font-medium text-sm mb-3">
              {member.role}
            </p>
            <p className="text-muted-foreground text-sm">
              {member.bio}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
