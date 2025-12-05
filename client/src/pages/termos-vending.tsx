import { useLanguage } from "@/i18n/LanguageContext";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TermosVending() {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.legal.termsVending.title} | Azores4fun</title>
        <meta name="description" content={t.legal.termsVending.metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <Link href="/">
            <Button variant="ghost" className="mb-6" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.common.backToHome}
            </Button>
          </Link>

          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              {t.legal.termsVending.title}
            </h1>

            <p className="lead">{t.legal.termsVending.intro}</p>

            <p>{t.legal.termsVending.lockerPurpose}</p>

            <p>{t.legal.termsVending.userDeclaration}</p>

            <p>{t.legal.termsVending.disagreement}</p>

            <p>{t.legal.termsVending.userResponsibility}</p>

            <p>{t.legal.termsVending.termsChanges}</p>

            <p>{t.legal.termsVending.termsEffective}</p>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.first.title}</h2>
              <p><em>({t.legal.termsVending.clauses.first.subtitle})</em></p>
              <p>{t.legal.termsVending.clauses.first.content}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.second.title}</h2>
              <p><em>({t.legal.termsVending.clauses.second.subtitle})</em></p>
              <p>1. {t.legal.termsVending.clauses.second.p1}</p>
              <p>2. {t.legal.termsVending.clauses.second.p2}</p>
              <p>3. {t.legal.termsVending.clauses.second.p3}</p>
              <p>4. {t.legal.termsVending.clauses.second.p4}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.third.title}</h2>
              <p><em>({t.legal.termsVending.clauses.third.subtitle})</em></p>
              <p>1. {t.legal.termsVending.clauses.third.p1}</p>
              <p>2. {t.legal.termsVending.clauses.third.p2}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.fourth.title}</h2>
              <p><em>({t.legal.termsVending.clauses.fourth.subtitle})</em></p>
              <p>1. {t.legal.termsVending.clauses.fourth.intro}</p>
              <ul>
                {t.legal.termsVending.clauses.fourth.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.fifth.title}</h2>
              <p><em>({t.legal.termsVending.clauses.fifth.subtitle})</em></p>
              <p>1. {t.legal.termsVending.clauses.fifth.intro}</p>
              <ul>
                {t.legal.termsVending.clauses.fifth.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.sixth.title}</h2>
              <p><em>({t.legal.termsVending.clauses.sixth.subtitle})</em></p>
              <p>{t.legal.termsVending.clauses.sixth.content}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.seventh.title}</h2>
              <p><em>({t.legal.termsVending.clauses.seventh.subtitle})</em></p>
              <p>{t.legal.termsVending.clauses.seventh.content}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.termsVending.clauses.eighth.title}</h2>
              <p><em>({t.legal.termsVending.clauses.eighth.subtitle})</em></p>
              <p>1. {t.legal.termsVending.clauses.eighth.p1}</p>
              <p>2. {t.legal.termsVending.clauses.eighth.p2}</p>
              <p>3. {t.legal.termsVending.clauses.eighth.p3}</p>
            </section>

            <section className="mb-8">
              <p>{t.legal.termsVending.updateNotice}</p>
              <p className="font-semibold">+351 961 515 990 | info@azores4fun.com</p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
