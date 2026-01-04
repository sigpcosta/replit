import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceFAQs from "@/components/ServiceFAQs";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Sparkles, Shield, Palette, Check, Star, Droplet, Sun, Clock, ExternalLink } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { seoConfig } from "@/lib/seo-config";
import { tattooStudioSchema, catarinaGomesSchema, generateFAQSchema, generateServiceSchema } from "@/lib/structured-data";
import tattooImage from "@assets/generated_images/Tattoo_studio_workspace_bfc3187a.png";
import heroTattooImage from "@assets/principal pagina tatoo2_1763984346847.jpeg";
import catarinaImage from "@assets/catarina_1763981152349.jpg";
import studioImage from "@assets/estudio_1763981152350.jpg";
import portfolio1Image from "@assets/portfolio1_1763981152351.jpg";
import portfolio2Image from "@assets/portfolio2_1763981152351.jpg";
import portfolio3Image from "@assets/portfolio3_1763981152351.jpg";
import portfolio4Image from "@assets/porfolio4_1763981152350.jpg";
import portfolio5Image from "@assets/portfolio5_1763981152351.jpg";
import portfolio6Image from "@assets/portfolio6_1763981152352.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export default function TatuagemPage() {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const seo = seoConfig[language].tatuagem;
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      tattooStudioSchema,
      catarinaGomesSchema,
      generateFAQSchema(t.tattoo.faqs),
      generateServiceSchema(
        language === 'pt' ? 'Tatuagem & Piercings' : 'Tattoo & Piercings',
        seo.description,
        'https://azores4fun.com/tatuagem'
      )
    ]
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("https://formspree.io/f/xwvpwygv", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: "Novo Agendamento Tatuagem/Piercing - Azores4fun"
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: t.tattoo.bookingForm.successTitle,
        description: t.tattoo.bookingForm.successDesc,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: t.tattoo.bookingForm.errorTitle,
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.description) {
      toast({
        title: t.tattoo.bookingForm.requiredFields,
        description: t.tattoo.bookingForm.requiredFieldsDesc,
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(formData);
  };
  const tattooStyles = [
    {
      title: t.tattoo.styles.fineline.title,
      description: t.tattoo.styles.fineline.desc
    }
  ];

  const piercingTypes = [
    {
      title: t.tattoo.piercings.ear.title,
      healing: t.tattoo.piercings.ear.healing,
      description: t.tattoo.piercings.ear.desc
    },
    {
      title: t.tattoo.piercings.nose.title,
      healing: t.tattoo.piercings.nose.healing,
      description: t.tattoo.piercings.nose.desc
    },
    {
      title: t.tattoo.piercings.facial.title,
      healing: t.tattoo.piercings.facial.healing,
      description: t.tattoo.piercings.facial.desc
    },
    {
      title: t.tattoo.piercings.oral.title,
      healing: t.tattoo.piercings.oral.healing,
      description: t.tattoo.piercings.oral.desc
    },
    {
      title: t.tattoo.piercings.body.title,
      healing: t.tattoo.piercings.body.healing,
      description: t.tattoo.piercings.body.desc
    },
    {
      title: t.tattoo.piercings.microdermal.title,
      healing: t.tattoo.piercings.microdermal.healing,
      description: t.tattoo.piercings.microdermal.desc
    }
  ];

  const tattooProcessSteps = t.tattoo.tattooProcess;

  const piercingProcessSteps = t.tattoo.piercingProcess;

  const tattooHighlights = t.tattoo.tattooHighlights;

  const piercingHighlights = t.tattoo.piercingHighlights;

  const aftercareSteps = [
    {
      icon: Clock,
      title: t.tattoo.aftercare.first24h.title,
      description: t.tattoo.aftercare.first24h.desc
    },
    {
      icon: Droplet,
      title: t.tattoo.aftercare.moisturize.title,
      description: t.tattoo.aftercare.moisturize.desc
    },
    {
      icon: Sun,
      title: t.tattoo.aftercare.sunProtection.title,
      description: t.tattoo.aftercare.sunProtection.desc
    },
    {
      icon: Shield,
      title: t.tattoo.aftercare.healing.title,
      description: t.tattoo.aftercare.healing.desc
    }
  ];

  const testimonials = t.tattoo.testimonials;


  return (
    <div className="min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        canonicalPath="/tatuagem"
        structuredData={combinedSchema}
      />
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroTattooImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="text-page-title">
              {t.tattoo.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.tattoo.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white" 
                data-testid="button-book-appointment"
                onClick={() => {
                  document.getElementById('agendar-sessao')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.tattoo.bookConsultation}
              </Button>
              <a href="https://www.instagram.com/catarinagomestattoo/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-view-portfolio">
                  {t.tattoo.viewPortfolio}
                </Button>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <Card className="p-8 hover-elevate transition-all">
                <div className="mb-6">
                  <img 
                    src={catarinaImage} 
                    alt={t.tattoo.artist.title}
                    className="w-full aspect-[3/4] object-cover rounded-lg"
                    data-testid="img-artist"
                  />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-2" data-testid="text-artist-name">
                  {t.tattoo.artist.title}
                </h2>
                <p className="text-primary font-medium mb-4">
                  {t.tattoo.artist.subtitle}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t.tattoo.artist.bio}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {language === 'pt' 
                    ? 'Conheça mais sobre a nossa equipa na página '
                    : 'Learn more about our team on the '}
                  <Link href="/sobre" className="text-primary hover:underline font-medium" data-testid="link-to-about">
                    {language === 'pt' ? 'Sobre Nós' : 'About Us'}
                  </Link>
                  .
                </p>
                <Button 
                  variant="outline" 
                  asChild
                  data-testid="button-artist-website"
                >
                  <a href={t.tattoo.artist.websiteUrl} target="_blank" rel="noopener noreferrer">
                    {t.tattoo.artist.learnMore}
                  </a>
                </Button>
              </Card>

              <Card className="p-8 hover-elevate transition-all">
                <div className="mb-6">
                  <img 
                    src={studioImage} 
                    alt={t.tattoo.studio.title}
                    className="w-full aspect-[3/4] object-cover rounded-lg"
                    data-testid="img-studio"
                  />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4" data-testid="text-studio-title">
                  {t.tattoo.studio.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.tattoo.studio.description}
                </p>
              </Card>
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              {t.tattoo.portfolio.title}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.tattoo.portfolio.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={portfolio1Image}
                  alt={t.tattoo.altTattooWork1}
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-1"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={portfolio2Image}
                  alt={t.tattoo.altTattooWork2}
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-2"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={portfolio3Image}
                  alt={t.tattoo.altTattooWork3}
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-3"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={portfolio4Image}
                  alt={t.tattoo.altTattooWork4}
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-4"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={portfolio5Image}
                  alt={t.tattoo.altTattooWork5}
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-5"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-elevate transition-all cursor-pointer">
                <img
                  src={portfolio6Image}
                  alt={t.tattoo.altTattooWork6}
                  className="w-full h-full object-cover"
                  data-testid="portfolio-image-6"
                />
              </div>
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              {t.tattoo.servicesTitle}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.tattoo.servicesSubtitle}
            </p>
            
            <Tabs defaultValue="tatuagens" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12" data-testid="tabs-services">
                <TabsTrigger value="tatuagens" data-testid="tab-tatuagens">
                  {t.tattoo.tattoosTab}
                </TabsTrigger>
                <TabsTrigger value="piercings" data-testid="tab-piercings">
                  {t.tattoo.piercingsTab}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="tatuagens">
                <div className="space-y-16">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      {t.tattoo.tattooStyles}
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {t.tattoo.tattooStylesSubtitle}
                    </p>
                    <Card className="p-8 hover-elevate transition-all border-l-4 border-l-[#F59E0B]">
                      <h4 className="font-heading text-2xl font-bold mb-4">
                        {tattooStyles[0].title}
                      </h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {tattooStyles[0].description}
                      </p>
                    </Card>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      {t.tattoo.tattooProcessTitle}
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {t.tattoo.tattooProcessSubtitle}
                    </p>
                    <div className="max-w-3xl mx-auto space-y-3">
                      {tattooProcessSteps.map((step: string, index: number) => (
                        <Card key={index} className="p-4 hover-elevate transition-all">
                          <div className="flex items-start gap-3">
                            <div className="bg-[#F59E0B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                              {index + 1}
                            </div>
                            <p className="text-foreground pt-1 text-sm">{step}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-8 md:p-12">
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      {t.tattoo.importantInfo}
                    </h3>
                    <div className="space-y-4 max-w-2xl mx-auto">
                      {tattooHighlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="piercings">
                <div className="space-y-16">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      {t.tattoo.piercingTypes}
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {t.tattoo.piercingTypesSubtitle}
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {piercingTypes.map((type: { title: string; healing: string; description: string }, index: number) => (
                        <Card key={index} className="p-6 hover-elevate transition-all border-l-4 border-l-[#F59E0B]">
                          <h4 className="font-heading text-xl font-bold mb-2">
                            {type.title}
                          </h4>
                          <p className="text-[#F59E0B] text-sm font-medium mb-3">
                            {type.healing}
                          </p>
                          <p className="text-muted-foreground">
                            {type.description}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      {t.tattoo.piercingProcessTitle}
                    </h3>
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {t.tattoo.piercingProcessSubtitle}
                    </p>
                    <div className="max-w-3xl mx-auto space-y-3">
                      {piercingProcessSteps.map((step: string, index: number) => (
                        <Card key={index} className="p-4 hover-elevate transition-all">
                          <div className="flex items-start gap-3">
                            <div className="bg-[#F59E0B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                              {index + 1}
                            </div>
                            <p className="text-foreground pt-1 text-sm">{step}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-8 md:p-12">
                    <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                      {t.tattoo.importantInfo}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {piercingHighlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div id="agendar-sessao" className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              {t.tattoo.bookingForm.title}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.tattoo.bookingForm.description}
            </p>
            <Card className="p-8 max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">{t.tattoo.bookingForm.name}</Label>
                  <Input 
                    id="name" 
                    placeholder={t.contactDialog.namePlaceholder}
                    data-testid="input-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.tattoo.bookingForm.email}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t.contactDialog.emailPlaceholder}
                    data-testid="input-email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.tattoo.bookingForm.phone}</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder={t.contactDialog.phonePlaceholder}
                    data-testid="input-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">{t.tattoo.bookingForm.service}</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger id="service" data-testid="select-service">
                      <SelectValue placeholder={t.tattoo.bookingForm.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tattooConsult">{t.tattoo.bookingForm.serviceOptions.tattooConsult}</SelectItem>
                      <SelectItem value="tattooSession">{t.tattoo.bookingForm.serviceOptions.tattooSession}</SelectItem>
                      <SelectItem value="piercing">{t.tattoo.bookingForm.serviceOptions.piercing}</SelectItem>
                      <SelectItem value="touchup">{t.tattoo.bookingForm.serviceOptions.touchup}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t.tattoo.bookingForm.descriptionLabel}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t.tattoo.bookingForm.descriptionPlaceholder}
                    rows={5}
                    data-testid="textarea-message"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  data-testid="button-submit-form"
                  disabled={bookingMutation.isPending}
                >
                  {bookingMutation.isPending ? t.tattoo.bookingForm.submitting : t.tattoo.bookingForm.submit}
                </Button>
              </form>
            </Card>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              {t.tattoo.aftercare.title}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.tattoo.aftercare.subtitle}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aftercareSteps.map((step: { icon: any; title: string; description: string }, index: number) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="font-heading text-3xl font-bold mb-4 text-center">
              {t.tattoo.testimonialsTitle}
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <SiGoogle className="h-6 w-6 text-[#4285F4]" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-lg">5.0</span>
              <span className="text-muted-foreground">(41 reviews)</span>
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.tattoo.testimonialsSubtitle}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial: { name: string; text: string }, index: number) => (
                <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <SiGoogle className="h-4 w-4 text-[#4285F4]" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-sm">— {testimonial.name}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href={t.tattoo.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                data-testid="link-google-reviews"
              >
                <SiGoogle className="h-4 w-4" />
                {t.tattoo.viewAllReviews}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <ServiceFAQs service="tattoo" title={t.tattoo.faqTitle} />
      </div>

      <Footer />
    </div>
  );
}
