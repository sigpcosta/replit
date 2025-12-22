import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeaturedActivity from "@/components/FeaturedActivity";
import WhyChoose from "@/components/WhyChoose";
import DatabaseFAQSection from "@/components/DatabaseFAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { seoConfig } from "@/lib/seo-config";
import { organizationSchema, localBusinessSchema } from "@/lib/structured-data";
import { Home as HomeIcon, Activity, PartyPopper, Pencil, Building2, Store } from "lucide-react";

import apartmentImage from "@assets/15_1764274865100.jpg";
import lasertagImage from "@assets/generated_images/Laser_tag_action_shot_63a174d9.png";
import eventsImage from "@assets/generated_images/Event_tent_celebration_fca04953.png";
import tattooImage from "@assets/estudio hub_1763981152350.jpg";
import propertyImage from "@assets/TPN1 e 3 porta fechada_1764275620915.png";
import shopImage from "@assets/generated_images/Azores4fun_retail_shop_8204420f.png";
import supImage from "@assets/generated_images/SUP_paddleboarding_Azores_ocean_960e2ee9.png";
import vanImage from "@assets/generated_images/Electric_van_island_tour_9d32feea.png";
import teambuildingImage from "@assets/generated_images/Teambuilding_outdoor_activity_99e77711.png";
import paintballImage from "@assets/generated_images/Paintball_action_gameplay_8c01711a.png";

export default function Home() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].home;
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema
    ]
  };
  
  const faqCategories = [
    { service: "accommodation", title: language === "pt" ? "Alojamento" : "Accommodation", icon: HomeIcon, href: "/alojamento" },
    { service: "paintball", title: language === "pt" ? "Animação Turística" : "Tourism Activities", icon: Activity, href: "/animacao" },
    { service: "events", title: language === "pt" ? "Eventos" : "Events", icon: PartyPopper, href: "/eventos" },
    { service: "tattoo", title: language === "pt" ? "Tatuagens" : "Tattoos", icon: Pencil, href: "/tatuagem" },
    { service: "realestate", title: language === "pt" ? "Imobiliária" : "Real Estate", icon: Building2, href: "/imobiliaria" },
    { service: "shop", title: language === "pt" ? "Loja" : "Shop", icon: Store, href: "/loja" },
  ];
  
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
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/"
        structuredData={combinedSchema}
      />
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

      <DatabaseFAQSection
        categories={faqCategories}
        title={language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
        subtitle={language === "pt" ? "Encontre respostas rápidas às perguntas mais comuns sobre os nossos serviços" : "Find quick answers to the most common questions about our services"}
        viewMoreText={language === "pt" ? "Ver Mais" : "View More"}
      />

      <CTASection />

      <Footer />
    </div>
  );
}
