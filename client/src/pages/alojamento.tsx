import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Wifi, Utensils, MapPin, Check } from "lucide-react";
import apartmentImage from "@assets/TPN1 e 3 porta fechada_1763903607815.png";
import apt1Image from "@assets/apt1-azores4fun.jpg";
import apt2Image from "@assets/apt2-travessa-terreo.jpg";
import apt3Image from "@assets/apt3-travessa-3quartos.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AlojamentoPage() {
  const { t } = useLanguage();

  const apartments = [
    {
      name: t.accommodation.apartmentTypes.t1,
      capacity: t.accommodation.apartmentTypes.t1Capacity,
      description: t.accommodation.apartmentTypes.t1Description,
      features: t.accommodation.aptFeatures.t1,
      image: apt1Image,
      bookingUrl: "https://www.vacation-bookings.com/d/56064021?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2MzkwMzU0NzczOToxMTE%3D"
    },
    {
      name: t.accommodation.apartmentTypes.t2Centro,
      capacity: t.accommodation.apartmentTypes.t2CentroCapacity,
      description: t.accommodation.apartmentTypes.t2CentroDescription,
      features: t.accommodation.aptFeatures.t2Centro,
      image: apt2Image,
      bookingUrl: "https://www.vacation-bookings.com/d/51943948?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2Mzg4MTA0NDA0NjoxMTE%3D"
    },
    {
      name: t.accommodation.apartmentTypes.t2Pico,
      capacity: t.accommodation.apartmentTypes.t2PicoCapacity,
      description: t.accommodation.apartmentTypes.t2PicoDescription,
      features: t.accommodation.aptFeatures.t2Pico,
      image: apt3Image,
      bookingUrl: "https://www.vacation-bookings.com/d/51943951?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2MzkwMzU0NzczOToxMTE%3D"
    }
  ];

  const faqs = t.accommodation.faqs;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <HomeIcon className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                {t.accommodation.title}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {t.accommodation.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                {t.accommodation.heroTitle}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {t.accommodation.heroP1}
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                {t.accommodation.heroP2}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  asChild
                  data-testid="button-bookings-availability"
                >
                  <a href="https://azores4fun.vacation-bookings.com/" target="_blank" rel="noopener noreferrer">
                    {t.accommodation.bookingsAndAvailability}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={apartmentImage}
                alt={t.accommodation.altApartmentInterior}
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              {t.accommodation.ourApartments}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {apartments.map((apt, index) => (
                <Card key={index} className="overflow-hidden hover-elevate transition-all">
                  <img
                    src={apt.image}
                    alt={apt.name}
                    className="w-full h-48 object-cover"
                    data-testid={`img-apt-${index}`}
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-2" data-testid={`text-apt-name-${index}`}>
                      {apt.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t.accommodation.capacity}: {apt.capacity}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {apt.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {apt.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      asChild
                      data-testid={`button-book-apt-${index}`}
                    >
                      <a href={apt.bookingUrl} target="_blank" rel="noopener noreferrer">
                        {t.accommodation.book}
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              {t.accommodation.amenitiesTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.accommodation.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.accommodation.highlights.location}
              </h3>
              <p className="text-muted-foreground">
                {t.accommodation.highlights.locationDesc}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.accommodation.highlights.wifi}
              </h3>
              <p className="text-muted-foreground">
                {t.accommodation.highlights.wifiDesc}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.accommodation.highlights.kitchen}
              </h3>
              <p className="text-muted-foreground">
                {t.accommodation.highlights.kitchenDesc}
              </p>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
            {t.accommodation.faqTitle}
          </h2>
          
          <Card className="p-6">
            <div className="space-y-1">
              {faqs.map((faq: { question: string; answer: string }, index: number) => (
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
