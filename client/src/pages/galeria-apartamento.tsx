import { useParams, Link } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";

import t0_01 from "@assets/t0_fotos/t0_01.jpg";
import t0_02 from "@assets/t0_fotos/t0_02.jpg";
import t0_03 from "@assets/t0_fotos/t0_03.jpg";
import t0_04 from "@assets/t0_fotos/t0_04.jpg";
import t0_05 from "@assets/t0_fotos/t0_05.jpg";
import t0_06 from "@assets/t0_fotos/t0_06.jpg";
import t0_07 from "@assets/t0_fotos/t0_07.jpg";
import t0_08 from "@assets/t0_fotos/t0_08.jpg";
import t0_09 from "@assets/t0_fotos/t0_09.jpg";
import t0_10 from "@assets/t0_fotos/t0_10.jpg";
import t0_11 from "@assets/t0_fotos/t0_11.jpg";
import t0_12 from "@assets/t0_fotos/t0_12.jpg";
import t0_13 from "@assets/t0_fotos/t0_13.jpg";
import t0_14 from "@assets/t0_fotos/t0_14.jpg";
import t0_15 from "@assets/t0_fotos/t0_15.jpg";
import t0_16 from "@assets/t0_fotos/t0_16.jpg";
import t0_17 from "@assets/t0_fotos/t0_17.jpg";
import t0_18 from "@assets/t0_fotos/t0_18.jpg";
import t0_19 from "@assets/t0_fotos/t0_19.jpg";
import t0_20 from "@assets/t0_fotos/t0_20.jpg";
import t0_21 from "@assets/t0_fotos/t0_21.jpg";
import t0_22 from "@assets/t0_fotos/t0_22.jpg";
import t0_23 from "@assets/t0_fotos/t0_23.jpg";
import t0_24 from "@assets/t0_fotos/t0_24.jpg";
import t0_25 from "@assets/t0_fotos/t0_25.jpg";
import t0_26 from "@assets/t0_fotos/t0_26.jpg";
import t0_27 from "@assets/t0_fotos/t0_27.jpg";
import t0_28 from "@assets/t0_fotos/t0_28.jpg";

const t0Images = [
  t0_01, t0_02, t0_03, t0_04, t0_05, t0_06, t0_07, t0_08, t0_09, t0_10,
  t0_11, t0_12, t0_13, t0_14, t0_15, t0_16, t0_17, t0_18, t0_19, t0_20,
  t0_21, t0_22, t0_23, t0_24, t0_25, t0_26, t0_27, t0_28
];

import t2_01 from "@assets/t2_fotos/t2_01.jpg";
import t2_02 from "@assets/t2_fotos/t2_02.jpg";
import t2_03 from "@assets/t2_fotos/t2_03.jpg";
import t2_04 from "@assets/t2_fotos/t2_04.jpg";
import t2_05 from "@assets/t2_fotos/t2_05.jpg";
import t2_06 from "@assets/t2_fotos/t2_06.jpg";
import t2_07 from "@assets/t2_fotos/t2_07.jpg";
import t2_08 from "@assets/t2_fotos/t2_08.jpg";
import t2_09 from "@assets/t2_fotos/t2_09.jpg";
import t2_10 from "@assets/t2_fotos/t2_10.jpg";
import t2_11 from "@assets/t2_fotos/t2_11.jpg";
import t2_12 from "@assets/t2_fotos/t2_12.jpg";
import t2_13 from "@assets/t2_fotos/t2_13.jpg";
import t2_14 from "@assets/t2_fotos/t2_14.jpg";
import t2_15 from "@assets/t2_fotos/t2_15.jpg";
import t2_16 from "@assets/t2_fotos/t2_16.jpg";
import t2_17 from "@assets/t2_fotos/t2_17.jpg";
import t2_18 from "@assets/t2_fotos/t2_18.jpg";
import t2_19 from "@assets/t2_fotos/t2_19.jpg";
import t2_20 from "@assets/t2_fotos/t2_20.jpg";
import t2_21 from "@assets/t2_fotos/t2_21.jpg";
import t2_22 from "@assets/t2_fotos/t2_22.jpg";
import t2_23 from "@assets/t2_fotos/t2_23.jpg";
import t2_24 from "@assets/t2_fotos/t2_24.jpg";

const t2Images = [
  t2_01, t2_02, t2_03, t2_04, t2_05, t2_06, t2_07, t2_08, t2_09, t2_10,
  t2_11, t2_12, t2_13, t2_14, t2_15, t2_16, t2_17, t2_18, t2_19, t2_20,
  t2_21, t2_22, t2_23, t2_24
];

import t3_01 from "@assets/t3_fotos/t3_01.jpg";
import t3_02 from "@assets/t3_fotos/t3_02.jpg";
import t3_03 from "@assets/t3_fotos/t3_03.jpg";
import t3_04 from "@assets/t3_fotos/t3_04.jpg";
import t3_05 from "@assets/t3_fotos/t3_05.jpg";
import t3_06 from "@assets/t3_fotos/t3_06.jpg";
import t3_07 from "@assets/t3_fotos/t3_07.jpg";
import t3_08 from "@assets/t3_fotos/t3_08.jpg";
import t3_09 from "@assets/t3_fotos/t3_09.jpg";
import t3_10 from "@assets/t3_fotos/t3_10.jpg";
import t3_11 from "@assets/t3_fotos/t3_11.jpg";
import t3_12 from "@assets/t3_fotos/t3_12.jpg";
import t3_13 from "@assets/t3_fotos/t3_13.jpg";
import t3_14 from "@assets/t3_fotos/t3_14.jpg";
import t3_15 from "@assets/t3_fotos/t3_15.jpg";
import t3_16 from "@assets/t3_fotos/t3_16.jpg";
import t3_17 from "@assets/t3_fotos/t3_17.jpg";
import t3_18 from "@assets/t3_fotos/t3_18.jpg";
import t3_19 from "@assets/t3_fotos/t3_19.jpg";
import t3_20 from "@assets/t3_fotos/t3_20.jpg";
import t3_21 from "@assets/t3_fotos/t3_21.jpg";
import t3_22 from "@assets/t3_fotos/t3_22.jpg";
import t3_23 from "@assets/t3_fotos/t3_23.jpg";
import t3_24 from "@assets/t3_fotos/t3_24.jpg";

