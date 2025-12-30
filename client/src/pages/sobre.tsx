import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { seoConfig } from "@/lib/seo-config";
import { organizationSchema, generateFAQSchema } from "@/lib/structured-data";
import { Building2, Zap, CalendarDays, Sparkles, Home, Store, Check, Target, Eye, Heart } from "lucide-react";

export default function SobrePage() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].sobre;
  
  const combinedSchema = organizationSchema;

  const businessAreas = [
    {
      icon: Home,
      title: t.services.accommodation.title,
      description: t.services.accommodation.description
    },
    {
      icon: Zap,
      title: t.services.activities.title,
      description: t.services.activities.description
    },
    {
      icon: CalendarDays,
      title: t.services.events.title,
      description: t.services.events.description
    },
    {
      icon: Sparkles,
      title: t.services.tattoo.title,
      description: t.services.tattoo.description
    },
    {
      icon: Building2,
      title: t.services.property.title,
      description: t.services.property.description
    },
    {
      icon: Store,
      title: t.services.shop.title,
      description: t.services.shop.description
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/sobre"
        structuredData={combinedSchema}
      />
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
              {t.about.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
              {t.about.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="mb-16 md:mb-24">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-our-story">
                {t.about.heroTitle}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.about.heroSubtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>{t.about.storyP1}</p>
              <p>{t.about.storyP2}</p>
              <p>{t.about.storyP3}</p>
              <p>{t.about.storyP4}</p>
              <p>{t.about.storyP5}</p>
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-4">{t.about.mission}</h3>
                <p className="text-muted-foreground">{t.about.missionText}</p>
              </Card>
              <Card className="p-8 text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-4">{t.about.vision}</h3>
                <p className="text-muted-foreground">{t.about.visionText}</p>
              </Card>
              <Card className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-4">{t.about.values}</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  {t.about.valuesList.map((value: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{value}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4" data-testid="text-business-areas">
                {t.about.businessAreas}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.about.businessAreasSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessAreas.map((area, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`business-area-${index}`}>
                  <area.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {area.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center" data-testid="text-why-choose">
              {t.about.whyChoose}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.advantages.map((advantage: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-primary text-primary-foreground text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {t.about.ctaTitle}
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              {t.about.ctaText}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" data-testid="button-contact">
                {t.about.ctaButton}
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" data-testid="button-explore">
                {t.about.exploreServices}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
