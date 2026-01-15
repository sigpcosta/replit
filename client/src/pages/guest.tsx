import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useSearch } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { Plus, Minus, Check, Loader2 } from "lucide-react";
import logoGif from "@assets/LogoAzores4fun360_1763895112388.gif";

const countries = [
  "Argentina", "Australia", "Austria", "Belgium", "Brazil", "Bulgaria", "Canada", "Chile", "China",
  "Croatia", "Cyprus", "Czech Republic", "Denmark", "Egypt", "Estonia", "Finland", "France", "Germany",
  "Greece", "Hungary", "Iceland", "India", "Ireland", "Israel", "Italy", "Japan", "Latvia", "Lithuania",
  "Luxembourg", "Malta", "Mexico", "Morocco", "Netherlands", "New Zealand", "Norway", "Poland", "Portugal",
  "Romania", "Russia", "Saudi Arabia", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain",
  "Sweden", "Switzerland", "Turkey", "United Arab Emirates", "United Kingdom", "United States"
];

const phoneCodes = [
  { code: "+351", country: "PT" }, { code: "+1", country: "US/CA" }, { code: "+44", country: "GB" },
  { code: "+49", country: "DE" }, { code: "+33", country: "FR" }, { code: "+34", country: "ES" },
  { code: "+39", country: "IT" }, { code: "+31", country: "NL" }, { code: "+32", country: "BE" },
  { code: "+41", country: "CH" }, { code: "+43", country: "AT" }, { code: "+45", country: "DK" },
  { code: "+46", country: "SE" }, { code: "+47", country: "NO" }, { code: "+48", country: "PL" },
  { code: "+55", country: "BR" }, { code: "+61", country: "AU" }, { code: "+81", country: "JP" },
  { code: "+86", country: "CN" }, { code: "+91", country: "IN" }
];

const guestSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  dateOfBirth: z.string().min(1, "Required"),
  nationality: z.string().min(1, "Required"),
  idDocument: z.string().min(1, "Required"),
  issuingCountry: z.string().min(1, "Required"),
});

const formSchema = z.object({
  checkInDate: z.string().min(1, "Required"),
  checkOutDate: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phoneCode: z.string().optional(),
  phoneNumber: z.string().optional(),
  guests: z.array(guestSchema).min(1),
});

type FormData = z.infer<typeof formSchema>;

