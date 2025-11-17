import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide" data-testid="text-cta-heading">
          Pronto para a Aventura?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Entre em contacto connosco e comece a planear a sua experiência perfeita nos Açores
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full border-0"
            data-testid="button-cta-book"
          >
            Reservar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-full bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            data-testid="button-cta-contact"
          >
            Contactar
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
          <a
            href="tel:+351123456789"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            data-testid="link-phone"
          >
            <Phone className="h-5 w-5" />
            <span>+351 123 456 789</span>
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
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
            data-testid="link-instagram"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
