import { useLanguage } from "@/i18n/LanguageContext";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermosSite() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.legal.termsSite.title} | Azores4fun</title>
        <meta name="description" content={t.legal.termsSite.metaDescription} />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">

          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              {t.legal.termsSite.title}
            </h1>

            <section className="mb-8">
              <h2>1. {t.legal.termsSite.sections.intro.title}</h2>
              <p>{t.legal.termsSite.sections.intro.content}</p>
            </section>

            <section className="mb-8">
              <h2>2. {t.legal.termsSite.sections.products.title}</h2>
              <p>2.1. {t.legal.termsSite.sections.products.p1}</p>
              <p>2.2. {t.legal.termsSite.sections.products.p2}</p>
            </section>

            <section className="mb-8">
              <h2>3. {t.legal.termsSite.sections.prices.title}</h2>
              <p>3.1. {t.legal.termsSite.sections.prices.p1}</p>
              <p>3.2. {t.legal.termsSite.sections.prices.p2}</p>
            </section>

            <section className="mb-8">
              <h2>4. {t.legal.termsSite.sections.reservations.title}</h2>
              <p>4.1. {t.legal.termsSite.sections.reservations.p1}</p>
              <p>4.2. {t.legal.termsSite.sections.reservations.p2}</p>
              <p>4.3. {t.legal.termsSite.sections.reservations.p3}</p>
              <p>4.4. {t.legal.termsSite.sections.reservations.p4}</p>
            </section>

            <section className="mb-8">
              <h2>5. {t.legal.termsSite.sections.cancellation.title}</h2>
              <p>5.1. {t.legal.termsSite.sections.cancellation.p1}</p>
              <p>5.2. {t.legal.termsSite.sections.cancellation.p2}</p>
              <p>5.3. {t.legal.termsSite.sections.cancellation.p3}</p>
              <p>5.4. {t.legal.termsSite.sections.cancellation.p4}</p>
            </section>

            <section className="mb-8">
              <h2>6. {t.legal.termsSite.sections.guarantee.title}</h2>
              <p>6.1. {t.legal.termsSite.sections.guarantee.p1}</p>
              <p>6.2. {t.legal.termsSite.sections.guarantee.p2}</p>
            </section>

            <section className="mb-8">
              <h2>7. {t.legal.termsSite.sections.responsibilities.title}</h2>
              <p>7.1. {t.legal.termsSite.sections.responsibilities.p1}</p>
              <p>7.2. {t.legal.termsSite.sections.responsibilities.p2}</p>
            </section>

            <section className="mb-8">
              <h2>8. {t.legal.termsSite.sections.modifications.title}</h2>
              <p>8.1. {t.legal.termsSite.sections.modifications.p1}</p>
              <p>8.2. {t.legal.termsSite.sections.modifications.p2}</p>
            </section>

            <section className="mb-8">
              <h2>9. {t.legal.termsSite.sections.contacts.title}</h2>
              <p>{t.legal.termsSite.sections.contacts.content}</p>
              <p className="font-semibold">+351 961 515 990 | info@azores4fun.com</p>
            </section>
          </article>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
