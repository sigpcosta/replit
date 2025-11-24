import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, Waves, Car, Tent, Check, Eye, Camera } from "lucide-react";
import { seoConfig } from "@/lib/seo-config";
import { generateServiceSchema, generateFAQSchema } from "@/lib/structured-data";
import lasertagImage from "@assets/generated_images/Laser_tag_action_shot_63a174d9.png";
import supImage from "@assets/generated_images/SUP_paddleboarding_Azores_ocean_960e2ee9.png";
import paintballImage from "@assets/generated_images/Paintball_action_gameplay_8c01711a.png";
import vanImage from "@assets/generated_images/Electric_van_island_tour_9d32feea.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

export default function AnimacaoPage() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].animacao;
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        language === 'pt' ? 'Atividades Turísticas & Animação' : 'Tourist Activities & Entertainment',
        seo.description,
        'https://azores4fun.com/animacao'
      ),
      generateFAQSchema(t.activities.faqs)
    ]
  };

  const activities = [
    {
      icon: Target,
      title: t.activities.activityTypes.lasertag,
      description: t.activities.activityTypes.lasertagDesc,
      features: t.activities.lasertagFeatures
    },
    {
      icon: Car,
      title: t.activities.activityTypes.vantours,
      description: t.activities.activityTypes.vantoursDesc,
      features: t.activities.vantoursFeatures
    },
    {
      icon: Waves,
      title: t.activities.activityTypes.sups,
      description: t.activities.activityTypes.supsDesc,
      features: t.activities.supsFeatures
    },
    {
      icon: Eye,
      title: t.activities.activityTypes.snorkeling,
      description: t.activities.activityTypes.snorkelingDesc,
      features: t.activities.snorkelingFeatures
    },
    {
      icon: Tent,
      title: t.activities.activityTypes.trails,
      description: t.activities.activityTypes.trailsDesc,
      features: t.activities.trailsFeatures
    },
    {
      icon: Camera,
      title: t.activities.activityTypes.packages,
      description: t.activities.activityTypes.packagesDesc,
      features: t.activities.packagesFeatures
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/animacao"
        structuredData={combinedSchema}
      />
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <Zap className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                {t.activities.title}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {t.activities.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1">
              <h2 className="font-heading text-3xl font-bold mb-6">
                {t.activities.heroTitle}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {t.activities.heroP1}
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                {t.activities.heroP2}
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                {language === 'pt' 
                  ? 'Visite a nossa '
                  : 'Visit our '}
                <Link href="/loja" className="text-primary hover:underline font-medium" data-testid="link-to-shop">
                  {language === 'pt' ? 'loja no centro da Horta' : 'shop in the center of Horta'}
                </Link>
                {language === 'pt' 
                  ? ' para mais informações e reservas presenciais.'
                  : ' for more information and in-person bookings.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-book-activity">
                  {t.activities.bookActivity}
                </Button>
                <Button size="lg" variant="outline" data-testid="button-view-packages">
                  {t.activities.viewPackages}
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <img
                src={lasertagImage}
                alt={t.activities.altLasertag}
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={paintballImage}
                alt={t.activities.altPaintball}
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={supImage}
                alt={t.activities.altSUP}
                className="rounded-lg w-full h-48 object-cover col-span-2"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              {t.activities.ourActivities}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index: number) => (
                <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-activity-${index}`}>
                  <activity.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {activity.description}
                  </p>
                  <ul className="space-y-2">
                    {activity.features.map((feature: string, idx: number) => (
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
              {t.activities.whyChoose}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.activities.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 mb-16 md:mb-24 bg-primary text-primary-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  {t.activities.customTours}
                </h2>
                <p className="text-primary-foreground/90 mb-6">
                  {t.activities.customToursDesc}
                </p>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  {t.activities.planTour}
                </Button>
              </div>
              <img
                src={vanImage}
                alt={t.activities.altTour}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            {t.activities.faqTitle}
          </h2>
          
          <Card className="p-6">
            <div className="space-y-1">
              {t.activities.faqs.map((faq, index: number) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {t.common.faqNotFound}
            </p>
            <a
              href="#"
              className="text-primary font-semibold hover:underline"
              data-testid="link-contact-us"
            >
              {t.common.contactUs}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
