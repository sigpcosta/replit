import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQs from "@/components/ServiceFAQs";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, MapPin, ShoppingBag, Ticket, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { seoConfig } from "@/lib/seo-config";
import { generateServiceSchema, generateFAQSchema } from "@/lib/structured-data";
import { useState } from "react";
import shopImage1 from "@assets/exterior_porta_1_1766555488215.jpeg";
import shopImage2 from "@assets/interior_1_nova_1766555488215.jpeg";
import shopImage3 from "@assets/interior_3_nova_1766555488216.jpeg";
import shopImage4 from "@assets/interior_7_1766555488216.jpeg";
import { useLanguage } from "@/i18n/LanguageContext";

const shopImages = [shopImage1, shopImage2, shopImage3, shopImage4];

export default function LojaPage() {
  const { t, language } = useLanguage();
  const seo = seoConfig[language].loja;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex(prev => (prev === 0 ? shopImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => (prev === shopImages.length - 1 ? 0 : prev + 1));
  };
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        language === 'pt' ? 'Loja Azores4fun' : 'Azores4fun Shop',
        seo.description,
        'https://azores4fun.com/loja'
      ),
      generateFAQSchema(t.shop.faqs)
    ]
  };

  const offerings = [
    {
      icon: ShoppingBag,
      title: t.shop.offerings.regional.title,
      description: t.shop.offerings.regional.desc,
      features: t.shop.offerings.regional.features
    },
    {
      icon: Ticket,
      title: t.shop.offerings.tourism.title,
      description: t.shop.offerings.tourism.desc,
      features: t.shop.offerings.tourism.features
    },
    {
      icon: MapPin,
      title: t.shop.offerings.meetingPoint.title,
      description: t.shop.offerings.meetingPoint.desc,
      features: t.shop.offerings.meetingPoint.features
    }
  ];


  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/loja"
        structuredData={combinedSchema}
      />
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-foreground/10 p-3 rounded-lg">
                <Store className="h-8 w-8" />
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold" data-testid="text-page-title">
                {t.shop.title}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {t.shop.subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                {t.shop.heroTitle}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {t.shop.heroP1}
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                {t.shop.heroP2}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-visit-us">
                  {t.shop.visitUs}
                </Button>
                <Button size="lg" variant="outline" data-testid="button-get-directions">
                  {t.shop.getDirections}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={shopImages[currentImageIndex]}
                  alt={`${t.shop.altShop} ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover transition-all duration-300"
                />
              </div>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                data-testid="button-prev-shop-image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                data-testid="button-next-shop-image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {shopImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    data-testid={`button-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              {t.shop.whatWeOffer}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {offerings.map((offering, index: number) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <offering.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {offering.description}
                  </p>
                  <ul className="space-y-2">
                    {offering.features.map((feature: string, idx: number) => (
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
              {t.shop.advantages}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.shop.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 mb-16 md:mb-24">
            <div className="text-center max-w-3xl mx-auto">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold mb-4">
                {t.shop.visitTitle}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {t.shop.address}
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-semibold mb-2">{t.shop.hours.weekdays}</p>
                  <p className="text-muted-foreground">{t.shop.hours.weekdaysTime}</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">{t.shop.hours.saturday}</p>
                  <p className="text-muted-foreground">{t.shop.hours.saturdayTime}</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">{t.shop.hours.sunday}</p>
                  <p className="text-muted-foreground">{t.shop.hours.sundayTime}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <ServiceFAQs service="shop" title={t.shop.faqTitle} />
      </div>

      <Footer />
    </div>
  );
}
