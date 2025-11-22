import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeaturedActivity from "@/components/FeaturedActivity";
import WhyChoose from "@/components/WhyChoose";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Home as HomeIcon, Activity, PartyPopper, Pencil, Building2, Store } from "lucide-react";

import apartmentImage from "@assets/generated_images/Modern_Horta_apartment_interior_ec6f658d.png";
import lasertagImage from "@assets/generated_images/Laser_tag_action_shot_63a174d9.png";
import eventsImage from "@assets/generated_images/Event_tent_celebration_fca04953.png";
import tattooImage from "@assets/generated_images/Tattoo_studio_workspace_bfc3187a.png";
import propertyImage from "@assets/generated_images/Azorean_property_exterior_4bd4f6fb.png";
import shopImage from "@assets/generated_images/Azores4fun_retail_shop_8204420f.png";
import supImage from "@assets/generated_images/SUP_paddleboarding_Azores_ocean_960e2ee9.png";
import vanImage from "@assets/generated_images/Electric_van_island_tour_9d32feea.png";
import teambuildingImage from "@assets/generated_images/Teambuilding_outdoor_activity_99e77711.png";
import paintballImage from "@assets/generated_images/Paintball_action_gameplay_8c01711a.png";

export default function Home() {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t.services.accommodation.title,
      description: t.services.accommodation.description,
      image: apartmentImage,
      icon: HomeIcon,
      href: "/alojamento",
    },
    {
      title: t.services.activities.title,
      description: t.services.activities.description,
      image: lasertagImage,
      icon: Activity,
      href: "/animacao",
    },
    {
      title: t.services.events.title,
      description: t.services.events.description,
      image: eventsImage,
      icon: PartyPopper,
      href: "/eventos",
    },
    {
      title: t.services.tattoo.title,
      description: t.services.tattoo.description,
      image: tattooImage,
      icon: Pencil,
      href: "/tatuagem",
    },
    {
      title: t.services.property.title,
      description: t.services.property.description,
      image: propertyImage,
      icon: Building2,
      href: "/imobiliaria",
    },
    {
      title: t.services.shop.title,
      description: t.services.shop.description,
      image: shopImage,
      icon: Store,
      href: "/loja",
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
              {t.services.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-activities-heading">
              {t.featured.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.featured.subtitle}
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            <FeaturedActivity
              title={t.featured.lasertag.title}
              description={t.featured.lasertag.description}
              image={paintballImage}
              imagePosition="left"
              highlights={t.featured.lasertag.highlights}
            />

            <FeaturedActivity
              title={t.featured.watersports.title}
              description={t.featured.watersports.description}
              image={supImage}
              imagePosition="right"
              highlights={t.featured.watersports.highlights}
            />

            <FeaturedActivity
              title={t.featured.tours.title}
              description={t.featured.tours.description}
              image={vanImage}
              imagePosition="left"
              highlights={t.featured.tours.highlights}
            />

            <FeaturedActivity
              title={t.featured.corporate.title}
              description={t.featured.corporate.description}
              image={teambuildingImage}
              imagePosition="right"
              highlights={t.featured.corporate.highlights}
            />
          </div>
        </div>
      </section>

      <WhyChoose />

      <FAQSection
        categories={[
          {
            title: "Alojamento Local",
            icon: HomeIcon,
            href: "/alojamento",
            faqs: [
              {
                question: "Onde ficam localizados os apartamentos?",
                answer: "Os nossos 3 apartamentos estão localizados no centro da cidade da Horta, Faial, com fácil acesso a todas as comodidades."
              },
              {
                question: "Os apartamentos estão equipados?",
                answer: "Sim, todos os apartamentos estão totalmente equipados com cozinha, Wi-Fi, roupa de cama e tudo o que precisa para uma estadia confortável."
              }
            ]
          },
          {
            title: "Animação Turística",
            icon: Activity,
            href: "/animacao",
            faqs: [
              {
                question: "Que atividades oferecem?",
                answer: "Lasertag, Paintball, Gelblaster, Nerfs, aluguer de SUPs e Kayaks, tours personalizados e muito mais."
              },
              {
                question: "É necessário fazer reserva prévia?",
                answer: "Sim, recomendamos reserva prévia para garantir disponibilidade, especialmente para grupos."
              }
            ]
          },
          {
            title: "Eventos",
            icon: PartyPopper,
            href: "/eventos",
            faqs: [
              {
                question: "Que tipos de eventos organizam?",
                answer: "Festas de aniversário, teambuilding, jogos de estratégia, eventos corporativos e celebrações personalizadas."
              },
              {
                question: "Disponibilizam tendas para eventos?",
                answer: "Sim, temos três tendas disponíveis, incluindo uma de grandes dimensões, perfeitas para eventos ao ar livre."
              }
            ]
          },
          {
            title: "Tatuagem & Piercings",
            icon: Pencil,
            href: "/tatuagem",
            faqs: [
              {
                question: "Onde fica localizado o estúdio?",
                answer: "O estúdio está localizado dentro da loja Azores4fun, no centro da Horta."
              },
              {
                question: "É necessário marcar consulta?",
                answer: "Sim, trabalhamos exclusivamente por marcação para garantir atenção personalizada."
              }
            ]
          },
          {
            title: "Gestão Imobiliária",
            icon: Building2,
            href: "/imobiliaria",
            faqs: [
              {
                question: "Que serviços oferecem?",
                answer: "Arrendamento de longa duração, gestão de propriedades, manutenção, construção e renovações."
              },
              {
                question: "Fazem gestão para alojamento turístico?",
                answer: "Sim, gerimos propriedades turísticas incluindo manutenção, limpeza e gestão de reservas."
              }
            ]
          },
          {
            title: "Loja",
            icon: Store,
            href: "/loja",
            faqs: [
              {
                question: "Onde fica localizada a loja?",
                answer: "A loja está no centro da Horta, Faial, sendo o ponto central para todos os nossos serviços."
              },
              {
                question: "Que produtos vendem?",
                answer: "Produtos regionais, merchandising Azores4fun, equipamento outdoor e artigos de turismo local."
              }
            ]
          }
        ]}
      />

      <CTASection />

      <Footer />
    </div>
  );
}
