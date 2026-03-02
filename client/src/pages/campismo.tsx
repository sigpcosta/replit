import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import TeamSection from "@/components/TeamSection";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tent, Check, MapPin, ExternalLink, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

import tentImg1 from "@assets/tent-2seconds-1.jpg";
import tentImg2 from "@assets/tent-2seconds-2.jpg";
import tentImg3 from "@assets/tent-2seconds-3.jpg";

interface WhyReason {
  title: string;
  desc: string;
}

export default function CamismoPage() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const cp = t.campingPage;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${cp.title} | Azores4fun`}
        description={cp.subtitle}
        keywords="campismo açores, camping azores, aluguer tenda faial, camping equipment rental azores, campismo faial"
        canonicalPath="/campismo"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-600/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-6">
                <Tent className="w-4 h-4" />
                <span className="text-sm font-medium">{cp.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-camping-title">
                {cp.title}
              </h1>
              <p className="text-2xl text-muted-foreground font-medium mb-4">
                {cp.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-5 text-center">
              <p className="text-lg text-foreground leading-relaxed">{cp.heroIntro}</p>
              <p className="text-foreground font-semibold">{cp.heroP1}</p>
              <p className="text-muted-foreground leading-relaxed italic">{cp.heroP2}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-packs-title">{cp.packsTitle}</h2>
              <Card className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse" data-testid="table-camping-packs">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        {cp.packHeaders.map((header: string, i: number) => (
                          <th key={i} className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {cp.packRows.map((row: string[], i: number) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                          <td className="px-4 py-3 text-sm text-foreground font-bold border-b border-border">{row[0]}</td>
                          <td className="px-4 py-3 text-sm text-foreground border-b border-border font-semibold">{row[1]}</td>
                          <td className="px-4 py-3 text-sm text-foreground border-b border-border font-semibold">{row[2]}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground border-b border-border">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <div className="flex items-center gap-2 mt-4 justify-center">
                <ShieldAlert className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <p className="text-sm text-muted-foreground italic">{cp.depositNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-why-title">{cp.whyTitle}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {cp.whyReasons.map((reason: WhyReason, i: number) => (
                  <Card key={i} className="p-5 hover-elevate" data-testid={`card-why-${i}`}>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                        <p className="text-sm text-muted-foreground">{reason.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-3" data-testid="text-tent-title">{cp.tentTitle}</h2>
              <p className="text-center text-muted-foreground mb-8">{cp.tentBrand}</p>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 rounded-lg overflow-hidden">
                    <img src={tentImg1} alt={cp.tentName} className="w-full h-56 object-cover" data-testid="img-tent-1" />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img src={tentImg2} alt={cp.tentName} className="w-full h-32 object-cover" data-testid="img-tent-2" />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img src={tentImg3} alt={cp.tentName} className="w-full h-32 object-cover" data-testid="img-tent-3" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{cp.tentName}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cp.tentDesc}</p>
                  <a
                    href={cp.tentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    data-testid="link-decathlon"
                  >
                    {cp.tentLinkLabel}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground" data-testid="text-where-title">{cp.whereTitle}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{cp.whereDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-how-to-book">{cp.howToBook}</h2>
              <div className="space-y-4">
                {cp.bookSteps.map((step: string, i: number) => (
                  <div key={i} className="flex items-start gap-4" data-testid={`step-book-${i}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {i + 1}
                    </div>
                    <p className="text-foreground pt-2">{step}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button size="lg" onClick={() => setContactOpen(true)} data-testid="button-book-camping">
                  {cp.bookNow}
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
                data-testid="button-reserve-camping"
              >
                {cp.bookNow}
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
