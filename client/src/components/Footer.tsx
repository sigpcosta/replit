import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const services = [
    { label: t.services.accommodation.title, href: "/alojamento" },
    { label: t.services.activities.title, href: "/animacao" },
    { label: t.services.events.title, href: "/eventos" },
    { label: t.services.tattoo.title, href: "/tatuagem" },
    { label: t.services.property.title, href: "/imobiliaria" },
    { label: t.services.shop.title, href: "/loja" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="font-heading text-2xl font-bold text-primary mb-4">
              Azores<span className="text-foreground">4fun</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t.footer.tagline}
            </p>
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
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rua da Horta, 123</li>
              <li>9900-000 Horta, Faial</li>
              <li>
                <a href="tel:+351123456789" className="hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  +351 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:info@azores4fun.com" className="hover:text-foreground transition-colors" data-testid="link-footer-email">
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
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Azores4fun. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
