import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import TeamSection from "@/components/TeamSection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, Anchor, Package, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

import supImage from "@assets/SUPs_1771568808374.jpg";
import kayakImage from "@assets/kayake1_1766745835508.jpg";
import kayaksImage from "@assets/Kayakes_1766856007742.jpg";

export default function SupsKayaksPage() {
  const { t, language } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const sk = t.supsKayaksPage;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${sk.title} | Azores4fun`}
        description={sk.subtitle}
        keywords="sup azores, kayak faial, stand up paddle, canoagem, aluguer sup, kayak rental azores, water sports faial, desportos náuticos açores"
        canonicalPath="/sups-kayaks"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
                <Waves className="w-4 h-4" />
                <span className="text-sm font-medium">{language === "pt" ? "Desportos Náuticos" : "Water Sports"}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-sups-title">
                {sk.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {sk.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-foreground leading-relaxed">{sk.heroIntro}</p>
              <p className="text-muted-foreground leading-relaxed">{sk.heroP1}</p>
              <p className="text-muted-foreground leading-relaxed font-medium">{sk.heroP2}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Waves className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground" data-testid="text-sup-title">{sk.supTitle}</h2>
                </div>
                <p className="text-foreground leading-relaxed mb-4">{sk.supDesc}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{sk.supP1}</p>
                <p className="text-muted-foreground leading-relaxed">{sk.supP2}</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={supImage} alt="Stand Up Paddle Azores" className="w-full h-full object-cover" data-testid="img-sup" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <img src={kayaksImage} alt="Kayaking Azores" className="w-full h-full object-cover" data-testid="img-kayak" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Anchor className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground" data-testid="text-kayak-title">{sk.kayakTitle}</h2>
                </div>
                <p className="text-foreground leading-relaxed">{sk.kayakDesc}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <Package className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground" data-testid="text-material-title">{sk.materialTitle}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sk.material.map((item: string, index: number) => (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-material-${index}`}>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground text-center mb-2" data-testid="text-prices-title">{sk.pricesTitle}</h2>
                <p className="text-muted-foreground text-center mb-8 italic">{sk.pricesSubtitle}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse" data-testid="table-rental-prices">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        {sk.priceHeaders.map((header: string, i: number) => (
                          <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sk.priceRows.map((row: string[], i: number) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                          {row.map((cell: string, j: number) => (
                            <td key={j} className="px-4 py-3 text-sm text-foreground border-b border-border">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground text-center mb-2" data-testid="text-guided-title">{sk.guidedTitle}</h2>
                <p className="text-muted-foreground text-center mb-8 italic">{sk.guidedSubtitle}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse" data-testid="table-guided-prices">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        {sk.guidedHeaders.map((header: string, i: number) => (
                          <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sk.guidedRows.map((row: string[], i: number) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                          {row.map((cell: string, j: number) => (
                            <td key={j} className="px-4 py-3 text-sm text-foreground border-b border-border">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-muted-foreground text-sm italic">{sk.priceNote}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-includes-title">{sk.includesTitle}</h3>
                  <ul className="space-y-3">
                    {sk.includes.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-sm mt-4">{sk.neopreneNote}</p>
                  <p className="text-muted-foreground text-sm mt-2">{sk.pumpNote}</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-additional-title">{sk.additionalTitle}</h3>
                  <ul className="space-y-3">
                    {sk.additionalServices.map((service: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-how-to-book">{sk.howToBook}</h2>
              <div className="space-y-4">
                {sk.bookSteps.map((step: string, i: number) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`step-book-${i}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {i + 1}
                    </div>
                    <p className="text-foreground pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button size="lg" onClick={() => setContactOpen(true)} data-testid="button-book-sups">
                  {sk.bookNow}
                </Button>
                <a href={sk.getYourGuideUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" data-testid="button-book-gyg">
                    {sk.bookGetYourGuide}
                  </Button>
                </a>
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
                data-testid="button-reserve-sups"
              >
                {sk.bookNow}
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
