import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon, Loader2 } from "lucide-react";
import FAQItem from "./FAQItem";
import { Link } from "wouter";
import { useFaqsByServices } from "@/hooks/useDatabaseFaqs";

interface FAQCategoryConfig {
  service: string;
  title: string;
  icon: LucideIcon;
  href: string;
}

function FAQCategory({ service, title, icon: Icon, href, faqs, viewMoreText }: FAQCategoryConfig & { faqs: { question: string; answer: string }[], viewMoreText: string }) {
  if (faqs.length === 0) return null;
  
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-md">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold" data-testid={`text-faq-category-${service}`}>
          {title}
        </h3>
      </div>
      
      <div className="space-y-1">
        {faqs.slice(0, 2).map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <Link href={href}>
        <Button
          variant="ghost"
          className="mt-4 p-0 h-auto font-semibold group/btn"
          data-testid={`button-view-more-${service}`}
        >
          {viewMoreText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </Link>
    </Card>
  );
}

interface DatabaseFAQSectionProps {
  categories: FAQCategoryConfig[];
  title: string;
  subtitle: string;
  viewMoreText: string;
}

export default function DatabaseFAQSection({ categories, title, subtitle, viewMoreText }: DatabaseFAQSectionProps) {
  const services = categories.map(c => c.service);
  const { faqsByService, isLoading } = useFaqsByServices(services);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        </div>
      </section>
    );
  }

  const categoriesWithFaqs = categories.filter(cat => faqsByService[cat.service]?.length > 0);

  if (categoriesWithFaqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-heading">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesWithFaqs.map((category, index) => (
            <FAQCategory 
              key={index} 
              {...category} 
              faqs={faqsByService[category.service] || []}
              viewMoreText={viewMoreText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
