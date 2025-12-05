import { useLanguage } from "@/i18n/LanguageContext";
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const services = [
    { label: t.services.accommodation.title, href: "/alojamento" },
    { label: t.services.activities.title, href: "/animacao" },
    { label: t.services.events.title, href: "/eventos" },
    { label: t.services.tattoo.title, href: "/tatuagem" },
    { label: t.services.property.title, href: "/imobiliaria" },
    { label: t.services.shop.title, href: "/loja" },
  ];

  const legalLinks = [
    { 
      label: t.footer.legal.termsSite, 
      href: `https://azores4fun.com/${language === 'pt' ? 'pt' : 'en'}/termos-e-condicoes-site/` 
    },
    { 
      label: t.footer.legal.termsVending, 
      href: `https://azores4fun.com/${language === 'pt' ? 'pt' : 'en'}/termos-e-condicoes-vending/` 
    },
    { 
      label: t.footer.legal.privacy, 
      href: `https://azores4fun.com/${language === 'pt' ? 'pt' : 'en'}/privacidade-protecao-de-dados/` 
    },
    { 
      label: t.footer.legal.cookies, 
      href: `https://azores4fun.com/${language === 'pt' ? 'pt' : 'en'}/politica-de-cookies/` 
    },
    { 
      label: t.footer.legal.disputes, 
      href: "https://www.consumidor.gov.pt/parceiros/sistema-de-defesa-do-consumidor/entidades-de-resolucao-alternativa-de-litigios-de-consumo" 
    },
  ];

  const socialLinks = [
    { 
      label: "Facebook", 
      href: "https://www.facebook.com/azores4fun", 
      icon: Facebook,
      color: "hover:text-[#1877F2]"
    },
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/azores4fun", 
      icon: Instagram,
      color: "hover:text-[#E4405F]"
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-heading text-2xl font-bold text-primary mb-4">
              Azores<span className="text-foreground">4fun</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              {t.footer.tagline}
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-3">{t.footer.followUs}</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                    aria-label={social.label}
                    data-testid={`link-footer-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${service.href.slice(1)}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.azores4fun.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  data-testid="link-footer-blog"
                >
                  {t.nav.blog}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <div>{t.footer.address.street}</div>
                  <div>{t.footer.address.city}</div>
                  <div>{t.footer.address.azores}</div>
                </div>
              </li>
              <li>
                <a 
                  href="tel:+351934993770" 
                  className="flex items-center gap-2 hover:text-foreground transition-colors" 
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +351 934 993 770
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@azores4fun.com" 
                  className="flex items-center gap-2 hover:text-foreground transition-colors" 
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@azores4fun.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">{t.footer.scheduleTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t.footer.schedule.weekdays}</li>
              <li>{t.footer.schedule.saturday}</li>
              <li>{t.footer.schedule.sunday}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">{t.footer.legalTitle}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    data-testid={`link-footer-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Azores4fun. {t.footer.rights}</p>
            <p className="flex items-center gap-1">
              {t.footer.developedBy} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t.footer.inAzores}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
