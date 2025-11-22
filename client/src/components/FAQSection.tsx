import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import FAQItem from "./FAQItem";
import { Link } from "wouter";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  icon: LucideIcon;
  faqs: FAQ[];
  href: string;
}

function FAQCategory({ title, icon: Icon, faqs, href }: FAQCategoryProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-md">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold" data-testid={`text-faq-category-${href.split('/').pop()}`}>
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
          data-testid={`button-view-more-${href.split('/').pop()}`}
        >
          Ver Mais
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </Link>
    </Card>
  );
}

interface FAQSectionProps {
  categories: FAQCategoryProps[];
}

export default function FAQSection({ categories }: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-heading">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre respostas rápidas às perguntas mais comuns sobre os nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FAQCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
