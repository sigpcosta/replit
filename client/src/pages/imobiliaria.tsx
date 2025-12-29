import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQs from "@/components/ServiceFAQs";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
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
        </div>

        <ServiceFAQs service="realestate" title={t.property.faqTitle} />
      </div>

      <Footer />
    </div>
  );
}
