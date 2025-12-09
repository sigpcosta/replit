import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link, useParams } from "wouter";
import { useState } from "react";

import t1Img1 from "@assets/apartments/t1-mezzanine/01-mezzanine.jpg";
import t1Img2 from "@assets/apartments/t1-mezzanine/02-work-zone.jpg";
import t1Img3 from "@assets/apartments/t1-mezzanine/03-kitchenette.jpg";
import t1Img4 from "@assets/apartments/t1-mezzanine/04-mezzanine-2.jpg";
import t1Img5 from "@assets/apartments/t1-mezzanine/05-living-room.jpg";
import t1Img6 from "@assets/apartments/t1-mezzanine/06-toilet.jpg";

import t2Img1 from "@assets/apartments/t2-centro/01-double-room-1.jpg";
import t2Img2 from "@assets/apartments/t2-centro/02-double-room-2.jpg";
import t2Img3 from "@assets/apartments/t2-centro/03-single-room.jpg";
import t2Img4 from "@assets/apartments/t2-centro/04-living-room.jpg";
import t2Img5 from "@assets/apartments/t2-centro/05-living-room-2.jpg";
import t2Img6 from "@assets/apartments/t2-centro/06-courtyard.jpg";
import t2Img7 from "@assets/apartments/t2-centro/07-kitchen.jpg";
import t2Img8 from "@assets/apartments/t2-centro/08-kitchen-2.jpg";
import t2Img9 from "@assets/apartments/t2-centro/09-wc.jpg";

import t3Img1 from "@assets/apartments/t3-pico/01-single-double-room.jpg";
import t3Img2 from "@assets/apartments/t3-pico/02-double-room.jpg";
import t3Img3 from "@assets/apartments/t3-pico/03-double-room-2.jpg";
import t3Img4 from "@assets/apartments/t3-pico/04-attic-room.jpg";
import t3Img5 from "@assets/apartments/t3-pico/05-attic-room-2.jpg";
import t3Img6 from "@assets/apartments/t3-pico/06-living-room.jpg";
import t3Img7 from "@assets/apartments/t3-pico/07-kitchen.jpg";
import t3Img8 from "@assets/apartments/t3-pico/08-kitchen-2.jpg";
import t3Img9 from "@assets/apartments/t3-pico/09-wc.jpg";

type ApartmentData = {
  namePt: string;
  nameEn: string;
  images: { src: string; labelPt: string; labelEn: string }[];
  bookingUrl: string;
};

const apartmentData: Record<string, ApartmentData> = {
  "t1-mezzanine": {
    namePt: "T1 Mezzanine",
    nameEn: "T1 Mezzanine",
    images: [
      { src: t1Img1, labelPt: "Mezzanine", labelEn: "Mezzanine" },
      { src: t1Img2, labelPt: "Zona de Trabalho", labelEn: "Work Zone" },
      { src: t1Img3, labelPt: "Kitchenette", labelEn: "Kitchenette" },
      { src: t1Img4, labelPt: "Mezzanine", labelEn: "Mezzanine" },
      { src: t1Img5, labelPt: "Sala e Kitchenette", labelEn: "Living Room & Kitchenette" },
      { src: t1Img6, labelPt: "Casa de Banho", labelEn: "Bathroom" },
    ],
    bookingUrl: "https://www.vacation-bookings.com/d/56064021?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2Mzg4MTA0NDA0NjoxMTE%3D"
  },
  "t2-centro": {
    namePt: "T2 Centro da Horta",
    nameEn: "T2 Horta City Center",
    images: [
      { src: t2Img1, labelPt: "Quarto Duplo", labelEn: "Double Room" },
      { src: t2Img2, labelPt: "Quarto Duplo", labelEn: "Double Room" },
      { src: t2Img3, labelPt: "Quarto Individual", labelEn: "Single Room" },
      { src: t2Img4, labelPt: "Sala de Estar", labelEn: "Living Room" },
      { src: t2Img5, labelPt: "Sala de Estar", labelEn: "Living Room" },
      { src: t2Img6, labelPt: "Pátio", labelEn: "Courtyard" },
      { src: t2Img7, labelPt: "Cozinha", labelEn: "Kitchen" },
      { src: t2Img8, labelPt: "Cozinha", labelEn: "Kitchen" },
      { src: t2Img9, labelPt: "Casa de Banho", labelEn: "Bathroom" },
    ],
    bookingUrl: "https://www.vacation-bookings.com/d/51943948?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2Mzg4MTA0NDA0NjoxMTE%3D"
  },
  "t3-vista-pico": {
    namePt: "T3 Vista Pico",
    nameEn: "T3 Pico View",
    images: [
      { src: t3Img1, labelPt: "Quarto Individual/Duplo", labelEn: "Single/Double Room" },
      { src: t3Img2, labelPt: "Quarto Duplo", labelEn: "Double Room" },
      { src: t3Img3, labelPt: "Quarto Duplo", labelEn: "Double Room" },
      { src: t3Img4, labelPt: "Quarto Sótão", labelEn: "Attic Room" },
      { src: t3Img5, labelPt: "Quarto Sótão", labelEn: "Attic Room" },
      { src: t3Img6, labelPt: "Sala de Estar", labelEn: "Living Room" },
      { src: t3Img7, labelPt: "Cozinha", labelEn: "Kitchen" },
      { src: t3Img8, labelPt: "Cozinha", labelEn: "Kitchen" },
      { src: t3Img9, labelPt: "Casa de Banho", labelEn: "Bathroom" },
    ],
    bookingUrl: "https://www.vacation-bookings.com/d/51943951?currency=EUR&locale=pt-PT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Azores4Fun%2C+Turismo+e+Aventura%2C+Unipessoal+Lda&ccons=MTc2MzkwMzU0NzczOToxMTE%3D"
  }
};

