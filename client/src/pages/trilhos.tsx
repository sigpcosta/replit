import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import TeamSection from "@/components/TeamSection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footprints, MapPin, Clock, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

import trailsImage from "@assets/Placa-trilhos-e1664297289118.jpg";

export default function TrilhosPage() {
  const { t, language } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const tr = t.trailsPage;

  const highlights = [
    { icon: MapPin, label: "Caldeira" },
    { icon: MapPin, label: language === "pt" ? "10 Vulcões" : "10 Volcanoes" },
    { icon: MapPin, label: language === "pt" ? "Costa a Costa" : "Coast to Coast" },
    { icon: MapPin, label: "Levadas" },
    { icon: MapPin, label: "Rocha da Fajã" },
    { icon: MapPin, label: "Ribeirinha-Caldeira" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${tr.title} | Azores4fun`}
        description={tr.subtitle}
        keywords="trilhos açores, hiking azores, faial trails, percursos pedestres faial, caldeira faial, 10 vulcões faial"
        canonicalPath="/trilhos"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-600/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-6">
                <Footprints className="w-4 h-4" />
                <span className="text-sm font-medium">{tr.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-trails-title">
                {tr.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {tr.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <div className="space-y-5">
                <p className="text-lg text-foreground leading-relaxed">{tr.heroIntro}</p>
                <p className="text-muted-foreground leading-relaxed">{tr.heroP1}</p>
                <p className="text-muted-foreground leading-relaxed">{tr.heroP2}</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={trailsImage} alt={tr.title} className="w-full h-full object-cover" data-testid="img-trails" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3">
                {highlights.map((h, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full" data-testid={`trail-highlight-${i}`}>
                    <h.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-10" data-testid="text-prices-title">{tr.pricesTitle}</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">{tr.halfDayTitle}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse" data-testid="table-halfday-prices">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          {tr.priceHeaders.map((header: string, i: number) => (
                            <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tr.halfDayRows.map((row: string[], i: number) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                            {row.map((cell: string, j: number) => (
                              <td key={j} className="px-4 py-3 text-sm text-foreground border-b border-border font-medium">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 italic">{tr.halfDaySuggested}</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">{tr.fullDayTitle}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse" data-testid="table-fullday-prices">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          {tr.priceHeaders.map((header: string, i: number) => (
                            <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tr.fullDayRows.map((row: string[], i: number) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                            {row.map((cell: string, j: number) => (
                              <td key={j} className="px-4 py-3 text-sm text-foreground border-b border-border font-medium">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 italic">{tr.fullDaySuggested}</p>
                </Card>
              </div>

              <Card className="p-4 mt-8 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">{tr.transferNote}</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-how-to-book">{tr.howToBook}</h2>
              <div className="space-y-4">
                {tr.bookSteps.map((step: string, i: number) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`step-book-${i}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {i + 1}
                    </div>
                    <p className="text-foreground pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button size="lg" onClick={() => setContactOpen(true)} data-testid="button-book-trails">
                  {tr.bookNow}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <TeamSection members={["miguel", "emanuel"]} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setContactOpen(true)}
                data-testid="button-reserve-trails"
              >
                {tr.bookNow}
              </Button>
              <Link href="/animacao" data-testid="link-back-activities">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground">
                  {t.nav.activities}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
    </div>
  );
}
