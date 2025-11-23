import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ContactDialog from "@/components/ContactDialog";

export default function CTASection() {
  const [contactOpen, setContactOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide" data-testid="text-cta-heading">
          {t.cta.title}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full border-0"
            data-testid="button-cta-book"
            asChild
          >
            <a href="https://book.azores4fun.com" target="_blank" rel="noopener noreferrer">
              {t.cta.bookNow}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-full bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            data-testid="button-cta-contact"
            onClick={() => setContactOpen(true)}
          >
            {t.cta.contact}
          </Button>
        </div>

        <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
          <a
            href="tel:+351934993770"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            data-testid="link-phone"
          >
            <Phone className="h-5 w-5" />
            <span>+351 934 993 770</span>
          </a>
          <a
            href="mailto:info@azores4fun.com"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            data-testid="link-email"
          >
            <Mail className="h-5 w-5" />
            <span>info@azores4fun.com</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
            data-testid="link-facebook"
            aria-label={t.social.facebook}
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
            data-testid="link-instagram"
            aria-label={t.social.instagram}
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
