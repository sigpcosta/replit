import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Alojamento", href: "#alojamento" },
    { label: "Animação Turística", href: "#animacao" },
    { label: "Eventos", href: "#eventos" },
    { label: "Tatuagem", href: "#tatuagem" },
    { label: "Imobiliária", href: "#imobiliaria" },
    { label: "Loja", href: "#loja" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2" data-testid="link-home">
            <div className="font-heading text-2xl font-bold text-primary">
              Azores<span className="text-foreground">4fun</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${item.href.slice(1)}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="default" data-testid="button-contact">
              Contactar
            </Button>
            <Button size="default" data-testid="button-book">
              Reservar
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.href.slice(1)}`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full" data-testid="button-mobile-contact">
                Contactar
              </Button>
              <Button className="w-full" data-testid="button-mobile-book">
                Reservar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
