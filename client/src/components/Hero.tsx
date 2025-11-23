import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import ContactDialog from "@/components/ContactDialog";
import heroImage from "@assets/navegar_3.jpg";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Azores coastline with adventure activities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 text-center">
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto italic">
          {t.hero.location}
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          {t.hero.services}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full"
            data-testid="button-hero-explore"
            onClick={scrollToServices}
          >
            {t.hero.explore}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            data-testid="button-hero-contact"
            onClick={() => setContactOpen(true)}
          >
            {t.hero.contact}
          </Button>
        </div>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#services" className="text-white/80 hover:text-white transition-colors" data-testid="link-scroll-down">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">{t.hero.discover}</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
