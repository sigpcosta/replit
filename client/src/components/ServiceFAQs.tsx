import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import FAQItem from "./FAQItem";
import ContactDialog from "./ContactDialog";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Faq } from "@shared/schema";

interface ServiceFAQsProps {
  service: string | string[];
  title: string;
}

export default function ServiceFAQs({ service, title }: ServiceFAQsProps) {
  const { t, language } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  
  const services = Array.isArray(service) ? service : [service];
  
  const { data: allFaqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  const filteredFaqs = allFaqs
    .filter(faq => services.includes(faq.service) && faq.isActive === "true")
    .map(faq => ({
      id: faq.id,
      question: language === "pt" ? faq.questionPt : faq.questionEn,
      answer: language === "pt" ? faq.answerPt : faq.answerEn,
    }));

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
      </div>
    );
  }

  if (filteredFaqs.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
        {title}
      </h2>
      
      <Card className="p-6">
        <div className="space-y-1">
          {filteredFaqs.map((faq, index) => (
            <FAQItem key={faq.id || index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Card>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          {t.common.faqNotFound}
        </p>
        <button
          onClick={() => setContactOpen(true)}
          className="text-primary font-semibold hover:underline"
          data-testid="link-contact-us"
        >
          {t.common.contactUs}
        </button>
      </div>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
