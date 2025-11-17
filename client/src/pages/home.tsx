import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeaturedActivity from "@/components/FeaturedActivity";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Home as HomeIcon, Zap, PartyPopper, Scissors, Building2 } from "lucide-react";

import apartmentImage from "@assets/generated_images/Modern_Horta_apartment_interior_ec6f658d.png";
import lasertagImage from "@assets/generated_images/Laser_tag_action_shot_63a174d9.png";
import eventsImage from "@assets/generated_images/Event_tent_celebration_fca04953.png";
import tattooImage from "@assets/generated_images/Tattoo_studio_workspace_bfc3187a.png";
import propertyImage from "@assets/generated_images/Azorean_property_exterior_4bd4f6fb.png";
import supImage from "@assets/generated_images/SUP_paddleboarding_Azores_ocean_960e2ee9.png";
import vanImage from "@assets/generated_images/Electric_van_island_tour_9d32feea.png";
import teambuildingImage from "@assets/generated_images/Teambuilding_outdoor_activity_99e77711.png";
import paintballImage from "@assets/generated_images/Paintball_action_gameplay_8c01711a.png";

export default function Home() {
  const services = [
    {
      title: "Alojamento Local",
      description: "3 apartamentos modernos no centro da cidade da Horta, totalmente equipados para uma estadia confortável e memorável.",
      image: apartmentImage,
      icon: HomeIcon,
      href: "#alojamento",
    },
    {
      title: "Animação Turística",
      description: "Lasertag, Paintball, Gelblaster, Nerfs, aluguer de SUPs e Kayaks, tours personalizados pela ilha e muito mais.",
      image: lasertagImage,
      icon: Zap,
      href: "#animacao",
    },
    {
      title: "Eventos",
      description: "Tendas para eventos, insufláveis, festas de aniversário, teambuilding e jogos de estratégia personalizados.",
      image: eventsImage,
      icon: PartyPopper,
      href: "#eventos",
    },
    {
      title: "Tatuagem & Piercings",
      description: "Estúdio profissional com artistas experientes, ambiente higiénico e seguro para dar vida às suas ideias.",
      image: tattooImage,
      icon: Scissors,
      href: "#tatuagem",
    },
    {
      title: "Gestão Imobiliária",
      description: "Serviços de arrendamento de longa duração, manutenção e construção para empreendimentos turísticos e particulares.",
      image: propertyImage,
      icon: Building2,
      href: "#imobiliaria",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />

      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-heading">
              Os Nossos Serviços
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra tudo o que a Azores4fun tem para oferecer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-activities-heading">
              Atividades em Destaque
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experiências únicas que tornam a sua visita inesquecível
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            <FeaturedActivity
              title="Lasertag & Paintball"
              description="Viva momentos emocionantes com os nossos jogos de estratégia em campo próprio. Equipamento de qualidade e cenários desafiantes para grupos de amigos, famílias ou eventos corporativos."
              image={paintballImage}
              imagePosition="left"
              highlights={[
                "Campo próprio em localização privilegiada",
                "Equipamento moderno e seguro",
                "Ideal para grupos e festas de aniversário",
                "Gelblaster e Nerfs também disponíveis"
              ]}
            />

            <FeaturedActivity
              title="Desportos Aquáticos"
              description="Explore a beleza natural dos Açores com os nossos SUPs e Kayaks. Descubra praias escondidas, grutas marinhas e a vida marinha vibrante das águas cristalinas do Faial."
              image={supImage}
              imagePosition="right"
              highlights={[
                "Aluguer de SUPs e Kayaks de qualidade",
                "Material de snorkeling incluído",
                "Águas cristalinas e seguras",
                "Perfeito para todos os níveis de experiência"
              ]}
            />

            <FeaturedActivity
              title="Tours Personalizados"
              description="Descubra a ilha do Faial de forma única e confortável na nossa carrinha elétrica de 9 lugares. Tours personalizados adaptados aos seus interesses e ritmo."
              image={vanImage}
              imagePosition="left"
              highlights={[
                "Carrinha elétrica ecológica e confortável",
                "Itinerários personalizados",
                "Guias locais experientes",
                "Transferências para clientes do alojamento"
              ]}
            />

            <FeaturedActivity
              title="Eventos Corporativos"
              description="Organize o seu próximo evento de teambuilding num ambiente único. Tendas espaçosas, atividades diversificadas e cenários naturais inspiradores para fortalecer a sua equipa."
              image={teambuildingImage}
              imagePosition="right"
              highlights={[
                "Tendas de grandes dimensões",
                "Atividades de teambuilding personalizadas",
                "Jogos de estratégia e cooperação",
                "Infraestrutura completa para eventos"
              ]}
            />
          </div>
        </div>
      </section>

      <WhyChoose />

      <CTASection />

      <Footer />
    </div>
  );
}
