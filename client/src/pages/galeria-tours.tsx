import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";

import tourHalfDay from "@assets/tour_half_day_(1)_1771568808374.jpg";
import transferCapelinhos from "@assets/Transfer_vulcão_capelinhos_1771568808375.jpg";
import transferCaldeira from "@assets/trasnfer_caldeira_1771568808376.jpg";
import carrinha1 from "@assets/carrinha1_1766745835506.jpg";
import carrinha3 from "@assets/carrinha3_1766744828213.jpg";
import carrinha4 from "@assets/carrinha4_1767021825286.jpg";
import trilhos from "@assets/trilhos_(1)_1771568808376.jpg";
import kayak1 from "@assets/kayake1_1766745835508.jpg";
import kayaks from "@assets/Kayakes_1766856007742.jpg";
import kayaks2 from "@assets/Kayakes_1771568808372.jpg";
import sups from "@assets/SUPs_1771568808374.jpg";
import baiaEspalamaca from "@assets/baia_horta_da_espalamaca_1771568808367.jpg";
import baiaMontedaguia from "@assets/baia_horta_do_montedaguia_1771568808368.jpg";
import baiaMontedaguiaZoom from "@assets/baia_horta_do_montedaguia_zoom_1771568808368.jpg";
import nascerSol from "@assets/nascer_do_sol_1771568808372.jpg";
import porSolPortoPim from "@assets/por_sol_porto_pim_(1)_1771568808373.jpg";
import fotoFundo from "@assets/foto_fundo_1771568808370.jpg";
import img5151 from "@assets/IMG-5151_1771568808371.jpg";
import img5158 from "@assets/IMG-5158_1771568808371.jpg";
import navegar from "@assets/navegar_3.jpg";
import foto20220702 from "@assets/20220702_151922_1771568808366.jpg";

const galleryImages = [
  { src: tourHalfDay, altPt: "Tour de meio dia pela ilha do Faial", altEn: "Half day tour around Faial island" },
  { src: transferCapelinhos, altPt: "Transfer ao Vulcão dos Capelinhos", altEn: "Transfer to Capelinhos Volcano" },
  { src: transferCaldeira, altPt: "Transfer à Caldeira do Faial", altEn: "Transfer to Faial Caldeira" },
  { src: carrinha4, altPt: "Carrinha elétrica de tours", altEn: "Electric tour van" },
  { src: carrinha1, altPt: "Tour pela ilha do Faial", altEn: "Tour around Faial island" },
  { src: carrinha3, altPt: "Atividades turísticas no Faial", altEn: "Tourist activities in Faial" },
  { src: trilhos, altPt: "Trilhos pedestres no Faial", altEn: "Hiking trails in Faial" },
  { src: nascerSol, altPt: "Nascer do sol nos Açores", altEn: "Sunrise in the Azores" },
  { src: porSolPortoPim, altPt: "Pôr do sol em Porto Pim", altEn: "Sunset at Porto Pim" },
  { src: baiaEspalamaca, altPt: "Baía da Horta vista da Espalamaca", altEn: "Horta Bay from Espalamaca" },
  { src: baiaMontedaguia, altPt: "Baía da Horta vista do Monte da Guia", altEn: "Horta Bay from Monte da Guia" },
  { src: baiaMontedaguiaZoom, altPt: "Vista panorâmica do Monte da Guia", altEn: "Panoramic view from Monte da Guia" },
  { src: kayak1, altPt: "Kayak na baía da Horta", altEn: "Kayaking in Horta bay" },
  { src: kayaks, altPt: "Kayaks prontos para aventura", altEn: "Kayaks ready for adventure" },
  { src: kayaks2, altPt: "Passeio de kayak", altEn: "Kayak tour" },
  { src: sups, altPt: "Stand-up Paddle na baía", altEn: "Stand-up Paddle in the bay" },
  { src: navegar, altPt: "Navegar nos Açores", altEn: "Sailing in the Azores" },
  { src: fotoFundo, altPt: "Paisagem do Faial", altEn: "Faial landscape" },
  { src: img5151, altPt: "Paisagem natural dos Açores", altEn: "Natural Azores landscape" },
  { src: img5158, altPt: "Natureza do Faial", altEn: "Faial nature" },
  { src: foto20220702, altPt: "Vista panorâmica do Faial", altEn: "Panoramic view of Faial" },
];

export default function GaleriaTours() {
  const { language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    if (e.key === "Escape") setLightboxOpen(false);
    if (e.key === "ArrowLeft") setCurrentIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    if (e.key === "ArrowRight") setCurrentIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, [lightboxOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const titleText = language === "pt" ? "Galeria de Fotos - Tours & Atividades" : "Photo Gallery - Tours & Activities";
  const subtitleText = language === "pt"
    ? "Descubra os melhores momentos dos nossos tours, transfers e atividades na ilha do Faial"
    : "Discover the best moments from our tours, transfers and activities on Faial island";

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`${titleText} | Azores4fun`}
        description={subtitleText}
        keywords="fotos faial, galeria tours açores, paisagens faial, kayak açores, trilhos faial"
        canonicalPath="/galeria-tours"
      />

      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 pt-24 md:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <Button variant="ghost" asChild className="mb-2" data-testid="button-back-tours">
                <Link href="/tours">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {language === "pt" ? "Voltar aos Tours" : "Back to Tours"}
                </Link>
              </Button>
              <h1 className="font-heading text-3xl font-bold" data-testid="text-gallery-title">
                {titleText}
              </h1>
              <p className="text-muted-foreground mt-2">{subtitleText}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                onClick={() => openLightbox(index)}
                className="aspect-[4/3] overflow-hidden cursor-pointer p-0"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index); }}
                data-testid={`button-photo-${index}`}
              >
                <img
                  src={image.src}
                  alt={language === "pt" ? image.altPt : image.altEn}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              {language === "pt"
                ? "Clique nas fotos para ampliar. Use as setas para navegar."
                : "Click on photos to enlarge. Use arrows to navigate."}
            </p>
          </div>
        </div>
      </main>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
          data-testid="lightbox-overlay"
        >
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white z-10"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 text-white z-10"
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1)); }}
            data-testid="button-prev-photo"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <img
            src={galleryImages[currentIndex].src}
            alt={language === "pt" ? galleryImages[currentIndex].altPt : galleryImages[currentIndex].altEn}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            data-testid="img-lightbox-current"
          />

          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 text-white z-10"
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1)); }}
            data-testid="button-next-photo"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 text-white text-sm" data-testid="text-photo-counter">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
