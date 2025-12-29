import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQs from "@/components/ServiceFAQs";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home as HomeIcon, Wrench, Key, Check, Shield } from "lucide-react";
import { seoConfig } from "@/lib/seo-config";
import { generateServiceSchema, generateFAQSchema } from "@/lib/structured-data";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ImobiliariaPage() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].imobiliaria;
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        language === 'pt' ? 'Gestão Imobiliária' : 'Property Management',
        seo.description,
        'https://azores4fun.com/imobiliaria'
      ),
      generateFAQSchema(t.property.faqs)
    ]
  };

  const services = [
    {
      icon: Key,
      title: t.property.services.rental.title,
      description: t.property.services.rental.desc,
      features: t.property.rentalFeatures
    },
    {
      icon: HomeIcon,
      title: t.property.services.tourism.title,
      description: t.property.services.tourism.desc,
      features: t.property.tourismFeatures
    },
    {
      icon: Wrench,
      title: t.property.services.maintenance.title,
      description: t.property.services.maintenance.desc,
      features: t.property.maintenanceFeatures
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/imobiliaria"
        structuredData={combinedSchema}
      />
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <Building2 className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                {t.property.title}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {t.property.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-6">
              {t.property.heroTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
              {t.property.heroP1}
            </p>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
              {t.property.heroP2}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild data-testid="button-contact-us">
                <a href="#contacto">{t.property.contactUs}</a>
              </Button>
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              {t.property.ourServices}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index: number) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature: string, idx: number) => (
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
              {t.property.whyChoose}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.property.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            <Card className="p-6 text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.property.cards.experience}
              </h3>
              <p className="text-muted-foreground">
                {t.property.cards.experienceDesc}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.property.cards.team}
              </h3>
              <p className="text-muted-foreground">
                {t.property.cards.teamDesc}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.property.cards.transparency}
              </h3>
              <p className="text-muted-foreground">
                {t.property.cards.transparencyDesc}
              </p>
            </Card>
          </div>
        </div>

        <ServiceFAQs service="realestate" title={t.property.faqTitle} />
      </div>

      <Footer />
    </div>
  );
}
