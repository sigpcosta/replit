import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { seoConfig } from "@/lib/seo-config";
import { organizationSchema, generateFAQSchema } from "@/lib/structured-data";
import { Building2, Zap, CalendarDays, Sparkles, Home, Store, Check, Target, Eye, Heart, Leaf, Award, TreeDeciduous, Sun, Droplets, Recycle, BarChart3 } from "lucide-react";

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

          {/* Sustainability Section */}
          <div className="mb-16 md:mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-sustainability">
                {t.about.sustainability.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t.about.sustainability.intro}
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-12">
              <h3 className="font-heading text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                {t.about.sustainability.certifications.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                      <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-2">{t.about.sustainability.certifications.marcaAcores.name}</h4>
                      <p className="text-muted-foreground text-sm">{t.about.sustainability.certifications.marcaAcores.desc}</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-2">{t.about.sustainability.certifications.amigoNatureza.name}</h4>
                      <p className="text-muted-foreground text-sm">{t.about.sustainability.certifications.amigoNatureza.desc}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Practices */}
            <div className="mb-12">
              <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                {t.about.sustainability.practices.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Carbon */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <TreeDeciduous className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-heading font-bold">{t.about.sustainability.practices.carbon.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {t.about.sustainability.practices.carbon.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Energy */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                      <Sun className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h4 className="font-heading font-bold">{t.about.sustainability.practices.energy.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {t.about.sustainability.practices.energy.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Water */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Droplets className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-heading font-bold">{t.about.sustainability.practices.water.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {t.about.sustainability.practices.water.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Waste */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <Recycle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h4 className="font-heading font-bold">{t.about.sustainability.practices.waste.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {t.about.sustainability.practices.waste.items.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            {/* Monitoring */}
            <Card className="p-6 md:p-8 bg-muted/30 border-dashed">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">{t.about.sustainability.monitoring.title}</h4>
                  <p className="text-muted-foreground">{t.about.sustainability.monitoring.desc}</p>
                </div>
              </div>
            </Card>
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
