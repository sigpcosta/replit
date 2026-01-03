import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram } from "react-icons/si";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const translations = {
    pt: {
      title: "Contacto",
      subtitle: "Entre em Contacto",
      description: "Estamos aqui para ajudar! Entre em contacto connosco através do formulário ou pelos nossos canais diretos.",
      formTitle: "Envie-nos uma Mensagem",
      name: "Nome",
      namePlaceholder: "O seu nome",
      email: "Email",
      emailPlaceholder: "o.seu@email.com",
      phone: "Telefone",
      phonePlaceholder: "+351 XXX XXX XXX",
      message: "Mensagem",
      messagePlaceholder: "Como podemos ajudá-lo?",
      submit: "Enviar Mensagem",
      sending: "A enviar...",
      success: "Mensagem enviada!",
      successMessage: "Entraremos em contacto em breve.",
      error: "Erro",
      errorMessage: "Não foi possível enviar. Tente novamente.",
      directContact: "Contacto Direto",
      whatsappTitle: "WhatsApp",
      whatsappDesc: "Resposta rápida",
      emailTitle: "Email",
      emailDesc: "Para questões detalhadas",
      phoneTitle: "Telefone",
      phoneDesc: "Chamada direta",
      locationTitle: "Localização",
      locationDesc: "Horta, Faial, Açores",
      hoursTitle: "Horário",
      hoursDesc: "Seg-Dom: 9h-19h",
      socialTitle: "Redes Sociais",
      metaDescription: "Contacte a Azores4Fun - Turismo e aventura na Ilha do Faial, Açores. WhatsApp, email ou formulário de contacto.",
    },
    en: {
      title: "Contact",
      subtitle: "Get in Touch",
      description: "We're here to help! Contact us through the form or our direct channels.",
      formTitle: "Send us a Message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      phonePlaceholder: "+351 XXX XXX XXX",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent!",
      successMessage: "We'll get back to you soon.",
      error: "Error",
      errorMessage: "Could not send. Please try again.",
      directContact: "Direct Contact",
      whatsappTitle: "WhatsApp",
      whatsappDesc: "Quick response",
      emailTitle: "Email",
      emailDesc: "For detailed inquiries",
      phoneTitle: "Phone",
      phoneDesc: "Direct call",
      locationTitle: "Location",
      locationDesc: "Horta, Faial, Azores",
      hoursTitle: "Hours",
      hoursDesc: "Mon-Sun: 9am-7pm",
      socialTitle: "Social Media",
      metaDescription: "Contact Azores4Fun - Tourism and adventure on Faial Island, Azores. WhatsApp, email or contact form.",
    }
  };

  const ct = translations[language];

  const sendContactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; phone: string; message: string }) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: ct.success,
        description: ct.successMessage,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    },
    onError: () => {
      toast({
        title: ct.error,
        description: ct.errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendContactMutation.mutate({ name, email, phone, message });
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={ct.title}
        description={ct.metaDescription}
        keywords={language === 'pt' ? 'contacto azores4fun, turismo faial, aventura açores' : 'contact azores4fun, faial tourism, azores adventure'}
        canonicalPath="/contact"
      />
      <Navigation />

      <div className="pt-20 md:pt-24">
        <div className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              {ct.subtitle}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {ct.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  {ct.formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">{ct.name} *</Label>
                    <Input
                      id="contact-name"
                      data-testid="input-contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder={ct.namePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">{ct.email} *</Label>
                    <Input
                      id="contact-email"
                      data-testid="input-contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder={ct.emailPlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">{ct.phone}</Label>
                    <Input
                      id="contact-phone"
                      data-testid="input-contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={ct.phonePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">{ct.message} *</Label>
                    <Textarea
                      id="contact-message"
                      data-testid="input-contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder={ct.messagePlaceholder}
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={sendContactMutation.isPending}
                    data-testid="button-contact-submit"
                  >
                    {sendContactMutation.isPending ? ct.sending : ct.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">{ct.directContact}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://wa.me/351962537160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors"
                    data-testid="link-whatsapp"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <SiWhatsapp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{ct.whatsappTitle}</p>
                      <p className="text-sm text-muted-foreground">+351 962 537 160</p>
                      <p className="text-xs text-muted-foreground">{ct.whatsappDesc}</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@azores4fun.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                    data-testid="link-email"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{ct.emailTitle}</p>
                      <p className="text-sm text-muted-foreground">info@azores4fun.com</p>
                      <p className="text-xs text-muted-foreground">{ct.emailDesc}</p>
                    </div>
                  </a>

                  <a
                    href="tel:+351934993770"
                    className="flex items-center gap-4 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                    data-testid="link-phone"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{ct.phoneTitle}</p>
                      <p className="text-sm text-muted-foreground">+351 934 993 770</p>
                      <p className="text-xs text-muted-foreground">{ct.phoneDesc}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">{ct.locationTitle}</p>
                        <p className="text-xs text-muted-foreground">{ct.locationDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-sm">{ct.hoursTitle}</p>
                        <p className="text-xs text-muted-foreground">{ct.hoursDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{ct.socialTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/azores4fun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                      data-testid="link-facebook"
                    >
                      <SiFacebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com/azores4fun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                      data-testid="link-instagram"
                    >
                      <SiInstagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/351962537160"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                      data-testid="link-whatsapp-social"
                    >
                      <SiWhatsapp className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
