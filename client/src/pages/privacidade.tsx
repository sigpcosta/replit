import { useLanguage } from "@/i18n/LanguageContext";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacidade() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.legal.privacy.title} | Azores4fun</title>
        <meta name="description" content={t.legal.privacy.metaDescription} />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">

          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              {t.legal.privacy.title}
            </h1>

            <p className="lead">{t.legal.privacy.intro}</p>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.personalInfo.title}</h2>
              <p>{t.legal.privacy.sections.personalInfo.p1}</p>
              <p>{t.legal.privacy.sections.personalInfo.p2}</p>
              <p>{t.legal.privacy.sections.personalInfo.p3}</p>
              <p>{t.legal.privacy.sections.personalInfo.p4}</p>
              <p>{t.legal.privacy.sections.personalInfo.definition}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.usage.title}</h2>
              <p>{t.legal.privacy.sections.usage.p1}</p>
              <p>{t.legal.privacy.sections.usage.additionally}</p>
              <ul>
                <li>{t.legal.privacy.sections.usage.items[0]}</li>
                <li>{t.legal.privacy.sections.usage.items[1]}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.sharing.title}</h2>
              <p>{t.legal.privacy.sections.sharing.p1}</p>
              <p>{t.legal.privacy.sections.sharing.p2}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.advertising.title}</h2>
              <p>{t.legal.privacy.sections.advertising.content}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.rights.title}</h2>
              <p>{t.legal.privacy.sections.rights.p1}</p>
              <p>{t.legal.privacy.sections.rights.p2}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.retention.title}</h2>
              <p>{t.legal.privacy.sections.retention.content}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.minors.title}</h2>
              <p>{t.legal.privacy.sections.minors.content}</p>
            </section>

            <section className="mb-8">
              <h2>{t.legal.privacy.sections.changes.title}</h2>
              <p>{t.legal.privacy.sections.changes.content}</p>
            </section>

            <section className="mb-8">
              <p>{t.legal.privacy.contact}</p>
              <p className="font-semibold">+351 934 993 770 | info@azores4fun.com</p>
            </section>
          </article>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
