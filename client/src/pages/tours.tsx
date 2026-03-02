import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import TeamSection from "@/components/TeamSection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Globe, Users, Check, Leaf, Camera, Mountain, Waves, Sun, Backpack, Accessibility, CalendarX2, CreditCard, Car, Plane, Images, Bus } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

import tourImage1 from "@assets/carrinha1_1766745835506.jpg";
import tourImage4 from "@assets/tour_half_day_(1)_1771568808374.jpg";
import tourImage5 from "@assets/Transfer_vulcão_capelinhos_1771568808375.jpg";
import tourImage6 from "@assets/trasnfer_caldeira_1771568808376.jpg";
import tourImage7 from "@assets/carrinha3_1766744828213.jpg";
import tourImage8 from "@assets/carrinha4_1767021825286.jpg";
import carImage from "@assets/image_1771571365682.png";

interface TourSectionProps {
  tourData: any;
  heroImage: string;
  icon: typeof Bus;
  vehicleNote?: { title: string; note: string };
  bringItems?: { title: string; items: string[] };
  isVan: boolean;
  setContactOpen: (open: boolean) => void;
  t: any;
}

function TourSection({ tourData, heroImage, icon: VehicleIcon, vehicleNote, bringItems, isVan, setContactOpen, t }: TourSectionProps) {
  return (
    <>
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">{tourData.ecoNote}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3" data-testid={`text-tour-title-${isVan ? "van" : "car"}`}>
              <VehicleIcon className="w-8 h-8" />
              {tourData.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {tourData.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-foreground leading-relaxed">{tourData.heroIntro}</p>
            <p className="text-muted-foreground leading-relaxed">{tourData.heroP1}</p>
            <p className="text-muted-foreground leading-relaxed">{tourData.heroP2}</p>
            <p className="text-muted-foreground leading-relaxed">{tourData.heroP3}</p>
            <p className="text-muted-foreground leading-relaxed">{tourData.heroP4}</p>
            <p className="text-muted-foreground leading-relaxed italic">{tourData.heroP5}</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt={tourData.title}
                className="w-full h-full object-cover"
                data-testid={`img-tour-hero-${isVan ? "van" : "car"}`}
              />
            </div>
          </div>
        </div>
      </section>

      {vehicleNote && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{vehicleNote.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{vehicleNote.note}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12" data-testid={`text-highlights-${isVan ? "van" : "car"}`}>
            {tourData.sectionHighlights}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tourData.highlights.map((highlight: string, index: number) => {
              const icons = [Mountain, Leaf, Users, MapPin, Waves];
              const Icon = icons[index % icons.length];
              return (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-highlight-${isVan ? "van" : "car"}-${index}`}>
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
          <h3 className="text-3xl font-bold text-center text-foreground mb-4" data-testid={`text-details-${isVan ? "van" : "car"}`}>
            {tourData.sectionDetails}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">{tourData.duration}</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-foreground">{tourData.languages}</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground">{tourData.groupType}</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Accessibility className="w-5 h-5 text-primary" />
                <span className="text-foreground">{tourData.accessibility}</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <CalendarX2 className="w-5 h-5 text-primary" />
                <span className="text-foreground">{tourData.cancellation}</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-foreground">{tourData.payLater}</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8" data-testid={`text-includes-${isVan ? "van" : "car"}`}>
                {tourData.sectionIncludes}
              </h3>
              <ul className="space-y-3">
                {tourData.includes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {bringItems && (
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8" data-testid="text-section-bring">
                  {bringItems.title}
                </h3>
                <ul className="space-y-3">
                  {bringItems.items.map((item: string, index: number) => {
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
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8" data-testid={`text-stops-${isVan ? "van" : "car"}`}>
                {tourData.sectionStops}
              </h3>
              <ul className="space-y-3">
                {tourData.stops.map((stop: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{stop}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8" data-testid={`text-optional-${isVan ? "van" : "car"}`}>
                {tourData.sectionOptional}
              </h3>
              <ul className="space-y-3">
                {tourData.optionalActivities.map((activity: string, index: number) => (
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

      <div className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => setContactOpen(true)} data-testid={`button-book-${isVan ? "van" : "car"}`}>
              {tourData.bookNow}
            </Button>
            {!isVan && tourData.getYourGuideUrl && (
              <a href={tourData.getYourGuideUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" data-testid="button-getyourguide-car">
                  {tourData.bookOnGetYourGuide}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const previewImages = [
  { src: tourImage4, alt: "Tour Half Day Faial" },
  { src: tourImage5, alt: "Transfer Capelinhos Volcano" },
  { src: tourImage6, alt: "Transfer Caldeira Faial" },
  { src: tourImage7, alt: "Tour Van Faial" },
  { src: tourImage8, alt: "Tour Transfer Faial" },
  { src: tourImage1, alt: "Electric Van Tour" },
];

export default function ToursPage() {
  const { t, language } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#transfers") {
      setTimeout(() => {
        const el = document.getElementById("transfers");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${t.tourPage.title} | Azores4fun`}
        description={t.tourPage.subtitle}
        keywords="tour faial, eco tour azores, capelinhos volcano, caldeira faial, electric van tour, car tour faial, sustainable tourism azores, guided tour faial island, transfers faial, airport transfer azores"
        canonicalPath="/tours"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-tours-page-title">
                {language === "pt" ? "Tours Personalizados" : "Personalized Tours"}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === "pt" ? "Escolha entre uma experiência em carrinha para grupos ou um tour íntimo de carro" : "Choose between a van experience for groups or an intimate car tour"}
              </p>
            </div>
          </div>
        </section>

        <TourSection
          tourData={t.tourPage}
          heroImage={tourImage1}
          icon={Bus}
          vehicleNote={{ title: t.tourPage.vehicleNoteTitle, note: t.tourPage.vehicleNote }}
          bringItems={{ title: t.tourPage.sectionBring, items: t.tourPage.bringItems }}
          isVan={true}
          setContactOpen={setContactOpen}
          t={t}
        />

        <section id="transfers" className="py-16 bg-muted/30 scroll-mt-24">
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

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
                {t.tourPage.transferFeatures.map((feature: string, index: number) => (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-transfer-feature-${index}`}>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 text-center" data-testid="text-airport-transfer-title">
                    {t.tourPage.transferPricing.airportTitle}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse" data-testid="table-airport-transfers">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          {t.tourPage.transferPricing.headers.map((h: string, i: number) => (
                            <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {t.tourPage.transferPricing.rows1.map((row: string[], i: number) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                            {row.map((cell: string, j: number) => (
                              <td key={j} className="px-4 py-3 text-sm text-foreground border-b border-border font-medium">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 text-center" data-testid="text-caldeira-transfer-title">
                    {t.tourPage.transferPricing.caldeiraTitle}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse" data-testid="table-caldeira-transfers">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          {t.tourPage.transferPricing.headers.map((h: string, i: number) => (
                            <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {t.tourPage.transferPricing.rows2.map((row: string[], i: number) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                            {row.map((cell: string, j: number) => (
                              <td key={j} className="px-4 py-3 text-sm text-foreground border-b border-border font-medium">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" onClick={() => setContactOpen(true)} data-testid="button-book-transfer">
                  {t.tourPage.transferPricing.bookNow}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto mb-12">
              <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
            </div>
          </div>
        </div>

        <TourSection
          tourData={t.carTourPage}
          heroImage={carImage}
          icon={Car}
          isVan={false}
          setContactOpen={setContactOpen}
          t={t}
        />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="text-section-gallery">
              {t.tourPage.sectionGallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {previewImages.map((image, index) => (
                <Card
                  key={index}
                  className="aspect-[4/3] overflow-hidden p-0"
                  data-testid={`gallery-image-${index}`}
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
            <div className="text-center mt-8">
              <Link href="/galeria-tours">
                <Button size="lg" data-testid="button-view-more-photos">
                  <Images className="w-5 h-5 mr-2" />
                  {t.tourPage.viewMorePhotos}
                </Button>
              </Link>
            </div>
          </div>
        </section>

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
