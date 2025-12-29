import { useLanguage } from "@/i18n/LanguageContext";
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, ExternalLink, FileText } from "lucide-react";
import marcaAcoresPtLogo from "@assets/AF_ACO_SELO_POS_PT_1767027675830.jpg";
import marcaAcoresEnLogo from "@assets/AF_ACO_SELO_POS_ING_1767027687274.jpg";
import acores2030Logo from "@assets/acores2030-funding-logo.png";
import fichaTecnicaPdf from "@assets/ficha-tecnica-acores2030.pdf";
import acores2020Logo from "@assets/acores2020-funding-logo.png";
import fichaTecnica2020Pdf from "@assets/ficha-tecnica-acores2020.pdf";
import adeliacorLogo from "@assets/adeliacor-funding-logo.jpg";
import fichaTecnicaAdeliacorPdf from "@assets/ficha-tecnica-adeliacor.pdf";
import prrLogo from "@assets/barra_prr_1766164794909.png";

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
      href: "/termos-site",
      external: false
    },
    { 
      label: t.footer.legal.termsVending, 
      href: "/termos-vending",
      external: false
    },
    { 
      label: t.footer.legal.privacy, 
      href: "/privacidade",
      external: false
    },
    { 
      label: t.footer.legal.cookies, 
      href: "/cookies",
      external: false
    },
    { 
      label: t.footer.legal.disputes, 
      href: "https://www.consumidor.gov.pt/parceiros/sistema-de-defesa-do-consumidor/entidades-de-resolucao-alternativa-de-litigios-de-consumo",
      external: true
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
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    data-testid={`link-footer-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col items-center gap-6 mb-8">
            <a 
              href="https://marcaacores.pt/promotor/fff7862d-b223-4cff-9425-29928fc42f4a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center gap-4 hover:opacity-80 transition-opacity"
              data-testid="link-marca-acores"
            >
              <img 
                src={language === 'pt' ? marcaAcoresPtLogo : marcaAcoresEnLogo} 
                alt={language === 'pt' ? 'Açores - Certificado pela Natureza' : 'Azores - Certified by Nature'} 
                className="h-24 w-auto"
                data-testid="img-marca-acores-logo"
              />
              <p className="text-sm text-muted-foreground text-center md:text-left max-w-md">
                {language === 'pt' 
                  ? 'Orgulhosamente uma empresa certificada pela Marca Açores, comprometida com a sustentabilidade, a autenticidade e a excelência no serviço.'
                  : 'Proudly a company certified by Marca Açores, committed to sustainability, authenticity and service excellence.'}
              </p>
            </a>
            
            <div className="flex flex-col items-center gap-2">
              <img 
                src={acores2030Logo} 
                alt="Açores 2030 - Cofinanciamento FEDER" 
                className="max-w-full h-auto md:max-w-2xl"
                data-testid="img-acores2030-logo"
              />
              <a 
                href={fichaTecnicaPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-ficha-tecnica-2030"
              >
                <FileText className="w-4 h-4" />
                {language === 'pt' ? 'Ficha Técnica' : 'Technical Sheet'}
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <img 
                src={acores2020Logo} 
                alt="Açores 2020 - Cofinanciamento FEDER" 
                className="max-w-full h-auto md:max-w-2xl"
                data-testid="img-acores2020-logo"
              />
              <a 
                href={fichaTecnica2020Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-ficha-tecnica-2020"
              >
                <FileText className="w-4 h-4" />
                {language === 'pt' ? 'Ficha Técnica' : 'Technical Sheet'}
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <img 
                src={adeliacorLogo} 
                alt="ADELIACOR - Cofinanciamento" 
                className="max-w-full h-auto md:max-w-2xl"
                data-testid="img-adeliacor-logo"
              />
              <a 
                href={fichaTecnicaAdeliacorPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-ficha-tecnica-adeliacor"
              >
                <FileText className="w-4 h-4" />
                {language === 'pt' ? 'Ficha Técnica' : 'Technical Sheet'}
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <img 
                src={prrLogo} 
                alt="PRR - Plano de Recuperação e Resiliência" 
                className="max-w-full h-auto md:max-w-2xl"
                data-testid="img-prr-logo"
              />
            </div>
          </div>
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
