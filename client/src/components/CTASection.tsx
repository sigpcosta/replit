import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-cta-heading">
          Contacte-nos:
        </h3>

        <form className="max-w-2xl space-y-6">
          <div>
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              data-testid="input-name"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Endereço de mail *"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              data-testid="input-email"
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-0"
              data-testid="button-send"
            >
              ENVIAR MENSAGEM
            </Button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-white/20">
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
      </div>
    </section>
  );
}