export default function GuestPage() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const searchString = useSearch();
  const [guestCount, setGuestCount] = useState(1);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checkInDate: "",
      checkOutDate: "",
      email: "",
      phoneCode: "+351",
      phoneNumber: "",
      guests: [{ firstName: "", lastName: "", dateOfBirth: "", nationality: "", idDocument: "", issuingCountry: "" }],
    },
  });

  // Pre-fill form from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(searchString);
    
    const checkin = params.get("checkin");
    const checkout = params.get("checkout");
    const email = params.get("email");
    const phone = params.get("phone");
    const guests = params.get("guests");
    
    if (checkin) form.setValue("checkInDate", checkin);
    if (checkout) form.setValue("checkOutDate", checkout);
    if (email) form.setValue("email", email);
    if (phone) form.setValue("phoneNumber", phone);
    
    if (guests) {
      const count = Math.min(Math.max(parseInt(guests) || 1, 1), 10);
      setGuestCount(count);
      const guestArray = Array.from({ length: count }, () => ({
        firstName: "", lastName: "", dateOfBirth: "", nationality: "", idDocument: "", issuingCountry: ""
      }));
      form.setValue("guests", guestArray);
    }
  }, [searchString, form]);

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const guestsFormatted = data.guests.map((g, i) => 
        `Guest ${i + 1}: ${g.firstName} ${g.lastName}, DOB: ${g.dateOfBirth}, Nationality: ${g.nationality}, ID: ${g.idDocument}, Issued by: ${g.issuingCountry}`
      ).join("\n");

      const message = `
PRE CHECK-IN FORM SUBMISSION
============================
Check-in: ${data.checkInDate}
Check-out: ${data.checkOutDate}
Email: ${data.email}
Phone: ${data.phoneCode || ""} ${data.phoneNumber || "N/A"}
Number of Guests: ${data.guests.length}

GUEST DETAILS:
${guestsFormatted}
      `.trim();

      const response = await fetch("https://formspree.io/f/xwvpwygv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `Pre Check-in: ${data.guests[0]?.firstName} ${data.guests[0]?.lastName}`,
          email: data.email,
          message: message,
          _replyto: data.email,
          _subject: `Pre Check-in: ${data.checkInDate} - ${data.guests[0]?.lastName}`,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: language === "pt" ? "Formulário enviado!" : "Form submitted!",
        description: language === "pt" 
          ? "Receberá as informações de check-in por email." 
          : "You will receive check-in information by email.",
      });
      form.reset();
      setGuestCount(1);
    },
    onError: () => {
      toast({
        title: language === "pt" ? "Erro" : "Error",
        description: language === "pt" 
          ? "Ocorreu um erro. Tente novamente." 
          : "An error occurred. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateGuestCount = (count: number) => {
    const newCount = Math.max(1, Math.min(10, count));
    setGuestCount(newCount);
    
    const currentGuests = form.getValues("guests");
    if (newCount > currentGuests.length) {
      const newGuests = [...currentGuests];
      for (let i = currentGuests.length; i < newCount; i++) {
        newGuests.push({ firstName: "", lastName: "", dateOfBirth: "", nationality: "", idDocument: "", issuingCountry: "" });
      }
      form.setValue("guests", newGuests);
    } else if (newCount < currentGuests.length) {
      form.setValue("guests", currentGuests.slice(0, newCount));
    }
  };

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const texts = {
    pt: {
      title: "Formulário de Pré Check-in",
      subtitle: "Caro Hóspede",
      explanation: "De acordo com a lei de alojamento turístico em Portugal (L 23/2007), devemos recolher os dados de entrada, saída e identificação de todos os hóspedes não portugueses, e enviá-los à Unidade de Coordenação de Fronteiras e Estrangeiros (UCFE).",
      pleaseNote: "Por favor preencha este formulário, relativo apenas a hóspedes não portugueses, para que possamos enviar-lhe, durante a manhã do seu check-in, as informações de self check-in.",
      thankYou: "Obrigado.",
      bookingDetails: "Detalhes da Reserva",
      checkIn: "Data de Check-in",
      checkOut: "Data de Check-out",
      yourEmail: "O seu Email",
      phone: "Telefone",
      numGuests: "Número de Hóspedes Não Portugueses",
      guestInfo: "Informação do Hóspede",
      guest: "Hóspede",
      firstName: "Primeiro Nome",
      lastName: "Apelido",
      dob: "Data de Nascimento",
      nationality: "Nacionalidade",
      idDoc: "Documento de Identificação",
      issuingCountry: "País Emissor",
      submit: "Enviar Check-in",
      submitting: "A enviar...",
      selectCountry: "Selecionar país",
    },
    en: {
      title: "Pre Check-in Form",
      subtitle: "Dear Guest",
      explanation: "Due to touristic accommodation law in Portugal (L 23/2007) we must collect the entry, exit, and identification details of all non Portuguese nationals guests, and send to Unidade de Coordenação de Fronteiras e Estrangeiros (UCFE).",
      pleaseNote: "So please fill this form, related to non Portuguese guests only, so we can send you, during the morning of your checkin, self checkin information.",
      thankYou: "Thank you.",
      bookingDetails: "Booking Details",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      yourEmail: "Your Email",
      phone: "Phone Number",
      numGuests: "Number of non Portuguese Guests",
      guestInfo: "Guest Information",
      guest: "Guest",
      firstName: "First Name",
      lastName: "Last Name",
      dob: "Date of Birth",
      nationality: "Nationality",
      idDoc: "ID Document",
      issuingCountry: "Issuing Country",
      submit: "Submit Check-in",
      submitting: "Submitting...",
      selectCountry: "Select country",
    },
  };

  const txt = texts[language as "pt" | "en"] || texts.en;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <Helmet>
        <title>{txt.title} | Azores4fun</title>
        <meta name="description" content={txt.explanation} />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <img src={logoGif} alt="Azores4fun Logo" className="h-24 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">{txt.title}</h1>
        </div>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">{txt.subtitle}</h2>
          <p className="text-muted-foreground mb-4">{txt.explanation}</p>
          <p className="text-muted-foreground mb-4">{txt.pleaseNote}</p>
          <p className="text-muted-foreground">{txt.thankYou}</p>
          <a href="https://www.azores4fun.com" className="text-primary hover:underline block mt-2">
            www.azores4fun.com
          </a>
        </Card>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">{txt.bookingDetails}</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="checkInDate">{txt.checkIn} *</Label>
                <Input
                  id="checkInDate"
                  type="date"
                  {...form.register("checkInDate")}
                  data-testid="input-checkin-date"
                />
                {form.formState.errors.checkInDate && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.checkInDate.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="checkOutDate">{txt.checkOut} *</Label>
                <Input
                  id="checkOutDate"
                  type="date"
                  {...form.register("checkOutDate")}
                  data-testid="input-checkout-date"
                />
                {form.formState.errors.checkOutDate && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.checkOutDate.message}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <Label htmlFor="email">{txt.yourEmail} *</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                data-testid="input-email"
              />
              {form.formState.errors.email && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <Label>{txt.phone}</Label>
              <div className="flex gap-2">
                <Select
                  value={form.watch("phoneCode")}
                  onValueChange={(value) => form.setValue("phoneCode", value)}
                >
                  <SelectTrigger className="w-32" data-testid="select-phone-code">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {phoneCodes.map((p) => (
                      <SelectItem key={p.code} value={p.code}>
                        {p.code} ({p.country})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  {...form.register("phoneNumber")}
                  className="flex-1"
                  data-testid="input-phone"
                />
              </div>
            </div>

            <div>
              <Label>{txt.numGuests} *</Label>
              <div className="flex items-center gap-3 mt-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => updateGuestCount(guestCount - 1)}
                  disabled={guestCount <= 1}
                  data-testid="button-decrease-guests"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-8 text-center" data-testid="text-guest-count">
                  {guestCount}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => updateGuestCount(guestCount + 1)}
                  disabled={guestCount >= 10}
                  data-testid="button-increase-guests"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">{txt.guestInfo}</h3>
            
            {Array.from({ length: guestCount }).map((_, index) => (
              <div key={index} className="mb-6 pb-6 border-b last:border-0 last:mb-0 last:pb-0">
                <h4 className="font-medium mb-4">{txt.guest} {index + 1}</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>{txt.firstName} *</Label>
                    <Input
                      {...form.register(`guests.${index}.firstName`)}
                      data-testid={`input-guest-${index}-firstname`}
                    />
                  </div>
                  <div>
                    <Label>{txt.lastName} *</Label>
                    <Input
                      {...form.register(`guests.${index}.lastName`)}
                      data-testid={`input-guest-${index}-lastname`}
                    />
                  </div>
                  <div>
                    <Label>{txt.dob} *</Label>
                    <Input
                      type="date"
                      {...form.register(`guests.${index}.dateOfBirth`)}
                      data-testid={`input-guest-${index}-dob`}
                    />
                  </div>
                  <div>
                    <Label>{txt.nationality} *</Label>
                    <Select
                      value={form.watch(`guests.${index}.nationality`)}
                      onValueChange={(value) => form.setValue(`guests.${index}.nationality`, value)}
                    >
                      <SelectTrigger data-testid={`select-guest-${index}-nationality`}>
                        <SelectValue placeholder={txt.selectCountry} />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>{txt.idDoc} *</Label>
                    <Input
                      {...form.register(`guests.${index}.idDocument`)}
                      placeholder={language === "pt" ? "Nº do passaporte ou BI" : "Passport or ID number"}
                      data-testid={`input-guest-${index}-id`}
                    />
                  </div>
                  <div>
                    <Label>{txt.issuingCountry} *</Label>
                    <Select
                      value={form.watch(`guests.${index}.issuingCountry`)}
                      onValueChange={(value) => form.setValue(`guests.${index}.issuingCountry`, value)}
                    >
                      <SelectTrigger data-testid={`select-guest-${index}-issuing`}>
                        <SelectValue placeholder={txt.selectCountry} />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={submitMutation.isPending}
            data-testid="button-submit-checkin"
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {txt.submitting}
              </>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" />
                {txt.submit}
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
