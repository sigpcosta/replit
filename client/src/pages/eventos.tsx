import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQs from "@/components/ServiceFAQs";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper, Tent as TentIcon, Users, Heart, Music, Check } from "lucide-react";
import { seoConfig } from "@/lib/seo-config";
import { generateServiceSchema, generateFAQSchema } from "@/lib/structured-data";
import inflatableImage from "@assets/insuflavel_1767111462652.jpeg";
import tentsImage from "@assets/tendas_1767111462653.jpg";
import lasertagKidsImage from "@assets/nautiferias1_1767111462652.jpg";
import outdoorEventImage from "@assets/eventos2_1767111462652.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

export default function EventosPage() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].eventos;
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        language === 'pt' ? 'Organização de Eventos' : 'Event Planning',
        seo.description,
        'https://azores4fun.com/eventos'
      ),
      generateFAQSchema(t.events.faqs)
    ]
  };

  const eventTypes = [
    {
      icon: PartyPopper,
      title: t.events.eventTypesList.birthdays,
      description: t.events.eventTypesList.birthdaysDesc,
      features: t.events.eventTypesList.birthdaysFeatures
    },
    {
      icon: Users,
      title: t.events.eventTypesList.teambuilding,
      description: t.events.eventTypesList.teambuildingDesc,
      features: t.events.eventTypesList.teambuildingFeatures
    },
    {
      icon: TentIcon,
      title: t.events.eventTypesList.outdoor,
      description: t.events.eventTypesList.outdoorDesc,
      features: t.events.eventTypesList.outdoorFeatures
    },
    {
      icon: Heart,
      title: t.events.eventTypesList.bachelorParty,
      description: t.events.eventTypesList.bachelorPartyDesc,
      features: t.events.eventTypesList.bachelorPartyFeatures
    }
  ];


  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/eventos"
        structuredData={combinedSchema}
      />
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <PartyPopper className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                {t.events.title}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {t.events.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                {t.events.heroTitle}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {t.events.heroP1}
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                {t.events.heroP2}
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                {language === 'pt' 
                  ? 'Para planeamento personalizado, visite a nossa '
                  : 'For personalized planning, visit our '}
                <Link href="/loja" className="text-primary hover:underline font-medium" data-testid="link-to-shop">
                  {language === 'pt' ? 'loja na Horta' : 'shop in Horta'}
                </Link>
                {language === 'pt' 
                  ? ' ou contacte-nos diretamente.'
                  : ' or contact us directly.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-plan-event">
                  {t.events.planEvent}
                </Button>
                <Button size="lg" variant="outline" data-testid="button-request-quote">
                  {t.events.requestQuote}
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={inflatableImage}
                alt="Inflatable playground for kids events"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={tentsImage}
                alt={t.events.altEventTents}
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={lasertagKidsImage}
                alt="Kids playing lasertag at event"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src={outdoorEventImage}
                alt={t.events.altTeambuilding}
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              {t.events.eventTypes}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {eventTypes.map((type, index: number) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <type.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature: string, idx: number) => (
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
              {t.events.whatWeOffer}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.events.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            <Card className="p-6 text-center">
              <TentIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.events.cards.tents}
              </h3>
              <p className="text-muted-foreground">
                {t.events.cards.tentsDesc}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Music className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.events.cards.entertainment}
              </h3>
              <p className="text-muted-foreground">
                {t.events.cards.entertainmentDesc}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.events.cards.corporate}
              </h3>
              <p className="text-muted-foreground">
                {t.events.cards.corporateDesc}
              </p>
            </Card>
          </div>
        </div>

        <ServiceFAQs service="events" title={t.events.faqTitle} />
      </div>

      <Footer />
    </div>
  );
}