export default function GaleriaApartamentoPage() {
  const { language, t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const apartment = params.slug ? apartmentData[params.slug] : null;
  
  if (!apartment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === 'pt' ? 'Apartamento não encontrado' : 'Apartment not found'}
            </h1>
            <Button asChild>
              <Link href="/alojamento">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'pt' ? 'Voltar ao Alojamento' : 'Back to Accommodation'}
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const name = language === 'pt' ? apartment.namePt : apartment.nameEn;
  
  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${name} - ${language === 'pt' ? 'Galeria de Fotos' : 'Photo Gallery'} | Azores4fun`}
        description={language === 'pt' 
          ? `Veja as fotos do apartamento ${name} em Horta, Faial. Alojamento confortável e bem localizado nos Açores.`
          : `View photos of the ${name} apartment in Horta, Faial. Comfortable and well-located accommodation in the Azores.`
        }
        keywords={language === 'pt' 
          ? `${name}, fotos, galeria, alojamento, Horta, Faial, Açores`
          : `${name}, photos, gallery, accommodation, Horta, Faial, Azores`
        }
        canonicalPath={`/galeria-apartamento/${params.slug}`}
      />
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Link href="/alojamento" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors" data-testid="link-back-accommodation">
              <ArrowLeft className="w-4 h-4" />
              {language === 'pt' ? 'Voltar ao Alojamento' : 'Back to Accommodation'}
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl font-bold" data-testid="text-gallery-title">
              {name} - {language === 'pt' ? 'Galeria de Fotos' : 'Photo Gallery'}
            </h1>
            <p className="text-lg text-primary-foreground/90 mt-2">
              {apartment.images.length} {language === 'pt' ? 'fotos' : 'photos'}
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {apartment.images.map((img, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                onClick={() => setSelectedImage(index)}
                data-testid={`img-gallery-${index}`}
              >
                <img 
                  src={img.src} 
                  alt={language === 'pt' ? img.labelPt : img.labelEn}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                  <span className="w-full p-2 text-sm text-white bg-black/50 translate-y-full group-hover:translate-y-0 transition-transform">
                    {language === 'pt' ? img.labelPt : img.labelEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-book-apartment">
              <a href={apartment.bookingUrl} target="_blank" rel="noopener noreferrer">
                {t.accommodation.book}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-back-apartments">
              <Link href="/alojamento">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'pt' ? 'Ver Todos os Apartamentos' : 'View All Apartments'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="modal-lightbox"
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={apartment.images[selectedImage].src}
            alt={language === 'pt' ? apartment.images[selectedImage].labelPt : apartment.images[selectedImage].labelEn}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg">
              {language === 'pt' ? apartment.images[selectedImage].labelPt : apartment.images[selectedImage].labelEn}
            </p>
            <p className="text-sm text-gray-400">
              {selectedImage + 1} / {apartment.images.length}
            </p>
          </div>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : apartment.images.length - 1);
            }}
            data-testid="button-prev-image"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rotate-180"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < apartment.images.length - 1 ? selectedImage + 1 : 0);
            }}
            data-testid="button-next-image"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
