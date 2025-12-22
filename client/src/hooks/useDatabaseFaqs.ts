import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Faq } from "@shared/schema";

export function useDatabaseFaqs(service?: string) {
  const { language } = useLanguage();
  
  const { data: allFaqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  const faqs = service 
    ? allFaqs.filter(faq => faq.service === service && faq.isActive === "true")
    : allFaqs.filter(faq => faq.isActive === "true");

  const formattedFaqs = faqs.map(faq => ({
    id: faq.id,
    question: language === "pt" ? faq.questionPt : faq.questionEn,
    answer: language === "pt" ? faq.answerPt : faq.answerEn,
    service: faq.service
  }));

  return { faqs: formattedFaqs, isLoading, allFaqs };
}

export function useFaqsByServices(services: string[]) {
  const { language } = useLanguage();
  
  const { data: allFaqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  const faqsByService: Record<string, { question: string; answer: string }[]> = {};
  
  services.forEach(service => {
    faqsByService[service] = allFaqs
      .filter(faq => faq.service === service && faq.isActive === "true")
      .map(faq => ({
        question: language === "pt" ? faq.questionPt : faq.questionEn,
        answer: language === "pt" ? faq.answerPt : faq.answerEn
      }));
  });

  return { faqsByService, isLoading };
}