const t3Images = [
  t3_01, t3_02, t3_03, t3_04, t3_05, t3_06, t3_07, t3_08, t3_09, t3_10,
  t3_11, t3_12, t3_13, t3_14, t3_15, t3_16, t3_17, t3_18, t3_19, t3_20,
  t3_21, t3_22, t3_23, t3_24
];

interface ApartmentGallery {
  slug: string;
  namePt: string;
  nameEn: string;
  descriptionPt: string;
  descriptionEn: string;
  bookingUrl: string;
  images: string[];
}

const apartmentGalleries: ApartmentGallery[] = [
  {
    slug: "t1-mezzanine",
    namePt: "T1 Mezzanine",
    nameEn: "T1 Mezzanine",
    descriptionPt: "Apartamento acolhedor com mezzanine no centro da Horta",
    descriptionEn: "Cozy apartment with mezzanine in Horta center",
    bookingUrl: "https://www.vacation-bookings.com/d/56064021?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2Mzg4MTA0NDA0NjoxMTE%3D",
    images: t0Images
  },
  {
    slug: "t2-centro",
    namePt: "T2 Centro Histórico",
    nameEn: "T2 Historic Center",
    descriptionPt: "Apartamento T2 com terraço no centro histórico da Horta",
    descriptionEn: "T2 apartment with terrace in Horta's historic center",
    bookingUrl: "https://www.vacation-bookings.com/d/51943948?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2Mzg4MTA0NDA0NjoxMTE%3D",
    images: t2Images
  },
  {
    slug: "t3-vista-pico",
    namePt: "T3 Vista Pico",
    nameEn: "T3 Pico View",
    descriptionPt: "Apartamento T3 espaçoso com vista para a montanha do Pico",
    descriptionEn: "Spacious T3 apartment with Pico mountain view",
    bookingUrl: "https://www.vacation-bookings.com/d/51943951?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2MzkwMzU0NzczOToxMTE%3D",
    images: t3Images
  }
];

export default function GaleriaApartamentoPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apartment = apartmentGalleries.find(apt => apt.slug === slug);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen || !apartment) return;
    if (e.key === "Escape") setLightboxOpen(false);
    if (e.key === "ArrowLeft") setCurrentIndex(prev => (prev === 0 ? apartment.images.length - 1 : prev - 1));
    if (e.key === "ArrowRight") setCurrentIndex(prev => (prev === apartment.images.length - 1 ? 0 : prev + 1));
  }, [lightboxOpen, apartment]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!apartment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === "pt" ? "Apartamento não encontrado" : "Apartment not found"}
            </h1>
            <Button asChild>
              <Link href="/alojamento">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === "pt" ? "Voltar ao Alojamento" : "Back to Accommodation"}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const name = language === "pt" ? apartment.namePt : apartment.nameEn;
  const description = language === "pt" ? apartment.descriptionPt : apartment.descriptionEn;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? apartment.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === apartment.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{name} - {language === "pt" ? "Galeria de Fotos" : "Photo Gallery"} | Azores4Fun</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <Button variant="ghost" asChild className="mb-2" data-testid="button-back-accommodation">
                <Link href="/alojamento">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {language === "pt" ? "Voltar" : "Back"}
                </Link>
              </Button>
              <h1 className="font-heading text-3xl font-bold" data-testid="text-gallery-title">
                {name}
              </h1>
              <p className="text-muted-foreground mt-2">{description}</p>
            </div>
            <Button asChild data-testid="button-book-apartment">
              <a href={apartment.bookingUrl} target="_blank" rel="noopener noreferrer">
                {t.accommodation.book}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {apartment.images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] overflow-hidden rounded-lg hover-elevate cursor-pointer group"
                data-testid={`button-photo-${index}`}
              >
                <img
                  src={image}
                  alt={`${name} - ${language === "pt" ? "Foto" : "Photo"} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              {language === "pt" 
                ? "Clique nas fotos para ampliar. Use as setas para navegar."
                : "Click on photos to enlarge. Use arrows to navigate."}
            </p>
            <Button size="lg" asChild data-testid="button-book-bottom">
              <a href={apartment.bookingUrl} target="_blank" rel="noopener noreferrer">
                {t.accommodation.book}
              </a>
            </Button>
          </div>
        </div>
      </main>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            className="absolute top-4 right-4 text-white hover:text-white/80 z-10"
            data-testid="button-close-lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white hover:text-white/80 z-10"
            data-testid="button-prev-photo"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <img
            src={apartment.images[currentIndex]}
            alt={`${name} - ${language === "pt" ? "Foto" : "Photo"} ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            data-testid="img-lightbox-current"
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white hover:text-white/80 z-10"
            data-testid="button-next-photo"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm" data-testid="text-photo-counter">
            {currentIndex + 1} / {apartment.images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
