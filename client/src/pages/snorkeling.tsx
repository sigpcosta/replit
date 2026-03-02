import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import TeamSection from "@/components/TeamSection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Check, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

import snorkelingImage from "@assets/anima2_(2)_1767111143180.jpg";

export default function SnorkelingPage() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const sn = t.snorkelingPage;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${sn.title} | Azores4fun`}
        description={sn.subtitle}
        keywords="snorkeling azores, snorkeling faial, aluguer snorkeling, snorkeling rental azores, mergulho açores, underwater azores"
        canonicalPath="/snorkeling"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">Snorkeling</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-snorkeling-title">
                {sn.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {sn.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <div className="space-y-5">
                <p className="text-lg text-foreground leading-relaxed">{sn.heroIntro}</p>
                <p className="text-foreground font-semibold leading-relaxed">{sn.heroP1}</p>
                <p className="text-primary font-bold text-lg">{sn.heroP2}</p>
                <p className="text-muted-foreground leading-relaxed">{sn.heroP3}</p>
                <p className="text-muted-foreground leading-relaxed italic">{sn.heroP4}</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={snorkelingImage} alt="Snorkeling Azores" className="w-full h-full object-cover" data-testid="img-snorkeling" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground" data-testid="text-material-title">{sn.materialTitle}</h2>
                <p className="text-muted-foreground mt-2">{sn.materialSubtitle}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {sn.material.map((item: string, index: number) => (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-material-${index}`}>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-prices-title">{sn.pricesTitle}</h2>
              <Card className="p-6 max-w-lg mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse" data-testid="table-snorkeling-prices">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        {sn.priceHeaders.map((header: string, i: number) => (
                          <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sn.priceRows.map((row: string[], i: number) => (
                        <tr key={i} className="bg-muted/30">
                          {row.map((cell: string, j: number) => (
                            <td key={j} className="px-4 py-3 text-sm text-foreground border-b border-border font-medium">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-4 italic">{sn.priceNote}</p>
                <p className="text-muted-foreground text-sm mt-2">{sn.neopreneNote}</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground" data-testid="text-conditions-title">{sn.conditionsTitle}</h2>
              </div>
              <div className="space-y-4 max-w-3xl mx-auto">
                {sn.conditions.map((condition: string, i: number) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`condition-${i}`}>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{condition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-how-to-book">{sn.howToBook}</h2>
              <div className="space-y-4">
                {sn.bookSteps.map((step: string, i: number) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`step-book-${i}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {i + 1}
                    </div>
                    <p className="text-foreground pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button size="lg" onClick={() => setContactOpen(true)} data-testid="button-book-snorkeling">
                  {sn.bookNow}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
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
                data-testid="button-reserve-snorkeling"
              >
                {sn.bookNow}
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
