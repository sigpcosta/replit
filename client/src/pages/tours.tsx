import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import TeamSection from "@/components/TeamSection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Globe, Users, Check, Leaf, Camera, Mountain, Waves, Sun, Backpack, ExternalLink, Accessibility, CalendarX2, CreditCard, Car, Plane, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

import tourImage1 from "@assets/carrinha4_1767021825286.jpg";
import tourImage2 from "@assets/carrinha1_1766745835506.jpg";
import tourImage3 from "@assets/carrinha3_1766744828213.jpg";
import tourImage4 from "@assets/tour_half_day_(1)_1771568808374.jpg";
import tourImage5 from "@assets/Transfer_vulcão_capelinhos_1771568808375.jpg";
import tourImage6 from "@assets/trasnfer_caldeira_1771568808376.jpg";

const galleryImages = [
  { src: tourImage4, alt: "Tour half day Faial" },
  { src: tourImage5, alt: "Transfer Vulcão dos Capelinhos" },
  { src: tourImage6, alt: "Transfer Caldeira" },
  { src: tourImage1, alt: "Carrinha elétrica tour" },
  { src: tourImage2, alt: "Tour pela ilha do Faial" },
  { src: tourImage3, alt: "Atividades turísticas Faial" },
];

export default function ToursPage() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${t.tourPage.title} | Azores4fun`}
        description={t.tourPage.subtitle}
        keywords="tour faial, eco tour azores, capelinhos volcano, caldeira faial, electric van tour, sustainable tourism azores, guided tour faial island, transfers faial, airport transfer azores"
        canonicalPath="/tours"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">{t.tourPage.ecoNote}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-tour-title">
                {t.tourPage.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t.tourPage.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-foreground leading-relaxed">{t.tourPage.heroIntro}</p>
              <p className="text-muted-foreground leading-relaxed">{t.tourPage.heroP1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.tourPage.heroP2}</p>
              <p className="text-muted-foreground leading-relaxed">{t.tourPage.heroP3}</p>
              <p className="text-muted-foreground leading-relaxed">{t.tourPage.heroP4}</p>
              <p className="text-muted-foreground leading-relaxed italic">{t.tourPage.heroP5}</p>
            </div>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src={tourImage1}
                  alt={t.tourPage.title}
                  className="w-full h-full object-cover"
                  data-testid="img-tour-hero"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t.tourPage.vehicleNoteTitle}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.tourPage.vehicleNote}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="text-section-highlights">
              {t.tourPage.sectionHighlights}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {t.tourPage.highlights.map((highlight: string, index: number) => {
                const icons = [Mountain, Leaf, Users, MapPin, Waves];
                const Icon = icons[index % icons.length];
                return (
                  <Card key={index} className="p-6 hover-elevate" data-testid={`card-highlight-${index}`}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-foreground">{highlight}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4" data-testid="text-section-details">
              {t.tourPage.sectionDetails}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t.tourPage.duration}</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t.tourPage.languages}</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t.tourPage.groupType}</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Accessibility className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t.tourPage.accessibility}</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <CalendarX2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t.tourPage.cancellation}</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{t.tourPage.payLater}</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-section-includes">
                  {t.tourPage.sectionIncludes}
                </h2>
                <ul className="space-y-3">
                  {t.tourPage.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-section-bring">
                  {t.tourPage.sectionBring}
                </h2>
                <ul className="space-y-3">
                  {t.tourPage.bringItems.map((item: string, index: number) => {
                    const bringIcons = [Sun, Waves, Camera, Backpack, Sun, Sun];
                    const Icon = bringIcons[index % bringIcons.length];
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-section-stops">
                  {t.tourPage.sectionStops}
                </h2>
                <ul className="space-y-3">
                  {t.tourPage.stops.map((stop: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{stop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-section-optional">
                  {t.tourPage.sectionOptional}
                </h2>
                <ul className="space-y-3">
                  {t.tourPage.optionalActivities.map((activity: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Plane className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.tourPage.sectionTransfer}</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-section-transfer">
                  {t.tourPage.sectionTransfer}
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t.tourPage.transferDesc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {t.tourPage.transferFeatures.map((feature: string, index: number) => (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-transfer-feature-${index}`}>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="text-section-gallery">
              {t.tourPage.sectionGallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className="aspect-[4/3] overflow-hidden cursor-pointer p-0"
                  data-testid={`gallery-image-${index}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(index); }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
            data-testid="lightbox-overlay"
          >
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 text-white z-50"
              onClick={() => setLightboxIndex(null)}
              data-testid="button-close-lightbox"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="flex items-center gap-4 max-w-5xl w-full">
              <Button
                size="icon"
                variant="ghost"
                className="text-white flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
                }}
                data-testid="button-lightbox-prev"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-h-[80vh] w-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                data-testid="img-lightbox-current"
              />
              <Button
                size="icon"
                variant="ghost"
                className="text-white flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
                }}
                data-testid="button-lightbox-next"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
          </div>
        )}

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <TeamSection members={["miguel", "emanuel"]} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setContactOpen(true)}
                data-testid="button-book-tour"
              >
                {t.tourPage.bookNow}
              </Button>
              <Link href="/animacao" data-testid="link-back-activities">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground">
                  {t.nav.activities}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
    </div>
  );
}
