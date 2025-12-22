import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import FAQItem from "./FAQItem";
import ContactDialog from "./ContactDialog";
import { useDatabaseFaqs } from "@/hooks/useDatabaseFaqs";
import { useLanguage } from "@/i18n/LanguageContext";

interface ServiceFAQsProps {
  service: string | string[];
  title: string;
}

export default function ServiceFAQs({ service, title }: ServiceFAQsProps) {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  
  const services = Array.isArray(service) ? service : [service];
  const { faqs: faq1, isLoading: loading1 } = useDatabaseFaqs(services[0]);
  const { faqs: faq2, isLoading: loading2 } = useDatabaseFaqs(services[1] || services[0]);
  const { faqs: faq3, isLoading: loading3 } = useDatabaseFaqs(services[2] || services[0]);
  const { faqs: faq4, isLoading: loading4 } = useDatabaseFaqs(services[3] || services[0]);
  
  const isLoading = loading1 || (services.length > 1 && loading2) || (services.length > 2 && loading3) || (services.length > 3 && loading4);
  
  let allFaqs = [...faq1];
  if (services.length > 1 && services[1] !== services[0]) allFaqs = [...allFaqs, ...faq2];
  if (services.length > 2 && services[2] !== services[0]) allFaqs = [...allFaqs, ...faq3];
  if (services.length > 3 && services[3] !== services[0]) allFaqs = [...allFaqs, ...faq4];

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
      </div>
    );
  }

  if (allFaqs.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" data-testid="text-faq-section-title">
        {title}
      </h2>
      
      <Card className="p-6">
        <div className="space-y-1">
          {allFaqs.map((faq, index) => (
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
