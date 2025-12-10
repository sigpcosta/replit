import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Zap, Droplets, Baby, Users, Shield, Play, Check, MapPin, Clock, Euro } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "wouter";

import paintballField1 from "@assets/paintball/paintball_field1.jpeg";
import paintballField2 from "@assets/paintball/paintball_field2.jpeg";
import paintballField3 from "@assets/paintball/paintball_field3.jpeg";
import paintballField4 from "@assets/paintball/paintball_field4.jpeg";
import paintballField5 from "@assets/paintball/paintball_field5.jpeg";
import insuflavelImage from "@assets/paintball/insuflavel.jpeg";

export default function PaintballPage() {
  const { t, language } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fieldImages = [
    { src: paintballField1, alt: "Campo de Paintball Faial 1" },
    { src: paintballField2, alt: "Campo de Paintball Faial 2" },
    { src: paintballField3, alt: "Campo de Paintball Faial 3" },
    { src: paintballField4, alt: "Campo de Paintball Faial 4" },
    { src: paintballField5, alt: "Campo de Paintball Faial 5" },
    { src: insuflavelImage, alt: "Insuflável Gigante com Obstáculos" },
  ];

  const games = [
    { title: t.paintball.gameTeam, desc: t.paintball.gameTeamDesc, icon: Users },
    { title: t.paintball.gameFreeForAll, desc: t.paintball.gameFreeForAllDesc, icon: Target },
    { title: t.paintball.gameFreePlay, desc: t.paintball.gameFreePlayDesc, icon: Play },
    { title: t.paintball.gameHostage, desc: t.paintball.gameHostageDesc, icon: Shield },
    { title: t.paintball.gameConfirmedKill, desc: t.paintball.gameConfirmedKillDesc, icon: Check },
    { title: t.paintball.gameFlag, desc: t.paintball.gameFlagDesc, icon: MapPin },
    { title: t.paintball.gameDefense, desc: t.paintball.gameDefenseDesc, icon: Shield },
    { title: t.paintball.gameDomination, desc: t.paintball.gameDominationDesc, icon: Clock },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % fieldImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + fieldImages.length) % fieldImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${t.paintball.title} | Azores4fun`}
        description={t.paintball.subtitle}
        keywords="lasertag, paintball, gelblaster, nerfs, azores, faial, horta, jogos estratégia"
        canonicalPath="/paintball"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-paintball-title">
              {t.paintball.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t.paintball.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-foreground leading-relaxed">{t.paintball.heroIntro}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paintball.heroP1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paintball.heroP2}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paintball.heroP3}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paintball.heroP4}</p>
            <p className="text-muted-foreground leading-relaxed italic">{t.paintball.heroP5}</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/e3InIy17Isw"
                title="Azores4fun Paintball"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-main"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4" data-testid="text-section-activities">
            {t.paintball.sectionActivities}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.paintball.sectionActivitiesIntro}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t.paintball.paintballTitle}</h3>
                  <p className="text-muted-foreground mb-3">{t.paintball.paintballDesc}</p>
                  <p className="text-muted-foreground italic">{t.paintball.paintballBenefits}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t.paintball.lasertagTitle}</h3>
                  <p className="text-muted-foreground mb-3">{t.paintball.lasertagDesc}</p>
                  <p className="text-muted-foreground italic">{t.paintball.lasertagExtra}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t.paintball.gelblasterTitle}</h3>
                  <p className="text-muted-foreground mb-3">{t.paintball.gelblasterDesc}</p>
                  <p className="text-muted-foreground italic">{t.paintball.gelblasterExtra}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Baby className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t.paintball.nerfsTitle}</h3>
                  <p className="text-muted-foreground mb-3">{t.paintball.nerfsDesc}</p>
                  <p className="text-muted-foreground italic">{t.paintball.nerfsExtra}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="text-section-field">
            {t.paintball.sectionField}
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src={fieldImages[currentImageIndex].src}
                  alt={fieldImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                  data-testid={`img-field-${currentImageIndex}`}
                />
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                data-testid="button-prev-image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                data-testid="button-next-image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {fieldImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    data-testid={`button-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-muted-foreground leading-relaxed">{t.paintball.fieldP1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paintball.fieldP2}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paintball.fieldP3}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paintball.fieldP4}</p>
            <p className="text-foreground font-semibold mt-6">{t.paintball.fieldGoal}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12" data-testid="text-section-games">
            {t.paintball.sectionGames}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gjLDjIs6MU0"
                title="Paintball Jogo Equipa vs Equipa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-team-vs-team"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/X8SibLUZ8WA"
                title="Paintball Jogo Todos contra Todos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-free-for-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {games.map((game, index) => (
              <Card key={index} className="p-4 hover-elevate">
                <div className="flex items-center gap-3 mb-2">
                  <game.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground">{game.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{game.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4" data-testid="text-section-pricing">
            {t.paintball.sectionPricing}
          </h2>
          <p className="text-center text-muted-foreground mb-12 italic">{t.paintball.perPerson}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{t.paintball.lasertagPricing}</h3>
              </div>
              <ul className="space-y-2">
                {t.paintball.lasertagPrices.map((price: string, index: number) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {price}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{t.paintball.paintballPricing}</h3>
              </div>
              <ul className="space-y-2">
                {t.paintball.paintballPrices.map((price: string, index: number) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {price}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{t.paintball.gelblasterPricing}</h3>
              </div>
              <ul className="space-y-2">
                {t.paintball.gelblasterPrices.map((price: string, index: number) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {price}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Baby className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{t.paintball.nerfsPricing}</h3>
              </div>
              <ul className="space-y-2">
                {t.paintball.nerfsPrices.map((price: string, index: number) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {price}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-center text-primary font-semibold mb-4">{t.paintball.discount15}</p>
              <p className="text-center text-sm text-muted-foreground mb-6">{t.paintball.minimumNote}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-foreground mb-2">{t.paintball.packsInclude}</h4>
                  <ul className="space-y-1">
                    {t.paintball.packItems.map((item: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-bold text-foreground mt-4 mb-2">{t.paintball.paintballExtras}</h4>
                  <ul className="space-y-1">
                    {t.paintball.paintballExtraItems.map((item: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{t.paintball.paintballDiscounts}</h4>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-center gap-2">
                      <Euro className="w-4 h-4 text-green-500" />
                      {t.paintball.discount20}
                    </li>
                    <li className="text-sm text-muted-foreground flex items-center gap-2">
                      <Euro className="w-4 h-4 text-green-500" />
                      {t.paintball.discount30}
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold text-foreground mb-4">{t.paintball.rentalInflatable}</h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">{t.paintball.inflatable3h}</li>
                  <li className="text-muted-foreground">{t.paintball.inflatable3hSupervised}</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold text-foreground mb-4">{t.paintball.rentalTents}</h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">{t.paintball.tent3x6}</li>
                  <li className="text-muted-foreground">{t.paintball.tent4x8}</li>
                  <li className="text-muted-foreground">{t.paintball.tent16x8}</li>
                </ul>
              </Card>
            </div>
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
                data-testid="button-book-now"
              >
                {t.paintball.bookNow}
              </Button>
              <Link href="/animacao">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" data-testid="link-back-activities">
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
