import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { seoConfig } from "@/lib/seo-config";
import { organizationSchema } from "@/lib/structured-data";
import { Link } from "wouter";
import { 
  Building2, Zap, CalendarDays, Sparkles, Home, Store, Check, Target, Eye, Heart,
  Sailboat, Car, Home as HomeIcon, Crosshair, Waves, ShoppingBag, Anchor, Mountain
} from "lucide-react";

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

  const milestoneIcons = [Anchor, Car, HomeIcon, Crosshair, Waves, ShoppingBag];

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
        <div className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%2030m-28%200a28%2028%200%201%200%2056%200a28%2028%200%201%200-56%200%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.05)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            <div className="flex items-center gap-3 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="text-primary-foreground/80 font-medium">Horta, Faial - Açores</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              {t.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mb-8">
              {t.about.subtitle}
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-4xl italic border-l-4 border-primary-foreground/30 pl-4">
              "{t.about.tagline}"
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="mb-20 md:mb-28">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-our-story">
                {t.about.heroTitle}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.about.heroSubtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="text-xl text-foreground font-medium">{t.about.storyP1}</p>
                <p>{t.about.storyP2}</p>
                <p>{t.about.storyP3}</p>
                <p>{t.about.storyP4}</p>
                <p className="text-foreground font-semibold text-xl bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  {t.about.storyP5}
                </p>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 md:p-8">
                <h3 className="font-heading text-2xl font-bold mb-8 text-center" data-testid="text-timeline">
                  {t.about.timeline}
                </h3>
                <div className="space-y-0">
                  {t.about.milestones.map((milestone: any, index: number) => {
                    const Icon = milestoneIcons[index] || Anchor;
                    return (
                      <div key={index} className="relative flex gap-4" data-testid={`milestone-${index}`}>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg z-10">
                            <Icon className="h-5 w-5" />
                          </div>
                          {index < t.about.milestones.length - 1 && (
                            <div className="w-0.5 h-full bg-primary/20 min-h-[60px]"></div>
                          )}
                        </div>
                        <div className="pb-8">
                          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-2">
                            {milestone.year}
                          </span>
                          <h4 className="font-heading text-lg font-bold mb-1">{milestone.title}</h4>
                          <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 md:mb-28">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 text-center hover-elevate">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-4">{t.about.mission}</h3>
                <p className="text-muted-foreground">{t.about.missionText}</p>
              </Card>
              <Card className="p-8 text-center hover-elevate">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-4">{t.about.vision}</h3>
                <p className="text-muted-foreground">{t.about.visionText}</p>
              </Card>
              <Card className="p-8 text-center hover-elevate">
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

          <div className="mb-20 md:mb-28">
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
                <Card key={index} className="p-6 hover-elevate transition-all group" data-testid={`business-area-${index}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <area.icon className="h-7 w-7 text-primary" />
                  </div>
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

          <div className="bg-muted/30 rounded-xl p-8 md:p-12 mb-20 md:mb-28">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center" data-testid="text-why-choose">
              {t.about.whyChoose}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.advantages.map((advantage: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%2030m-28%200a28%2028%200%201%200%2056%200a28%2028%200%201%200-56%200%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.05)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {t.about.ctaTitle}
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                {t.about.ctaText}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" data-testid="button-contact">
                    {t.about.ctaButton}
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" data-testid="button-explore">
                    {t.about.exploreServices}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
